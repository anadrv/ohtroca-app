function Menu() {
  return (
    <nav>
      <div className="menu-container">
        <a href="home.html"><img src="/images/icons/home-icon.png" alt="Home" /></a>
        <a href="search.html"><img src="/images/icons/search-icon.png" alt="Buscar" /></a>
        <a href="notifications.html"><img src="/images/icons/notification-icon.png" alt="Notificações" /></a>
        <a href="profile.html"><img src="/images/icons/profile-icon.png" alt="Perfil" /></a>
      </div>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("menu")).render(<Menu />);