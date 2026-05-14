import { DEFAULT_UOM } from "../../shared/uom/defaultUom";

export function mergeUom(dbUom = []) {
  const map = new Map();

  for (const item of DEFAULT_UOM) {
    map.set(item.key, {
      ...item,
      source: "default"
    });
  }

  for (const item of dbUom) {
    if (!item?.key) continue;

    map.set(item.key, {
      ...map.get(item.key), 
      ...item,
      source: "db"
    });
  }

  return Array.from(map.values());
}