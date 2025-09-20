function Notifications() {
      return (
        <>
          <div className="see-profile">
            <a className="see-profile__name" href="#">Ver perfil</a>
            <img src="/images/general/perfil-ode-img.png" alt="Perfil" className="see-profile__img" />
          </div>

          <div className="notifications">
            <h5>Notificações recentes</h5>
            <div className="notifications__container">

              <div className="notifications-today">
                <h6 className="notifications-today__day">Hoje</h6>
                <div className="notifications-today__container">
                  <p className="notifications-today__paragraph">
                    <a href="#" className="link-name">Junhan</a> solicitou uma troca.
                  </p>
                </div>
              </div>

              <div className="notifications-today">
                <h6 className="notifications-today__day">Últimos 30 dias</h6>
                <div className="notifications-today__container">
                  <p className="notifications-today__paragraph">
                    <a href="../pages/user-profile.html" className="link-name">Jungsu</a> avaliou uma troca.{" "}
                    <a href="#" className="click-here">Clique aqui.</a>
                  </p>
                </div>
              </div>

              <a href="#" className="notifications-all">Ver tudo</a>
            </div>
          </div>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("notifications-desktop"));
    root.render(<Notifications />);