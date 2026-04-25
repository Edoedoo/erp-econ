// =====================================================
// 🔹 VIEW TYPE ENGINE (LIST + KANBAN)
// =====================================================

import React from "react"
import EmptyState from "../emptyState/emptyState"
import "./viewType.css"
// =====================================================
// 🔹 HELPER
// =====================================================

export const renderCell = (column, row) => {
  if (!column) return null

  if (column.render) {
    return column.render(row)
  }

  return row?.[column.key]
}

// =====================================================
// 🔹 LIST VIEW
// =====================================================

export function ListView({ data = [], columns = [] }) {
  if (!columns.length) {
    return <div><EmptyState /></div>
  }

  return (
    <div className="table">

      {/* Header */}
      <div
        className="table-row table-header"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map((column) => (
          <div key={column.key} >
            {column.label}
          </div>
        ))}
      </div>

      {/* Body */}
      {data.length === 0 ? (
        <div className="table-row">
          <div><EmptyState /></div>
        </div>
      ) : (
        data.map((row, index) => (
          <div
            className="table-row"
            key={index}
            style={{
              gridTemplateColumns: `repeat(${columns.length}, 1fr)`
            }}
          >
            {columns.map((column) => (
              <div key={column.key}  >
                {renderCell(column, row)}
              </div>
            ))}
          </div>
        ))
      )}

    </div>
  )
}

// =====================================================
// 🔹 KANBAN VIEW
// =====================================================

export function KanbanView({ data = [], columns = [] }) {
  return (
    <>
      {data.length === 0 ? (
        <div><EmptyState /></div>
      ) : (
        <div className="kanban">
          {data.map((row, index) => (
            <div className="kanban-card" key={index}>

              {/* title ambil kolom pertama */}
              <div className="kanban-title">
                {renderCell(columns[0], row)}
              </div>

              <div className="kanban-body">
                {columns.slice(1).map((column) => (
                  <div key={column.key}>
                    {column.label}: {renderCell(column, row)}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}
    </>
  )
}

// =====================================================
// 🔹 VIEW REGISTRY
// =====================================================

export const VIEW_TYPE = {
  list: ListView,
  kanban: KanbanView
}