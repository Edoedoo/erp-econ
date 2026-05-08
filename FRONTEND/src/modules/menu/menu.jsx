import './menu.css';
import { MENU_LIST } from "../../config/MENU_LIST";
import { useAppNavigate } from '../../core/router/useAppNavigate';
import { toModule } from '../../core/router/routerSercive';

function Menu() {

  const user = {
    permissions: [
      "setting",
      "configuration",
      "inventory",
      "purchase",
      "accounting",
      "pos",
      "sales",
      "dashboard",
      "employees",
      "crm",
      "members",
      "expenses"
    ]
  };

  const { go } = useAppNavigate();

  const filteredMenu = MENU_LIST
    .filter(item =>
      user.permissions.includes(item.key) &&
      item.path
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="main-menu">
      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div
            key={item.key}
            className="menu-card"
            onClick={() => go(toModule(item.key))}
          >
            <img src={item.icon} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;