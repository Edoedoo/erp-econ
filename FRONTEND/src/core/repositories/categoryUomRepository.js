const MOCK_DB_UOM_CATEGORIES = [];

export async function fetchUomCategoriesFromDatabase() {
  return MOCK_DB_UOM_CATEGORIES;
}

export async function addCustomUomCategory(data) {
  MOCK_DB_UOM_CATEGORIES.push({
    id: Date.now().toString(),
    ...data
  });

  return true;
}