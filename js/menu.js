function Menu() {
  return (
    <nav className="nav-mobile">
      <div className="menu-container">
        <a href="./main-page.html"><img src="/images/icons/home-icon.png" alt="Home" /></a>
        <a href="./main-page.html"><img src="/images/icons/search-icon.png" alt="Buscar" /></a>
        <a href="./notifications.html"><img src="/images/icons/notification-icon.png" alt="Notificações" /></a>
        <a href="./main-profile.html"><img src="/images/icons/icon-menu-ab.png" alt="Perfil" /></a>
      </div>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("menu")).render(<Menu />);