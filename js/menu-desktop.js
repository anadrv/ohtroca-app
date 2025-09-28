function MenuDesktop() {
    return (
         <main className="nav">
      <div className="app-name">
        <img src="../images/icons/app-desktop-icon.png" alt="" />
        <h1>OhTroca</h1>
      </div>
      <div className="menu-container-desktop">
        <h2 className="menu-container__name">Menu</h2>

        <a href="./main-page.html"
          >Home<span><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./main-page.html"
          >Buscar item<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./add-item.html"
          >Adicionar item<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href=""
          >Trocas em andamento<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href=""
          >Histórico de trocas<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./edit-profile.html"
          >Editar perfil<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href="./settings.html"
          >Configurações<span
            ><img src="../images/icons/arrow-right.png" alt="" /></span></a>

        <a href="index.html"
          >Log out<span><img src="../images/icons/arrow-right.png" alt="" /></span></a>
      </div>
    </main>
    );
}

ReactDOM.createRoot(document.getElementById("menu-desktop")).render(<MenuDesktop />);

