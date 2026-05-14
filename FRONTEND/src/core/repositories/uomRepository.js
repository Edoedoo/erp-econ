
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


const mockUomStore = [];

export async function getUomList() {
  return mockUomStore;
}

export async function createUom(data) {
  const newUom = {
    id: Date.now().toString(),
    ...data
  };

  mockUomStore.push(newUom);

  return newUom;
}