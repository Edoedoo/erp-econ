import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import "./formPage.css";

import { FIELD_RENDERER } from "../../config/fieldsRenderer";

function FormPage() {
  const layoutContext = useOutletContext();


  const route = layoutContext?.route || {};
  const setFormData = layoutContext?.formStore?.setFormData;

  const { action, currentView, record } = route;
  const form = currentView?.form || {};
  const sections = form?.sections || [];

  const header = form?.header || {};
  const headerMedia = header?.media || [];
  const headerName = header?.name || [];
  const headerCheckbox = header?.checkbox || [];

  const mode = useMemo(() => {
    if (action === "create") return "create";
    if (action === "edit") return "edit";
    return "view";
  }, [action]);

  const [dataFormSection, setDataFormSection] = useState({});
  const [activeSection, setActiveSection] = useState(
    sections[0]?.key || null
  );

  const activeSectionData = useMemo(
    () => sections.find((s) => s.key === activeSection),
    [sections, activeSection]
  );

  const handleChange = (key, value) => {
    setDataFormSection((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resolveFieldDefaultValue = (field) => {
    if (field.default !== undefined) return field.default;
    if (field.type === "checkbox") return false;
    if (field.type === "number") return 0;
    if (field.type === "relation") return null;
    return "";
  };

  const applyDefaultValues = (fields = [], target = {}) => {
    fields.forEach((field) => {
      target[field.key] = resolveFieldDefaultValue(field);
    });
  };

  const getAllFieldsFromColumns = (columns = []) => {
    return columns.flat();
  };

  const buildInitialFormData = () => {
    const initial = {};

    applyDefaultValues(headerMedia, initial);
    applyDefaultValues(headerName, initial);
    applyDefaultValues(headerCheckbox, initial);

    sections.forEach((section) => {
      const fields = getAllFieldsFromColumns(section.columns);
      applyDefaultValues(fields, initial);
    });

    if (record && typeof record === "object") {
      Object.keys(record).forEach((key) => {
        initial[key] = record[key];
      });
    }

    return initial;
  };

  useEffect(() => {
    const initial = buildInitialFormData();
    setDataFormSection(initial);
  }, [headerMedia, headerName, headerCheckbox, sections, record]);

  const payload = useMemo(() => {
    return {
      meta: {
        mode,
        viewKey: currentView?.key || null,
        name: currentView?.name || null,
      },

      header: {
        media: headerMedia.reduce((acc, field) => {
          acc[field.key] = dataFormSection[field.key];
          return acc;
        }, {}),

        name: headerName.reduce((acc, field) => {
          acc[field.key] = dataFormSection[field.key];
          return acc;
        }, {}),

        checkbox: headerCheckbox.reduce((acc, field) => {
          acc[field.key] = dataFormSection[field.key];
          return acc;
        }, {}),
      },

      sections: sections.reduce((acc, section) => {
        const fields = getAllFieldsFromColumns(section.columns);

        acc[section.key] = {
          label: section.label,
          data: fields.reduce((fieldAcc, field) => {
            fieldAcc[field.key] = dataFormSection[field.key];
            return fieldAcc;
          }, {}),
        };

        return acc;
      }, {}),
    };
  }, [
    mode,
    currentView,
    headerMedia,
    headerName,
    headerCheckbox,
    sections,
    dataFormSection,
  ]);

  useEffect(() => {
    setFormData?.(payload);
  }, [payload, setFormData]);

  const renderFields = (fields = []) => {
    return fields.map((field) => {
      if (!field) return null;

      const Renderer = FIELD_RENDERER[field.type];

      if (field.type === "image") {
        return (
          <div key={field.key} className="imageRowFull">
            <Renderer
              field={field}
              value={dataFormSection[field.key]}
              onChange={handleChange}
              mode={mode}
            />
          </div>
        );
      }

      return (
        <div key={field.key} className="fieldRow">
          <label>{field.label}</label>

          {Renderer ? (
            <Renderer
              field={field}
              value={dataFormSection[field.key]}
              onChange={handleChange}
              mode={mode}
            />
          ) : (
            <span>⚠️ No renderer for "{field.type}"</span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="formPage">

      <div className="topHeaderForm">
        <span>{mode}</span>
      </div>

      <div className="headerForm">

        <div className="headerFormLeft">

          <h5>{currentView?.name || "-"}</h5>

          <div className="nameGroup">

            {headerName.map((field) => {
              const Renderer = FIELD_RENDERER[field.type];
              if (!Renderer) return null;

              if (field.type === "favorite") {
                return (
                  <div key={field.key} className="favoriteWrapper">
                    <Renderer
                      field={field}
                      value={dataFormSection[field.key]}
                      onChange={handleChange}
                      mode={mode}
                    />
                  </div>
                );
              }

              return (
                <Renderer
                  key={field.key}
                  field={field}
                  value={dataFormSection[field.key]}
                  onChange={handleChange}
                  mode={mode}
                  placeholder={`${field.label}...`}
                />
              );
            })}

          </div>

          <div className="checkboxGroup">

            {headerCheckbox.map((field) => {
              const Renderer = FIELD_RENDERER[field.type];
              if (!Renderer) return null;

              return (
                <label key={field.key}>
                  <Renderer
                    field={field}
                    value={dataFormSection[field.key]}
                    onChange={handleChange}
                    mode={mode}
                  />
                  {field.label}
                </label>
              );
            })}

          </div>

        </div>

        <div className="headerFormRight">
          {renderFields(headerMedia)}
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

        <div className="bodySection">

          {activeSectionData?.columns?.map((column, index) => (
            <div key={index} className="bodySectionColumn">
              {renderFields(column)}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default FormPage;