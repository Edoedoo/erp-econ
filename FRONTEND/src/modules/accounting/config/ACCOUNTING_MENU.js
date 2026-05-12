import AccountingPage from "../pages/AccountingPage"
import { ACTIONS } from "../../../config/builder/actions"

export const ACCOUNTING_MENU = {
  path: "accounting",
  element: AccountingPage,

  views: [

    // =====================================================
    // 🔹 DASHBOARD
    // =====================================================

    {
      key: "dashboard",
      name: "Accounting Dashboard",
      path: "dashboard",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Dashboard",

      actions: [
        ACTIONS.CREATE
      ],

      columns: []
    },

    {
      key: "bank_cash_overview",
      name: "Bank & Cash Overview",
      path: "bank_cash_overview",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Dashboard",

      actions: [],

      columns: []
    },

    {
      key: "kpi",
      name: "Key Performance Indicator",
      path: "kpi",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Dashboard",

      actions: [],

      columns: []
    },

    // =====================================================
    // 🔹 CUSTOMERS
    // =====================================================

    {
      key: "customer_invoices",
      name: "Customer Invoices",
      path: "customer_invoices",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Customers",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "payments",
      name: "Payments",
      path: "payments",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Customers",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "credit_notes",
      name: "Credit Notes",
      path: "credit_notes",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Customers",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "follow_up",
      name: "Follow-up",
      path: "follow_up",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Customers",

      actions: [
        ACTIONS.REFRESH
      ],

      columns: []
    },

    // =====================================================
    // 🔹 VENDORS
    // =====================================================

    {
      key: "vendor_bills",
      name: "Vendor Bills",
      path: "vendor_bills",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Vendors",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "refunds",
      name: "Refunds",
      path: "refunds",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Vendors",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    // =====================================================
    // 🔹 BANK & CASH
    // =====================================================

    {
      key: "bank_statements",
      name: "Bank Statements",
      path: "bank_statements",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Bank & Cash",

      actions: [
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "cash_transactions",
      name: "Cash Transactions",
      path: "cash_transactions",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Bank & Cash",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "reconciliation",
      name: "Reconciliation",
      path: "reconciliation",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Bank & Cash",

      actions: [
        ACTIONS.VALIDATE,
        ACTIONS.REFRESH
      ],

      columns: []
    },

    // =====================================================
    // 🔹 ACCOUNTING
    // =====================================================

    {
      key: "journal_entries",
      name: "Journal Entries",
      path: "journal_entries",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Accounting",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "journal_items",
      name: "Journal Items",
      path: "journal_items",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Accounting",

      actions: [
        ACTIONS.EXPORT,
        ACTIONS.VIEW
      ],

      columns: []
    },

    {
      key: "general_ledger",
      name: "General Ledger",
      path: "general_ledger",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Accounting",

      actions: [
        ACTIONS.EXPORT,
        ACTIONS.REFRESH
      ],

      columns: []
    },

    {
      key: "chart_of_accounts",
      name: "Chart of Accounts",
      path: "chart_of_accounts",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Accounting",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EDIT,
        ACTIONS.DELETE
      ],

      columns: []
    },

    // =====================================================
    // 🔹 REPORTING
    // =====================================================

    {
      key: "profit_loss",
      name: "Profit & Loss",
      path: "profit_loss",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Reporting",

      actions: [
        ACTIONS.EXPORT,
        ACTIONS.REFRESH
      ],

      columns: []
    },

    {
      key: "balance_sheet",
      name: "Balance Sheet",
      path: "balance_sheet",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Reporting",

      actions: [
        ACTIONS.EXPORT,
        ACTIONS.REFRESH
      ],

      columns: []
    }

  ]
}