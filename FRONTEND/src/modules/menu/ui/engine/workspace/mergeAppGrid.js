import { appGridDefault } from "../../registry/appGridDefault";
import { appGridDatabase } from "../../registry/appGridDatabase";                   //next ambil dari cache backend
import { appGridSchema } from "../../registry/appGridSchema";

export const mergeAppGrid = () => {
    const map = new Map()
        ;[...appGridDefault, ...appGridDatabase].forEach(item => {
            map.set(item.key, {

                ...appGridSchema,
                ...map.get(item.key),
                ...item,

                dropdown: {
                    ...appGridSchema.dropdown,
                    ...map.get(item.key)?.dropdown,
                    ...item.dropdown
                }

            })
        })
    return Array.from(map.values())

}