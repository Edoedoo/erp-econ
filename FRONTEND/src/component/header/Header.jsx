import { Link, useLocation } from "react-router-dom"
import { ICONS } from "../../config/iconConfig"
import { MENU_LIST } from "../../config/MENU_LIST"
import { MODULE_REGISTRY } from "../../config/MODULE_REGISTRY"

import { useState, useRef, useEffect } from "react"
import { useAppNavigate } from "../../core/router/useAppNavigate"

import "./header.css"

function Header() {
  const { go } = useAppNavigate()
  const location = useLocation()

  const [activeGroup, setActiveGroup] = useState(null)
  const dropdownRef = useRef(null)

  const segments = location.pathname.split("/").filter(Boolean)
  const [modulePath, viewPath] = segments

  // =========================
  // 🔹 UI MENU (ONLY UI)
  // =========================
  const currentMenu = MENU_LIST.find(
    item => item.path === modulePath
  )

  // =========================
  // 🔹 DOMAIN MODULE
  // =========================
  const currentModule = MODULE_REGISTRY[modulePath]
  const views = currentModule?.views || []

  // =========================
  // 🔹 GROUPING VIEWS
  // =========================
  const groupedViews = views.reduce((acc, view) => {
    const group = view.group || "Other"

    if (!acc[group]) acc[group] = []
    acc[group].push(view)

    return acc
  }, {})

  // =========================
  // 🔹 HANDLERS
  // =========================
  const toggleDropdown = (group) => {
    setActiveGroup(prev => (prev === group ? null : group))
  }

  const handleGoView = (view) => {
    const query = {}

    if (view.defaultGroup) query.group_by = view.defaultGroup
    if (view.defaultView) query.view_type = view.defaultView

    go({
      module: modulePath,
      view: view.path,
      query
    })

    setActiveGroup(null)
  }

  // =========================
  // 🔹 CLICK OUTSIDE
  // =========================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveGroup(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // =========================
  // 🔹 RENDER
  // =========================
  return (
    <>
      {/* MENU BUTTON */}
      {location.pathname !== "/" && (
        <Link to="/" className="menu-btn">
          <img src={ICONS.menu} alt="menu" />
        </Link>
      )}

      {/* MODULE HEADER */}
      {currentMenu && (
        <>
          {/* MODULE TITLE */}
          <h3 onClick={() => go({ module: modulePath })}>
            {currentMenu.name}
          </h3>

          {/* SUB NAV */}
          <div className="sub-nav" ref={dropdownRef}>
            {Object.entries(groupedViews).map(([groupName, groupViews]) => {
              const isOpen = activeGroup === groupName
              const isActive = groupViews.some(v => v.path === viewPath)

              return (
                <div key={groupName} className="sub-item">

                  {/* GROUP TITLE */}
                  <a
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown(groupName)
                    }}
                    className={`${isOpen ? "open" : ""} ${isActive ? "active" : ""}`}
                  >
                    {groupName}
                  </a>

                  {/* DROPDOWN */}
                  {isOpen && (
                    <div
                      className="dropdown"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {groupViews.map(view => {
                        const isActiveView = view.path === viewPath

                        return (
                          <div
                            key={view.key}
                            className={`dropdown-item ${isActiveView ? "active" : ""}`}
                            onClick={() => handleGoView(view)}
                          >
                            <a>{view.name}</a>
                          </div>
                        )
                      })}
                    </div>
                  )}

                </div>
              )
            })}
          </div>
        </>
      )}

      {/* RIGHT SIDE */}
      <div className="header-right">
        <Link to="/notificationChat" className="header-icon">
          <img src={ICONS.chat} alt="chat" />
        </Link>

        <Link to="/userProfile" className="header-icon">
          <img src={ICONS.profile} alt="profile" />
        </Link>

        <span>administrator</span>
      </div>
    </>
  )
}

export default Header