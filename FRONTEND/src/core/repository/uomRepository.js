
const MOCK_DB_UOM = [];

export async function fetchUomFromDatabase() {
  return MOCK_DB_UOM;
}

export async function addCustomUom(data) {
  MOCK_DB_UOM.push({
    id: Date.now().toString(),
    ...data
  });

  return true;
} 