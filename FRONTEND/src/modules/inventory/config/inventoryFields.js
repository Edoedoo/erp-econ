// =====================================================
// 🔹 INVENTORY FIELD REGISTRY
// =====================================================

export const INVENTORY_FIELDS = {

    // =====================================================
    // 🔹 PRODUCT CORE
    // =====================================================
  
    name: {
      key: "name",
      label: "Product Name",
      type: "text",
      required: true
    },
  
    reference: {
      key: "reference",
      label: "Internal Reference",
      type: "text"
    },
  
    barcode: {
      key: "barcode",
      label: "Barcode",
      type: "text"
    },
  
    type: {
      key: "type",
      label: "Product Type",
      type: "select",
      required: true,
      options: [
        { value: "storable", label: "Storable Product" },
        { value: "consumable", label: "Consumable" },
        { value: "service", label: "Service" }
      ]
    },
  
    role: {
      key: "role",
      label: "Product Role",
      type: "select",
      options: [
        { value: "finished", label: "Finished Product" },
        { value: "raw", label: "Raw Material" },
        { value: "asset", label: "Asset" }
      ]
    },
  
    active: {
      key: "active",
      label: "Active",
      type: "boolean",
      default: true
    },
  
    // =====================================================
    // 🔹 CATEGORY & UOM
    // =====================================================
  
    category: {
      key: "category",
      label: "Category",
      type: "relation",
      relation: "product_categories"
    },
  
    uom: {
      key: "uom",
      label: "Unit of Measure",
      type: "relation",
      relation: "units_of_measure"
    },
  
    // =====================================================
    // 🔹 PRICING
    // =====================================================
  
    price: {
      key: "price",
      label: "Sales Price",
      type: "number",
      default: 0
    },
  
    cost: {
      key: "cost",
      label: "Cost",
      type: "number",
      default: 0
    },
  
    // =====================================================
    // 🔹 INVENTORY
    // =====================================================
  
    qty_available: {
      key: "qty_available",
      label: "On Hand",
      type: "number",
      readonly: true
    },
  
    incoming_qty: {
      key: "incoming_qty",
      label: "Incoming",
      type: "number",
      readonly: true
    },
  
    outgoing_qty: {
      key: "outgoing_qty",
      label: "Outgoing",
      type: "number",
      readonly: true
    },
  
    // =====================================================
    // 🔹 LOGISTICS
    // =====================================================
  
    weight: {
      key: "weight",
      label: "Weight",
      type: "number"
    },
  
    volume: {
      key: "volume",
      label: "Volume",
      type: "number"
    },
  
    // =====================================================
    // 🔹 TRACKING
    // =====================================================
  
    tracking: {
      key: "tracking",
      label: "Tracking",
      type: "select",
      options: [
        { value: "none", label: "No Tracking" },
        { value: "lot", label: "By Lots" },
        { value: "serial", label: "By Unique Serial Number" }
      ]
    }
  
  }