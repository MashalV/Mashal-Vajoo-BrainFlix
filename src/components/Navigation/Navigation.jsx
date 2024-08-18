import "./Navigation.scss";


function Navigation() {
  return (
    <>
      <section className="nav">
        <section className="nav__logo">
          <img
            src="/src/assets/images/logo/BrainFlix-logo.svg"
            alt="brain flix logo"
          />
        </section>
        <div className="nav__search">
          <img className="nav__search--img"
            src="/src/assets/images/icons/search.svg"
            alt="magnifying glass"
          />
          <input className= "nav__search--in" type="text" placeholder ="Search" /> 
              <img className="nav__search--avatar" src="/src/assets/images/Mohan-muruge.jpg" alt="mohan"/>
        </div>
        <article className="nav__button btn">
          <img className="btn__image" src="/src/assets/images/icons/upload.svg" alt="upload"></img>
          <div className="btn__text" > Upload </div>
        </article>
      </section>
    </>
  );
}

export default Navigation;
