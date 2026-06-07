import { useEffect, useState } from "react"
import RootLayout from "./RootLayout/RootLayout"
import NotFound from "./ErrorSystem/404page.jsx/404page"

import { initHarbor } from "../harbor/init"

function App() {
  const [, setRender] = useState(0)

  useEffect(() => {
    return initHarbor().subscribe(() => {
      setRender(prev => prev + 1)
    })
  }, [])

  const harbor = initHarbor().getState()

  if (!harbor.activeModule) {
    console.warn("module path no registry")
    return (
      <NotFound
        error="404"
        code="Not Found"
        message="Maaf, halaman yang Anda cari mungkin sudah dihapus, diubah namanya, atau tidak tersedia untuk sementara"
      />
    )
  }

  if (harbor.activeModule.payload === null) {
    console.warn("payload undefined, null or crash")
    return <NotFound
      error="204"
      code="No Content"
      message="Data tidak ditemukan"
    />
  }


  return (
    <RootLayout
      module={harbor.activeModule}
    />
  )

}

export default App