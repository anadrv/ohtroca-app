function Header() {
  const title = document.title; 

  return (
    <header className="header">
      <div className="header__content">
        <button className="header__btn">
          <img src="/images/icons/arrow-left.png" alt="Voltar" />
        </button>
        <h1 className="header__title">{title}</h1>
        <a href="#">
            <img
              src="/images/general/perfil-ode-img.png"
              alt="Perfil"
              className="header__profile"
            />
        </a>
      </div>
    </header>
  );
}

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(<Header />);
