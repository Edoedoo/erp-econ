import { col } from "../../../../config/builder/columnHelper";
import { ACTIONS } from "../../../../config/builder/actions";
import { field } from "../../../../config/builder/fieldsHelper";

import UnitOfMeasure from "../../pages/views/UnitOfMeasurePage";

import { resolveBaseUom } from "../../../../config/renderer/fieldsRenderer";

export const UNIT_OF_MEASURE = {
  key: "units_of_measure",
  name: "Units of Measure",
  path: "units_of_measure",
  defaultGroup: "",
  defaultView: "list",
  element: UnitOfMeasure,
  group: "Products",

  actions: [
    ACTIONS.CREATE,
    ACTIONS.IMPORT,
    ACTIONS.EXPORT,
    ACTIONS.SAVE,
    ACTIONS.DISCARD,
    ACTIONS.VIEW,
    ACTIONS.EDIT,
    ACTIONS.PRINTOUT,
  ],

  columns: [
    col("name", {
      label: "Units of Measure"
    }),

    col("uom_category"),

    col("type", {
      label: "Type"
    })
  ],

  form: {
    header: {
      media: [],
      name: [],
      checkbox: []
    },

    sections: [
      {
        key: "general",
        label: "General Information",

        information: (values) => {
          const name =
            values.name || "Unit";
        
          const type =
            values.type;
        
          const ratio =
            values.factor || 1;
        
          const baseUnit =
            resolveBaseUom(
              values.uom_category
            );
        
          const baseName =
            baseUnit?.name || "unit";
        
          if (type === "base") {
            return `${name} will be used as the main unit for this category (1 ${name} = ${ratio} ${baseName})`;
          }
        
          if (type === "bigger") {
            return `1 ${name} contains ${ratio} ${baseName} (1 ${name} = ${ratio} ${baseName})`;
          }
        
          if (type === "smaller") {
            return `${ratio} ${name} makes 1 ${baseName} (${ratio} ${baseName} = 1 ${name})`;
          }
        
          return "";
        },

        columns: [
          [
            field("uom_name"),
            field("uom_category"),
            field("uom_type")
          ],

          [
            field("uom_factor"),
            field("uom_rounding"),
            field("active")
          ]
        ]
      }
    ]
  },

  search: false,
  filter: false,
  group_by: false,
  favorite: false,
};