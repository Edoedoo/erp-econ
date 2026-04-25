import { Link, useLocation, useSearchParams } from "react-router-dom"
import { ICONS } from "../../config/iconConfig"
import { MENU_LIST } from "../../config/menuConfig"
import { useState, useRef, useEffect } from "react"

import { toView, toModule } from "../../core/router/routerSercive"
import { useAppNavigate } from "../../core/router/useAppNavigate"

import "./header.css"

function Header () {

  const { go } = useAppNavigate()
  const location = useLocation()

  const [activeGroup, setActiveGroup] = useState(null)
  const dropdownRef = useRef(null)

  const segments = location.pathname.split("/").filter(Boolean)
  const [modulePath, viewPath] = segments

  const currentMenu = MENU_LIST.find(item =>
    item.module?.path === modulePath
  )

  const views = currentMenu?.module?.views || []

  const groupedViews = views.reduce((acc, view) => {
    if (!acc[view.group]) acc[view.group] = []
    acc[view.group].push(view)
    return acc
  }, {})

  const toggleDropdown = (group) => {
    setActiveGroup(prev => (prev === group ? null : group))
  }

  const handleGoView = (viewKey, queryGroup, queryView) => {
    if (!currentMenu) return
  
    const query = {}
  
    if (queryGroup) query.group_by = queryGroup
    if (queryView) query.view_type = queryView
  
    go(toView(currentMenu.key, viewKey, query))
  
    setActiveGroup(null)
  }

  useEffect(() => {
    if (!views.length) return
    if(activeGroup === null) return

    const activeView = views.find(v => v.path === viewPath)
    if (activeView) {
      setActiveGroup(activeView.group)
    }
  }, [location.pathname])

  // 🔥 klik luar close
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
          {/* 🔥 pakai toModule */}
          <h3
            onClick={() => go(toModule(currentMenu.key))}
          >
            {currentMenu.name}
          </h3>

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
                            onClick={() => handleGoView(view.key, view.defaultGroup, view.defaultView)}
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