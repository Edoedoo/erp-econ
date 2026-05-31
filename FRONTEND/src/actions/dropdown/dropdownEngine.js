export const handleShowDropdown = (key, setShowDropdown) => {
    setShowDropdown(prev =>
        prev === key ? null : key
    )
}

export const handleCloseDropdownOutside = (e, wrapperRef, setShowDropdown) => {

    if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
    ) {
        setShowDropdown(null)
    }
}


