import { useLocation } from "react-router-dom"

function BodyContent () {
    const location = useLocation()
    const segments = location.pathname.split("/").filter(Boolean)

    return (
        <div>
            <h1>ini halaman konten {segments}</h1>
            <button onClick={() => console.log(segments)}>tes halaman</button>
        </div>
    )
}

export default BodyContent