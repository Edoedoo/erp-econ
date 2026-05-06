import { useLocation } from "react-router-dom"
import { DASHBOARD } from "../../config/Dashboard"
import { toView } from "../../core/router/routerSercive"
import { useAppNavigate } from "../../core/router/useAppNavigate"
import "./dashboard.css"

function Dashboard () {

  const { go } = useAppNavigate()
  const location = useLocation()
  const segments = location.pathname.split("/").filter(Boolean)
  const moduleKey = segments[0]

  const proses = 6

  const currentList = DASHBOARD.filter(
    item => item.module === moduleKey
  )

  const handleGoView = (card) => {
    go(toView(card.module, card.key))
  }

  const handleGoStatus = (card, status) => {
    go(
      toView(card.module, card.key, {
        group_by: status
      })
    )
  }

  const handleGoProcess = (card) => {
    go(
      toView(card.module, card.key, {
        group_by: "allProcess"
      })
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {currentList.map((card) => (
          <div key={card.key} className="dashboard-card">
            <h4 className="title-card" onClick={() => handleGoView(card)}>
              {card.name}
            </h4>
            <div className="main-card">
              <button className="btnToProcess" onClick={() => handleGoProcess(card)}>
                {proses} TO PROCESS
              </button>

              <div className="status">
                {card.statuses.map((status) => (
                  <h5 key={status} onClick={() => handleGoStatus(card, status)}>
                    {status}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard