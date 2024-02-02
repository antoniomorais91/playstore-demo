export default function Navbar() {
  const items = ["Início", "Novidades", "Ofertas", "Sobre", "Newsletter"];
  return (
    <nav className="navbar">
      <ul>
        {items.map((item) => (
          <li>
            <button>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
