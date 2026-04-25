
import { useNavigate } from "react-router-dom"
import { buildPath } from "./routerBuilder"

export const useAppNavigate = () => {
  const navigate = useNavigate()

  const go = (config, options = {}) => {
    const path = buildPath(config)
    navigate(path, options)
  }

  const push = go
  const replace = (config) => go(config, { replace: true })

  return { go, push, replace }
}