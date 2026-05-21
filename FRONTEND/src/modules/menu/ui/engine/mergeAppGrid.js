import { menus } from "../registry/appGridDefault";
import { menusDb } from "../registry/appGridDatabase";
import { menusSchema } from "../registry/appGridSchema";


export const mergeAppGrid = () => {
    const map = new Map()

        ;[...menus, ...menusDb].forEach(item => {
            map.set(item.key, {

                ...menusSchema,
                ...map.get(item.key),
                ...item,

                dropdown: {
                    ...menusSchema.dropdown,
                    ...map.get(item.key)?.dropdown,
                    ...item.dropdown
                }

            })
        })
    console.log(Array.from(map.values()))
    return Array.from(map.values())
}