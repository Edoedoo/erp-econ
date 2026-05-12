
export const INVENTORY_FIELDS = {

  name: {
    key: "name",
    label: "Name",
    type: "text",
    required: true
  },

  displayName: {
    key: "displayName",
    label: "Display Name",
    type: "text"
  },

  sku: {
    key: "sku",
    label: "SKU",
    type: "text"
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

  favorite: {
    key: "favorite",
    label: "",
    type: "favorite",
    default: false
  },

  image: {
    key: "image",
    label: "Image",
    type: "image"
  },

  active: {
    key: "active",
    label: "Active",
    type: "boolean",
    default: true
  },

  type: {
    key: "type",
    label: "Product Type",
    type: "radioField",
    default: "",

    options: [
      { value: "storable", label: "Storable Product" },
      { value: "consumable", label: "Consumable" },
      { value: "service", label: "Service" }
    ]
  },

  role: {
    key: "role",
    label: "Role",
    type: "select",

    options: [
      { value: "finished", label: "Finished Product" },
      { value: "raw", label: "Raw Material" },
      { value: "asset", label: "Asset" }
    ]
  },

  brand: {
    key: "brand",
    label: "Brand",
    type: "relation",
    relation: "product_brands"
  },

  category: {
    key: "category",
    label: "Category",
    type: "relation",
    relation: "product_categories"
  },

  tags: {
    key: "tags",
    label: "Tags",
    type: "relation",
    relation: "product_tags"
  },

  canSell: {
    key: "canSell",
    label: "Sales",
    type: "boolean",
    default: true
  },

  canPurchase: {
    key: "canPurchase",
    label: "Purchase",
    type: "boolean",
    default: true
  },

  expense: {
    key: "expense",
    label: "Expenses",
    type: "boolean",
    default: false
  },

  rental: {
    key: "rental",
    label: "Rental",
    type: "boolean",
    default: false
  },

  vendor: {
    key: "vendor",
    label: "Vendor",
    type: "relation",
    relation: "partners"
  },

  vendorCode: {
    key: "vendorCode",
    label: "Vendor Product Code",
    type: "text"
  },

  customerLeadTime: {
    key: "customerLeadTime",
    label: "Customer Lead Time",
    type: "number",
    default: 0
  },

  purchaseLeadTime: {
    key: "purchaseLeadTime",
    label: "Purchase Lead Time",
    type: "number",
    default: 0
  },

  salesDescription: {
    key: "salesDescription",
    label: "Sales Description",
    type: "textarea"
  },

  purchaseDescription: {
    key: "purchaseDescription",
    label: "Purchase Description",
    type: "textarea"
  },

  internalNotes: {
    key: "internalNotes",
    label: "Internal Notes",
    type: "textarea"
  },

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

  salesTaxes: {
    key: "salesTaxes",
    label: "Customer Taxes",
    type: "relation",
    relation: "account_taxes"
  },

  purchaseTaxes: {
    key: "purchaseTaxes",
    label: "Vendor Taxes",
    type: "relation",
    relation: "account_taxes"
  },

  currency: {
    key: "currency",
    label: "Currency",
    type: "relation",
    relation: "currencies"
  },

  uom: {
    key: "uom",
    label: "Unit of Measure",
    type: "relation",
    relation: "uom"
  },

  purchaseUom: {
    key: "purchaseUom",
    label: "Purchase UOM",
    type: "relation",
    relation: "uom"
  },

  qty_available: {
    key: "qty_available",
    label: "On Hand",
    type: "number",
    readonly: true
  },

  reserved_qty: {
    key: "reserved_qty",
    label: "Reserved",
    type: "number",
    readonly: true
  },

  forecast_qty: {
    key: "forecast_qty",
    label: "Forecast",
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

  inventoryQuantity: {
    key: "inventoryQuantity",
    label: "Inventory Quantity",
    type: "number"
  },

  countedQuantity: {
    key: "countedQuantity",
    label: "Counted Quantity",
    type: "number"
  },

  differenceQuantity: {
    key: "differenceQuantity",
    label: "Difference",
    type: "number",
    readonly: true
  },

  minQty: {
    key: "minQty",
    label: "Minimum Quantity",
    type: "number",
    default: 0
  },

  maxQty: {
    key: "maxQty",
    label: "Maximum Quantity",
    type: "number",
    default: 0
  },

  reorderingRule: {
    key: "reorderingRule",
    label: "Reordering Rule",
    type: "boolean",
    default: false
  },

  tracking: {
    key: "tracking",
    label: "Tracking",
    type: "radioField",
    default: "none",

    options: [
      { value: "none", label: "No Tracking" },
      { value: "lot", label: "By Lots" },
      { value: "serial", label: "By Unique Serial Number" }
    ]
  },

  lot: {
    key: "lot",
    label: "Lot",
    type: "text"
  },

  serial: {
    key: "serial",
    label: "Serial Number",
    type: "text"
  },

  expirationDate: {
    key: "expirationDate",
    label: "Expiration Date",
    type: "date"
  },

  trackingExpiry: {
    key: "trackingExpiry",
    label: "Expiration Tracking",
    type: "boolean",
    default: false
  },

  expirationDays: {
    key: "expirationDays",
    label: "Expiration Days",
    type: "number",
    default: 0
  },


  warehouse: {
    key: "warehouse",
    label: "Warehouse",
    type: "relation",
    relation: "warehouses"
  },

  location: {
    key: "location",
    label: "Location",
    type: "relation",
    relation: "stock_locations"
  },

  sourceLocation: {
    key: "sourceLocation",
    label: "Source Location",
    type: "relation",
    relation: "stock_locations"
  },

  destinationLocation: {
    key: "destinationLocation",
    label: "Destination Location",
    type: "relation",
    relation: "stock_locations"
  },

  operationType: {
    key: "operationType",
    label: "Operation Type",
    type: "relation",
    relation: "operation_types"
  },

  transferType: {
    key: "transferType",
    label: "Transfer Type",
    type: "select",

    options: [
      { value: "receipt", label: "Receipt" },
      { value: "delivery", label: "Delivery" },
      { value: "internal", label: "Internal Transfer" }
    ]
  },

  state: {
    key: "state",
    label: "Status",
    type: "select",

    options: [
      { value: "draft", label: "Draft" },
      { value: "waiting", label: "Waiting" },
      { value: "ready", label: "Ready" },
      { value: "done", label: "Done" },
      { value: "cancel", label: "Cancelled" }
    ]
  },

  scheduledDate: {
    key: "scheduledDate",
    label: "Scheduled Date",
    type: "date"
  },

  completedDate: {
    key: "completedDate",
    label: "Completed Date",
    type: "date"
  },

  sourceDocument: {
    key: "sourceDocument",
    label: "Source Document",
    type: "text"
  },

  origin: {
    key: "origin",
    label: "Origin",
    type: "text"
  },

  priority: {
    key: "priority",
    label: "Priority",
    type: "select",

    options: [
      { value: "0", label: "Low" },
      { value: "1", label: "Normal" },
      { value: "2", label: "High" }
    ]
  },

  route: {
    key: "route",
    label: "Route",
    type: "relation",
    relation: "stock_routes"
  },

  procurementMethod: {
    key: "procurementMethod",
    label: "Procurement Method",
    type: "select",

    options: [
      { value: "make_to_stock", label: "Make To Stock" },
      { value: "make_to_order", label: "Make To Order" }
    ]
  },

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

  length: {
    key: "length",
    label: "Length",
    type: "number"
  },

  width: {
    key: "width",
    label: "Width",
    type: "number"
  },

  height: {
    key: "height",
    label: "Height",
    type: "number"
  },

  packaging: {
    key: "packaging",
    label: "Packaging",
    type: "relation",
    relation: "product_packaging"
  },

  packageType: {
    key: "packageType",
    label: "Package Type",
    type: "relation",
    relation: "package_types"
  },

  image: {
    key: "image",
    label: "Image",
    type: "image"
  },

// =========================
// UOM CATEGORY
// =========================

uomCategoryName: {
  key: "uomCategoryName",
  label: "UOM Category Name",
  type: "text",
  required: true
},

uomCategoryKey: {
  key: "uomCategoryKey",
  label: "UOM Category Key",
  type: "text",
  required: true
},

uomCategoryActive: {
  key: "uomCategoryActive",
  label: "Active",
  type: "boolean",
  default: true
},

// =========================
// UOM
// =========================

uom_name: {
  key: "name",
  label: "Unit Name",
  type: "text",
  required: true,
},

uom_key: {
  key: "key",
  label: "Unit Key",
  type: "text",
  required: true
},

uom_category: {
  key: "uom_category",
  label: "Category",
  type: "relation",
  relation: "uom_category",
  required: true,

  message:
    "Units within the same category can convert between each other."
},

uom_type: {
  key: "type",
  label: "Type",
  type: "select",
  required: true,

  message:
    "Defines how this unit relates to the reference unit inside the same category.",

  options: [
    {
      label: "Bigger",
      value: "bigger"
    },
    {
      label: "Smaller",
      value: "smaller"
    }
  ]
},

uom_factor: {
  key: "factor",
  label: "Ratio",
  type: "number",
  default: 1,
  message:
    "Defines the conversion ratio against the reference unit. Example: 1 Box = 12 Pcs."
},

uom_rounding: {
  key: "rounding",
  label: "Rounding Precision",
  type: "number",
  default: 0.01,
  message:
    "Controls quantity rounding precision during stock operations and calculations."
},

uom_active: {
  key: "active",
  label: "Active",
  type: "boolean",
  default: true,
  message:
    "Inactive units will be hidden from selection but existing records remain unchanged."
},

uom_isDefault: {
  key: "isDefault",
  label: "Default Data",
  type: "boolean",
  default: false
},

}