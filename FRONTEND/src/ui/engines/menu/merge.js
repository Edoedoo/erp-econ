
export const mergeUiMenu = (source = {}) => {

  const {
    default: defaultSource = {},
    database = [],
  } = source

  return [
    defaultSource,
    ...database,
  ]
}