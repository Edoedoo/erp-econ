export const DEFAULT_UOM = [

  // =========================
  // UNIT
  // =========================
  {
    key: "pcs",
    name: "PCS",
    uom_category: "unit",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "box",
    name: "Box",
    uom_category: "unit",
    type: "bigger",
    factor: 12,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "dozen",
    name: "Dozen",
    uom_category: "unit",
    type: "bigger",
    factor: 12,
    rounding: 1,
    active: true,
    isDefault: true
  },

  // =========================
  // PACKAGE
  // =========================
  {
    key: "pack",
    name: "Pack",
    uom_category: "package",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "carton",
    name: "Carton",
    uom_category: "package",
    type: "bigger",
    factor: 24,
    rounding: 1,
    active: true,
    isDefault: true
  },

  // =========================
  // WEIGHT
  // =========================
  {
    key: "kg",
    name: "Kg",
    uom_category: "weight",
    type: "base",
    factor: 1,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "gram",
    name: "Gram",
    uom_category: "weight",
    type: "smaller",
    factor: 0.001,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "ton",
    name: "Ton",
    uom_category: "weight",
    type: "bigger",
    factor: 1000,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  // =========================
  // LENGTH
  // =========================
  {
    key: "meter",
    name: "Meter",
    uom_category: "length",
    type: "base",
    factor: 1,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "cm",
    name: "Cm",
    uom_category: "length",
    type: "smaller",
    factor: 0.01,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "km",
    name: "Km",
    uom_category: "length",
    type: "bigger",
    factor: 1000,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  // =========================
  // TIME
  // =========================
  {
    key: "hour",
    name: "Jam",
    uom_category: "time",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "day",
    name: "Hari",
    uom_category: "time",
    type: "bigger",
    factor: 24,
    rounding: 1,
    active: true,
    isDefault: true
  },

  // =========================
  // WORKING TIME
  // Default kerja = 8 jam
  // =========================
  {
    key: "working_hour",
    name: "Jam Kerja",
    uom_category: "working_time",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "working_day",
    name: "Hari Kerja",
    uom_category: "working_time",
    type: "bigger",
    factor: 8,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "working_week",
    name: "Minggu Kerja",
    uom_category: "working_time",
    type: "bigger",
    factor: 40,
    rounding: 1,
    active: true,
    isDefault: true
  },

  // =========================
  // AREA
  // =========================
  {
    key: "m2",
    name: "m²",
    uom_category: "area",
    type: "base",
    factor: 1,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "hectare",
    name: "Hectare",
    uom_category: "area",
    type: "bigger",
    factor: 10000,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  // =========================
  // VOLUME
  // =========================
  {
    key: "liter",
    name: "Liter",
    uom_category: "volume",
    type: "base",
    factor: 1,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  {
    key: "ml",
    name: "mL",
    uom_category: "volume",
    type: "smaller",
    factor: 0.001,
    rounding: 0.01,
    active: true,
    isDefault: true
  },

  // =========================
  // DIGITAL
  // =========================
  {
    key: "license",
    name: "License",
    uom_category: "license",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  },

  {
    key: "subscription_month",
    name: "Subscription / Month",
    uom_category: "subscription",
    type: "base",
    factor: 1,
    rounding: 1,
    active: true,
    isDefault: true
  }

];