import { DEFAULT_UOM_SCHEMA } from "../../shared/uom/uomSchema";

export function normalizeUom(item = {}, source = "db") {
  const base = { ...DEFAULT_UOM_SCHEMA };

  const normalized = {
    id:
      source === "default"
        ? `default_${item.key}`
        : `db_${item.id}`,

    key: item.key ?? "",
    name: item.name ?? "",

    category: item.category ?? "",

    type: item.type ?? "reference",

    factor:
      typeof item.factor === "number"
        ? item.factor
        : base.factor,

    rounding:
      typeof item.rounding === "number"
        ? item.rounding
        : base.rounding,

    active:
      typeof item.active === "boolean"
        ? item.active
        : base.active,

    isDefault: source === "default",

    source
  };

  return normalized;
}