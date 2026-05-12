import { INVENTORY_FIELDS } from "../../modules/inventory/config/inventoryFields";

const MODULE_FIELDS = [
  INVENTORY_FIELDS,
];

export const GLOBAL_FIELDS = {};

MODULE_FIELDS.forEach((moduleFields) => {

  Object.entries(moduleFields).forEach(
    ([key, fieldConfig]) => {

      if (GLOBAL_FIELDS[key]) {

        console.warn(
          `⚠️ Duplicate field detected: "${key}"`
        );

        console.warn("Old:", GLOBAL_FIELDS[key]);
        console.warn("New:", fieldConfig);
      }

      GLOBAL_FIELDS[key] = fieldConfig;
    }
  );
});

export const field = (
  name,
  override = {}
) => {

  const baseField = GLOBAL_FIELDS[name];

  if (!baseField) {

    console.warn(
      `⚠️ Field "${name}" not found in GLOBAL_FIELDS`
    );

    return {
      key: name,
      label: name,
      type: "text",
      ...override,
    };
  }

  return {
    ...baseField,
    ...override,
  };
};