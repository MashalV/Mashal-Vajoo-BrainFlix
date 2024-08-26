import "./Navigation.scss";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <>
      <section className="nav">
        <section className="nav__logo">
          <Link to="/">
            <img
              src="/src/assets/images/logo/BrainFlix-logo.svg"
              alt="brain flix logo"
            />
          </Link>
        </section>
        <div className="nav__search">
          <img className="nav__search--img"
            src="/src/assets/images/icons/search.svg"
            alt="magnifying glass"
          />
          <input className= "nav__search--in" type="text" placeholder ="Search" /> 
              <img className="nav__search--avatar" src="/src/assets/images/Mohan-muruge.jpg" alt="mohan"/>
        </div>
          <Link to="/VideoUpload">
              <article className="nav__button btn">
                <img className="btn__image" src="/src/assets/images/icons/upload.svg" alt="upload"></img>
                <div className="btn__text" > UPLOAD </div>
              </article>
          </Link>
      </section>
    </>
  );
}

export default Navigation;
