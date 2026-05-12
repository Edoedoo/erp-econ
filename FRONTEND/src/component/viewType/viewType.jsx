import React, { useState, useMemo } from "react"
import { useOutletContext } from "react-router-dom"

import EmptyState from "../emptyState/emptyState"
import { useAppNavigate } from "../../core/router/useAppNavigate"
import { toAction } from "../../core/router/routerSercive"

import btnFilter from "../../Assets/SVG/btnFilter.svg"

import "./viewType.css"

export const renderCell = (column, row) => {
  if (!column) return null

  if (column.render) {
    return column.render(row)
  }

  return row?.[column.key]
}

export function ListView({ data = [], columns = [] }) {
  const layoutContext = useOutletContext()
  const { go } = useAppNavigate()
  const route = layoutContext?.route
  const selectedIds =
    layoutContext?.selectedIds || []
  const setselectedIds =
    layoutContext?.setselectedIds
  const setViewRows =
  layoutContext?.setViewRows
  const setCurrentIndex =
    layoutContext?.setCurrentIndex

  
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  })
  
  const sortedData = useMemo(() => {

    const result = [...data]

    if (!sortConfig.key) {
      return result
    }

    result.sort((a, b) => {

      const aValue =
        a?.[sortConfig.key] ?? ""

      const bValue =
        b?.[sortConfig.key] ?? ""

      if (
        typeof aValue === "number" &&
        typeof bValue === "number"
      ) {

        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue
      }

      const aText =
        String(aValue).toLowerCase()

      const bText =
        String(bValue).toLowerCase()

      return sortConfig.direction === "asc"
        ? aText.localeCompare(bText)
        : bText.localeCompare(aText)
    })

    return result

  }, [data, sortConfig])

  const handleSort = (columnKey) => {

    setSortConfig((prev) => {

      if (
        prev.key === columnKey &&
        prev.direction === "asc"
      ) {

        return {
          key: columnKey,
          direction: "desc"
        }
      }

      return {
        key: columnKey,
        direction: "asc"
      }
    })
  }

  const handleRowClick = (row) => {

    setViewRows(sortedData)
  
    const index =
      sortedData.findIndex(
        item => item.id === row.id
      )
  
    setCurrentIndex(index)

    sessionStorage.setItem(
      "econix_view_rows",
      JSON.stringify(sortedData)
    )
    
    sessionStorage.setItem(
      "econix_current_index",
      String(index)
    )
  
    go(
      toAction(
        route.module,
        route.view,
        "view",
        row.id
      )
    )
  }

  const handleCheckboxChange = (e, row) => {
    e.stopPropagation()

    setselectedIds((prev) => {

      const exists = prev.includes(row.id)

      let updated = []

      if (exists) {
        updated = prev.filter((id) => id !== row.id)
      } else {
        updated = [...prev, row.id]
      }

      setselectedIds(updated)
      return updated
    })
  }
  
  const handleSelectAll = (e) => {
    e.stopPropagation()

    let updated = []

    if (e.target.checked) {
      updated = sortedData.map((row) => row.id)
    }

    setselectedIds(updated)
  }

  if (!columns.length || !data.length) {
    return (
      <div>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="table">

      <div
        className="table-row table-header"
        style={{
          gridTemplateColumns: `40px repeat(${columns.length}, 1fr)`
        }}
      >

        <div>
          <input
            type="checkbox"
            checked={
              sortedData.length > 0 &&
              selectedIds.length === sortedData.length
            }
            onClick={(e) => e.stopPropagation()}
            onChange={handleSelectAll}
          />
        </div>

        {columns.map((column) => (
          <div
            key={column.key}
            className="table-sort-header"
            onClick={() => handleSort(column.key)}
          >
            {column.label}

            {sortConfig.key === column.key ? (
              sortConfig.direction === "asc" ? (
                <> (a-z)</>
              ) : (
                <> (z-a)</>
              )
            ) : (
              <img
                src={btnFilter}
                alt=""
                style={{ display: "flex", width: "14px" }}
              />
            )}
          </div>

        ))}
      </div>

      {sortedData.map((row, index) => {

        const isSelected =
          selectedIds.includes(row.id)

        return (
          <div
            className={`table-row ${
              isSelected
                ? "active-row"
                : ""
            }`}
            key={index}
            style={{
              gridTemplateColumns: `40px repeat(${columns.length}, 1fr)`
            }}
            onClick={() => handleRowClick(row, index)}
          >

            <div onClick={(e) => e.stopPropagation()} style={{cursor: "default"}}>
              <input type="checkbox"
                onClick={(e) => e.stopPropagation()}
                checked={isSelected}
                onChange={(e) => handleCheckboxChange(e, row)}
                style={{cursor: "pointer"}}
              />
            </div>

            {columns.map((column) => (
              <div key={column.key}>
                {renderCell(column, row)}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export function KanbanView({ data = [], columns = [] }) {
  const layoutContext = useOutletContext()
  const { go } = useAppNavigate()

  const route = layoutContext?.route

  const handleCardClick = (row) => {
    go(
      toAction(
        route.module,
        route.view,
        "view",
        row.id
      )
    )
  }

  if (!columns.length || !data.length) {
    return (
      <div>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="kanban">
      {data.map((row, index) => (
        <div
          className="kanban-card"
          key={index}
          onClick={() => handleCardClick(row)}
        >
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
  )
}

export const VIEW_TYPE = {
  list: ListView,
  kanban: KanbanView
}