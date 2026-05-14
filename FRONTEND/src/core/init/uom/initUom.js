import { loadUomEngine } from "../../engines/uom";

export async function initUom(store) {
  const uomData = await loadUomEngine();

  store.set("uom", uomData);

  return uomData;
}