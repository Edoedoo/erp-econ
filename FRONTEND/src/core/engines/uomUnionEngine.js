
import { DEFAULT_UOM } from "../shared/uom/defaultUom";
import { getUomList } from "../repositories/uomRepository";

function normalizeUom(item = {}) {
  return {
    id: item.id || item.key,

    key: item.key || "",

    name: item.name || "",

    category: item.category || null,

    type: item.type || "reference",

    factor:
      typeof item.factor === "number"
        ? item.factor
        : 1,

    rounding:
      typeof item.rounding === "number"
        ? item.rounding
        : 0.01,

    active:
      typeof item.active === "boolean"
        ? item.active
        : true,

    isDefault:
      typeof item.isDefault === "boolean"
        ? item.isDefault
        : false
  };
}

export async function loadUomList() {
  const customUom = await getUomList();

  return [
    ...DEFAULT_UOM,
    ...customUom
  ].map(normalizeUom);
}























export class UoMUnionEngine {
  constructor(dbUom = []) {
    this.dbUom = dbUom;
  }
 
  normalize(item = {}, source = "db") {
    return {
      id:
        source === "default"
          ? `default_${item.key}`
          : `db_${item.id}`,

      key: item.key || item.id,
      name: item.name || "",

      uom_category: item.uom_category || null,

      type: item.type || "base",

      factor:
        typeof item.factor === "number"
          ? item.factor
          : 1,

      rounding:
        typeof item.rounding === "number"
          ? item.rounding
          : 0.01,

      active:
        typeof item.active === "boolean"
          ? item.active
          : true,

      source,

      isDefault:
        source === "default"
    };
  }

  getDefaultUom() {
    return DEFAULT_UOM.map(item =>
      this.normalize(item, "default")
    );
  }

  getDbUom() {
    return this.dbUom.map(item =>
      this.normalize(item, "db")
    );
  }

  getAllUom() {
    return [
      ...this.getDefaultUom(),
      ...this.getDbUom()
    ];
  }
  
}