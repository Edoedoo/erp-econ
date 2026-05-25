import { mergeAppGrid } from "./mergeAppGrid"

export const engineWorkspace = () => {
    const merge = mergeAppGrid()
    merge.map(item => {
        return {
            ...item,
        }
    })
    return merge
}