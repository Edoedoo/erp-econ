import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import "./formPage.css";
import { INVENTORY_FIELDS } from "../../modules/inventory/config/inventoryFields";
import imgDefault from "../../Assets/SVG/imgDefault.svg";

const FIELD_RENDERER = {
  text: (field, value, onChange) => (
    <input
      type="text"
      value={value || ""}
      onChange={(e) => onChange(field.key, e.target.value)}
    />
  ),

  number: (field, value, onChange) => (
    <input
      type="number"
      value={value || 0}
      onChange={(e) => onChange(field.key, Number(e.target.value))}
    />
  ),

  checkbox: (field, value, onChange) => (
    <input
      type="checkbox"
      checked={!!value}
      onChange={(e) => onChange(field.key, e.target.checked)}
    />
  ),

  boolean: (field, value, onChange) => (
    <input
      type="checkbox"
      checked={!!value}
      onChange={(e) => onChange(field.key, e.target.checked)}
    />
  ),

  select: (field, value, onChange) => (
    <select
      value={value || ""}
      onChange={(e) => onChange(field.key, e.target.value)}
    >
      <option value="">Select...</option>
      {field.options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
};

function FormPage() {

  const layoutContext = useOutletContext();

  const route = layoutContext?.route || {};
  const setFormData = layoutContext?.formStore?.setFormData;

  const { action, currentView } = route;

  const form = currentView?.form || {};
  const sections = form?.sections || [];
  const headerFields = form?.headerFields || [];

  const mode = useMemo(() => {
    if (action === "create") return "create";
    if (action === "edit") return "edit";
    return "view";
  }, [action]);

  const [dataFormSection, setDataFormSection] = useState({});
  const [activeSection, setActiveSection] = useState(
    sections[0]?.key || null
  );

  const fileInputRef = useRef(null);

  const [image, setImage] = useState(currentView?.image || "");
  const [alt] = useState(currentView?.alt || "svg");

  const activeSectionData = useMemo(
    () => sections.find((s) => s.key === activeSection),
    [sections, activeSection]
  );

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleChange = (key, value) => {
    setDataFormSection((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const payload = useMemo(() => {
    return {
      meta: {
        mode,
        viewKey: currentView?.key || null,
        name: currentView?.name || null,
      },

      image: {
        src: image,
        alt: alt,
      },

      sections: sections.reduce((acc, section) => {
        acc[section.key] = {
          label: section.label,
          data: section.fields?.reduce((fieldAcc, key) => {
            fieldAcc[key] = dataFormSection[key];
            return fieldAcc;
          }, {}),
        };
        return acc;
      }, {}),
    };
  }, [mode, currentView, image, alt, sections, dataFormSection]);

  useEffect(() => {
    setFormData?.(payload);
  }, [payload, setFormData]);

  return (
    <div className="formPage">

      <div className="topHeaderForm">
        <span>{mode}</span>
      </div>

      <div className="headerForm">

        <div className="headerFormLeft">
          <h2>{currentView?.name || "-"}</h2>

          <div className="checkboxGroup">
            <label>
              <input type="checkbox" /> Can be Sold
            </label>
            <label>
              <input type="checkbox" /> Can be Purchased
            </label>
          </div>
        </div>

        <div className="headerFormRight">

          <img
            src={image || imgDefault}
            alt={alt}
            style={{
              cursor: mode === "view" ? "default" : "pointer",
            }}
            onClick={() => {
              if (mode === "view") return;
              fileInputRef.current?.click();
            }}
          />

          {(mode === "edit" || mode === "create") && (
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          )}

        </div>

      </div>

      <div className="sectionTabs">
        {sections.map((section) => (
          <button
            key={section.key}
            className={activeSection === section.key ? "active" : ""}
            onClick={() => setActiveSection(section.key)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="sectionForm">

        <h3>{activeSectionData?.label}</h3>

        <div className="bodySection">

          {activeSectionData?.fields?.map((fieldKey) => {
            const field = INVENTORY_FIELDS[fieldKey];

            if (!field) return null;

            return (
              <div key={field.key} className="fieldRow">
                <label>{field.label}</label>

                {FIELD_RENDERER[field.type]
                  ? FIELD_RENDERER[field.type](
                      field,
                      dataFormSection[field.key],
                      handleChange
                    )
                  : null}
              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default FormPage;