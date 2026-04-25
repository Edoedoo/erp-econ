
// =====================================================
// 🔹 GLOBAL COLUMN REGISTRY
// =====================================================

export const COLUMN_REGISTRY = {

    // =====================================================
    // 🔹 BASIC / UNIVERSAL
    // =====================================================
  
    id: {
      key: "id",
      label: "ID",
      sortable: true
    },
  
    name: {
      key: "name",
      label: "Name",
      sortable: true
    },
  
    code: {
      key: "code",
      label: "Code",
      sortable: true
    },
  
    description: {
      key: "description",
      label: "Description"
    },
  
    active: {
      key: "active",
      label: "Active",
      render: (row) => (row.active ? "Yes" : "No")
    },
  
    // =====================================================
    // 🔹 DATE / TIME
    // =====================================================
  
    create_date: {
      key: "create_date",
      label: "Created At",
      sortable: true
    },
  
    write_date: {
      key: "write_date",
      label: "Last Updated"
    },
  
    date: {
      key: "date",
      label: "Date"
    },
  
    // =====================================================
    // 🔹 STATUS / STATE
    // =====================================================
  
    state: {
      key: "state",
      label: "Status",
      render: (row) => {
        const map = {
          draft: "Draft",
          confirmed: "Confirmed",
          done: "Done",
          cancel: "Cancelled"
        }
        return map[row.state] || row.state
      }
    },
  
    status: {
      key: "status",
      label: "Status"
    },
  
    // =====================================================
    // 🔹 USER / RELATION
    // =====================================================
  
    user: {
      key: "user",
      label: "User"
    },
  
    create_uid: {
      key: "create_uid",
      label: "Created By"
    },
  
    partner: {
      key: "partner",
      label: "Customer/Vendor"
    },
  
    company: {
      key: "company",
      label: "Company"
    },
  
    // =====================================================
    // 🔹 PRODUCT / INVENTORY
    // =====================================================
  
    product: {
      key: "product",
      label: "Product"
    },
  
    product_variant: {
      key: "product_variant",
      label: "Variant"
    },
  
    category: {
      key: "category",
      label: "Category"
    },
  
    uom: {
      key: "uom",
      label: "Unit"
    },
  
    qty: {
      key: "qty",
      label: "Quantity",
      align: "right"
    },
  
    qty_available: {
      key: "qty_available",
      label: "On Hand",
      align: "right"
    },
  
    reserved_qty: {
      key: "reserved_qty",
      label: "Reserved",
      align: "right"
    },
  
    incoming_qty: {
      key: "incoming_qty",
      label: "Incoming",
      align: "right"
    },
  
    outgoing_qty: {
      key: "outgoing_qty",
      label: "Outgoing",
      align: "right"
    },
  
    // =====================================================
    // 🔹 LOCATION / WAREHOUSE
    // =====================================================
  
    location: {
      key: "location",
      label: "Location"
    },
  
    source_location: {
      key: "source_location",
      label: "Source"
    },
  
    destination_location: {
      key: "destination_location",
      label: "Destination"
    },
  
    warehouse: {
      key: "warehouse",
      label: "Warehouse"
    },
  
    // =====================================================
    // 🔹 SALES / PURCHASE
    // =====================================================
  
    order_number: {
      key: "order_number",
      label: "Order"
    },
  
    reference: {
      key: "reference",
      label: "Reference"
    },
  
    origin: {
      key: "origin",
      label: "Source Document"
    },
  
    vendor: {
      key: "vendor",
      label: "Vendor"
    },
  
    customer: {
      key: "customer",
      label: "Customer"
    },
  
    // =====================================================
    // 🔹 FINANCIAL
    // =====================================================
  
    price: {
      key: "price",
      label: "Price",
      align: "right"
    },
  
    cost: {
      key: "cost",
      label: "Cost",
      align: "right"
    },
  
    total: {
      key: "total",
      label: "Total",
      align: "right"
    },
  
    subtotal: {
      key: "subtotal",
      label: "Subtotal",
      align: "right"
    },
  
    balance: {
      key: "balance",
      label: "Balance",
      align: "right"
    },
  
    currency: {
      key: "currency",
      label: "Currency"
    },



    scheduled_date: {
        key: "scheduled_date",
        label: "Scheduled Date"
      },
      
      parent: {
        key: "parent",
        label: "Parent"
      },
      
      uom_type: {
        key: "uom_type",
        label: "UoM Type"
      }
  
  }