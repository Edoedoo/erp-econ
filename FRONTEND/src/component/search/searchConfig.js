
const getMonthOptions = () => [
    { value: "1", label: "Jan" },
    { value: "2", label: "Feb" },
    { value: "3", label: "Mar" },
    { value: "4", label: "Apr" },
    { value: "5", label: "May" },
    { value: "6", label: "Jun" },
    { value: "7", label: "Jul" },
    { value: "8", label: "Aug" },
    { value: "9", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" }
  ]
  
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear()
  
    return Array.from({ length: 4 }, (_, i) => {
      const year = currentYear - i
      return { value: String(year), label: String(year) }
    })
  }
  
  export const SEARCH_CONFIG = {
    filter: [
      {
        key: "month",
        label: "month",
        type: "select",
        options: getMonthOptions()
      },
      {
        key: "year",
        label: "year",
        type: "select",
        options: getYearOptions()
      }
    ],
  
    groupBy: {
      type: "dynamic"
    },
  
    favorite: {
      type: "dynamic"
    }
  }