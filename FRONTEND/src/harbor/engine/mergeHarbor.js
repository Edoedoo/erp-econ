import { harborRegistry } from "../registry/harborRegistry";
import { dbHarborRegistry } from "../registry/dbHarborRegistry";
import { schemaHarborRegistry } from "../registry/schemaHarborRegistry";

export const mergeHarbor = () => {
    const map = new Map()
        ;[...harborRegistry, ...dbHarborRegistry].forEach(item => {
            map.set(item.id, {
                ...schemaHarborRegistry,
                ...map.get(item.id),
                ...item

            })
        })
    return Array.from(map.values())
}