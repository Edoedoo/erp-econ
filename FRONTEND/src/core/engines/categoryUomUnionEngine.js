
import { UOM_CATEGORIES } from "../shared/uom/uomCategories";

export class UoMCategoryUnionEngine {
  constructor(dbCategories = []) {
    this.dbCategories = dbCategories;
  }

  normalize(item = {}, source = "db") {
    return {
      id:
        source === "default"
          ? `default_${item.key}`
          : `db_${item.id}`,

      key: item.key || item.id,

      name: item.name || "",

      active:
        typeof item.active === "boolean"
          ? item.active
          : true,

      source,

      isDefault:
        source === "default"
    };
  }

  getDefaultCategories() {
    return UOM_CATEGORIES.map(item =>
      this.normalize(item, "default")
    );
  }

  getDbCategories() {
    return this.dbCategories.map(item =>
      this.normalize(item, "db")
    );
  }

  getAllCategories() {
    return [
      ...this.getDefaultCategories(),
      ...this.getDbCategories()
    ];
  }
}