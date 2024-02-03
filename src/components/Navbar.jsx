import {navOptions} from './../utils/utils'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {navOptions.map((item) => (
          <li key={item.id}>
            <button>{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
