import { useState, useEffect } from "react"

import RootLayout from "./RootLayout/RootLayout"
import Loading from "../component/loading/loading"

import {initMenu} from "../ui/init/menu/initMenu"


function App() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const bootstrap = async () => {
            const result =
              await initMenu()
              setReady(true)
        
            console.log(result)
          }
        
          bootstrap()
    }, [])

    if (!ready) {
        return <Loading />
    }

    return <RootLayout />
}

  export default App