import imgDefault from "../Assets/SVG/imgDefault.svg";

import { getGlobalUom } from "../core/shared/uomStore";
import { getGlobalUomCategories } from "../core/shared/uomCategoryStore";


const resolveValue = (field, value) => {
  if (value !== undefined && value !== null) return value;

  if (field.default !== undefined) return field.default;

  if (field.type === "boolean") return false;
  if (field.type === "number") return 0;

  return "";
};

const isDisabled = (field, mode) => {
  return mode === "view" || field.readonly;
};

const resolveRelationOptions = (relation) => {
  switch (relation) {
    case "uom":
      return getGlobalUom();

    case "uom_category":
      return getGlobalUomCategories();

    default:
      return [];
  }
};

export const resolveRelationLabel = (
  relation,
  value
) => {
  const options =
    resolveRelationOptions(relation);

  const found = options.find(
    (item) => item.key === value
  );

  return (
    found?.name ||
    found?.label ||
    value
  );
};

export const resolveBaseUom = (
  category
) => {
  const uoms = getGlobalUom();

  return uoms.find(
    (uom) =>
      uom.uom_category === category &&
      uom.type === "base"
  );
};

const TextField = ({
  field,
  value,
  onChange,
  mode,
  placeholder
}) => {
  return (
    <input
      type="text"
      value={resolveValue(field, value)}
      disabled={isDisabled(field, mode)}
      onChange={(e) =>
        onChange(field.key, e.target.value)
      }
      placeholder={placeholder}
    />
  );
};

const NumberField = ({
  field,
  value,
  onChange,
  mode
}) => {
  return (
    <input
      type="number"
      value={resolveValue(field, value)}
      disabled={isDisabled(field, mode)}
      onChange={(e) => {
        const val = e.target.value;

        onChange(
          field.key,
          val === ""
            ? null
            : Number(val)
        );
      }}
    />
  );
};

const BooleanField = ({
  field,
  value,
  onChange,
  mode
}) => {
  return (
    <input
      type="checkbox"
      checked={resolveValue(field, value)}
      disabled={isDisabled(field, mode)}
      onChange={(e) =>
        onChange(field.key, e.target.checked)
      }
    />
  );
};

const SelectField = ({
  field,
  value,
  onChange,
  mode
}) => {
  return (
    <select
      value={resolveValue(field, value)}
      disabled={isDisabled(field, mode)}
      onChange={(e) => {
        const val = e.target.value;

        onChange(
          field.key,
          val === ""
            ? null
            : val
        );
      }}
    >
      <option value="">
        Select...
      </option>

      {field.options?.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
};

const FavoriteRenderer = ({
  field,
  value,
  onChange,
  mode
}) => {
  const checked = Boolean(value);

  return (
    <button
      type="button"
      className={`favoriteField ${
        checked ? "active" : ""
      }`}
      disabled={mode === "view"}
      onClick={() =>
        onChange(field.key, !checked)
      }
    >
      ★
    </button>
  );
};

const RadioGroupField = ({
  field,
  value,
  onChange,
  mode
}) => {
  const currentValue = resolveValue(
    field,
    value
  );

  return (
    <div className="radioGroupField">
      {field.options?.map((opt) => (
        <label key={opt.value}>
          <input
            type="radio"
            name={field.key}
            value={opt.value}
            checked={
              currentValue === opt.value
            }
            disabled={isDisabled(field, mode)}
            onChange={() =>
              onChange(field.key, opt.value)
            }
          />

          {opt.label}
        </label>
      ))}
    </div>
  );
};

const RelationField = ({
  field,
  value,
  onChange,
  mode
}) => {
  const options =
    resolveRelationOptions(
      field.relation
    );

  return (
    <select
      value={value ?? ""}
      disabled={isDisabled(field, mode)}
      onChange={(e) =>
        onChange(field.key, e.target.value)
      }
    >
      <option value="">
        Select...
      </option>

      {options.map((opt) => (
        <option
          key={opt.id}
          value={opt.key}
        >
          {opt.name}
        </option>
      ))}
    </select>
  );
};

const ImageField = ({
  field,
  value,
  onChange,
  mode
}) => {
  const src = value || imgDefault;

  const inputId = `img-${field.key}`;

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url =
      URL.createObjectURL(file);

    onChange(field.key, url);
  };

  return (
    <div className="imageFieldOnly">
      <img
        src={src}
        alt=""
        onClick={() => {
          if (mode === "view") return;

          document
            .getElementById(inputId)
            ?.click();
        }}
      />

      {mode !== "view" && (
        <input
          id={inputId}
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export const FIELD_RENDERER = {
  text: TextField,
  number: NumberField,
  boolean: BooleanField,
  checkbox: BooleanField,
  select: SelectField,
  relation: RelationField,
  favorite: FavoriteRenderer,
  radioField: RadioGroupField,
  image: ImageField
};