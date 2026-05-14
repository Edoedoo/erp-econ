import { getUomList } from "../../repositories/uomRepository";
import { mergeUom } from "./merge";
import { normalizeUom } from "./normalize";

export async function loadUomEngine() {
  const dbUom = await getUomList();

  const merged = mergeUom(dbUom);

  const normalized = merged.map((item) =>
    normalizeUom(item, item.source || "db")
  );

  return normalized;
}