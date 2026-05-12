import { useState, useEffect, useRef } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { SEARCH_CONFIG } from "./searchConfig"

import btnSearch from "../../Assets/SVG/btnSearch.svg"
import btnFilter from "../../Assets/SVG/btnFilter.svg"
import btnGroupBy from "../../Assets/SVG/btnGroupBy.svg"
import btnFavorite from "../../Assets/SVG/btnFavorite.svg"
import btnMarkSearch from "../../Assets/SVG/btnCloseMarkSearch.svg"

import "./search.css"
import { MODULE_REGISTRY } from "../../config/builder/MODULE_REGISTRY"

function Search({ groupByOptions = [], favoriteOptions = [] }) {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams()
  const wrapperRef = useRef(null)

  const [openDropdown, setOpenDropdown] = useState(null)


  const getFilters = () => {
    const filters = []
  
    for (let [paramKey, paramValue] of searchParams.entries()) {
      if (paramKey.startsWith("filter_")) {
        const key = paramKey.replace("filter_", "")
        const config = SEARCH_CONFIG.filter.find(f => f.key === key)
  
        if (!config) continue
        const option = config.options.find(opt => opt.value === paramValue)
  
        filters.push({
          key,
          value: paramValue,
          label: option?.label || paramValue 
        })
      }
    }
    
    return filters
  }
  
  const filters = getFilters()
  const keyword = searchParams.get("search") || ""
  const groupBy = searchParams.get("group_by")
  const favorite = searchParams.get("favorite")

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const updateParams = (callback) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev)
      callback(params)
      return params
    })
  }

  const handleSearchChange = (e) => {
    const value = e.target.value

    updateParams(params => {
      if (value) params.set("search", value)
      else params.delete("search")
    })
  }

  const handleFilterChange = (key, option) => {
    updateParams(params => {
      params.set(`filter_${key}`, option.value)
    })
  }

  const handleGroupBy = (item) => {
    updateParams(params => {
      params.set("group_by", item.value)
    })
  }

  const handleFavorite = (item) => {
    updateParams(params => {
      params.set("favorite", item.value)
    })
  }

  const removeFilter = (key) => {
    updateParams(params => {
      params.delete(`filter_${key}`)
    })
  }

  const removeGroupBy = () => {
    updateParams(params => {
      params.delete("group_by")
    })
  }

  const removeFavorite = () => {
    updateParams(params => {
      params.delete("favorite")
    })
  }


  const segments = location.pathname.split("/").filter(Boolean);
  const [modulePath, viewPath] = segments;
  const currentModule = MODULE_REGISTRY[modulePath];

  const currentView = currentModule?.views?.find(
    (v) => v.path === viewPath
  );


  return (
    <div className="body-search" ref={wrapperRef}>
      {currentView.search === true && (
      <div className="search">

        <div className="search-tags">

          {filters.map(f => (
            <span key={f.key} className="markSearch">
              <img src={btnFilter} alt="" className="markSearch1"/>
              <span>{f.label}</span>
              <img
                src={btnMarkSearch}
                onClick={() => removeFilter(f.key)}
                alt=""
              />
            </span>
            
          ))}

          {groupBy && (
            <span className="markSearch">
              <img src={btnGroupBy} alt="" className="markSearch1"/>
              <span>{groupBy}</span>
              <img
                src={btnMarkSearch}
                onClick={removeGroupBy}
                alt=""
              />
            </span>
          )}

          {favorite && (
            <span className="markSearch">
              <img src={btnFavorite} alt="" className="markSearch1"/>
              <span>{favorite}</span>
              <img
                src={btnMarkSearch}
                onClick={removeFavorite}
                alt=""
              />
            </span>
          )}

        </div>
          <input
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={handleSearchChange}
            />

          <button className="btn-icon">
            <img src={btnSearch} alt="search" />
          </button>
      </div>
          )}

      <div className="action-search">
        <div className="btn-action-search">

          <div className="dropdown-wrapper">
            {currentView.filter === true && (
              <button
                className={openDropdown === "filter" ? "active" : ""}
                onClick={() => setOpenDropdown(openDropdown === "filter" ? null : "filter") }>
                <img src={btnFilter} alt="" /> Filter
              </button>
            )}

            {openDropdown === "filter" && (
              <div className="dropdown-search">
                {SEARCH_CONFIG.filter.map(filter => (
                  <div key={filter.key} className="dropdown-group">
                    <div className="dropdown-title">
                      {filter.label || filter.key}
                    </div>

                    {filter.options.map(opt => (
                      <div
                        key={opt.value}
                        className="dropdown-item"
                        onClick={() => handleFilterChange(filter.key, opt)}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            {currentView.group_by === true && (
              <button
                className={openDropdown === "group" ? "active" : ""}
                onClick={() =>
                  setOpenDropdown(openDropdown === "group" ? null : "group")
                }
              >
                <img src={btnGroupBy} alt="" />
                Group By
              </button>              
            )}

            {openDropdown === "group" && (
              <div className="dropdown-search">
                {groupByOptions.map(item => (
                  <div
                    key={item.key}
                    className="dropdown-item"
                    onClick={() => handleGroupBy(item)}
                  >
                    {item.label || item.key}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            {currentView.favorite === true && (
              <button
                className={openDropdown === "favorite" ? "active" : ""}
                onClick={() =>
                  setOpenDropdown(openDropdown === "favorite" ? null : "favorite")
                }
              >
                <img src={btnFavorite} alt="" />
                Favorite
              </button>
            )}

            {openDropdown === "favorite" && (
              <div className="dropdown-search">
                {favoriteOptions.map(item => (
                  <div
                    key={item.key}
                    className="dropdown-item"
                    onClick={() => handleFavorite(item)}
                  >
                    {item.label || item.key}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search