function MenuDesktop() {
    return (
         <main className="nav">
      <div className="app-name">
        <img src="/images/icons/app-desktop-icon.png" alt="" />
        <h1>OhTroca</h1>
      </div>
      <div className="menu-container-desktop">
        <h2 className="menu-container__name">Menu</h2>

        <a href="./main-page.html"
          >Home<span><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./main-page.html"
          >Buscar item<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href=""
          >Adicionar item<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href=""
          >Trocas em andamento<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href=""
          >Histórico de trocas<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./edit-profile.html"
          >Editar perfil<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./settings.html"
          >Configurações<span
            ><img src="/images/icons/arrow-right.png" alt="" /></span></a>

        <a href="index.html"
          >Log out<span><img src="/images/icons/arrow-right.png" alt="" /></span></a>
      </div>
    </main>
    );
}

ReactDOM.createRoot(document.getElementById("menu-desktop")).render(<MenuDesktop />);


function Menu() {
  return (
    <nav>
      <div className="menu-container">
        <a href="./main-page.html"><img src="/images/icons/home-icon.png" alt="Home" /></a>
        <a href="./items-page.html"><img src="/images/icons/search-icon.png" alt="Buscar" /></a>
        <a href="./notifications.html"><img src="/images/icons/notification-icon.png" alt="Notificações" /></a>
        <a href="./user-profile.html"><img src="/images/icons/profile-icon.png" alt="Perfil" /></a>
      </div>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("menu")).render(<Menu />);