import Logo from "../assets/logo.png";

export const Menu = () => {
  return (
    <div className="header">
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>

      <div className="header-menu">
        <ul>
          <li>
            <a href="#" className="active">
              Movies
            </a>
          </li>
          <li>
            <a href="#">Tv Show</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
