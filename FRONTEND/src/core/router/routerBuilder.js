
export const buildPath = ({
  module,
  view,
  action,
  id,
  query = {}
}) => {
  if (!module) return "/"

  let path = `/${module}`

  if (view) path += `/${view}`
  if (action) path += `/${action}`
  if (id) path += `/${id}`

  const params = new URLSearchParams(query).toString()

  return params ? `${path}?${params}` : path
}