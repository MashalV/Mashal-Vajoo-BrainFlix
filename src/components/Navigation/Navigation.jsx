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
          <img
            src="/src/assets/images/icons/search.svg"
            alt="magnifying glass"
          />
          <input type="text" placeholder ="Search" /> 
        </div>
        <article className="nav__button">
          <img src="/src/assets/images/icons/upload.svg" alt="upload"></img>
          Upload
        </article>
      </section>
    </>
  );
}

export default Navigation;
