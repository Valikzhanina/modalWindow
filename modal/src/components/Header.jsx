import React from 'react';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <div>
      <haeder className="header">
        <div className="header-info">
          <p className="header-phone">
            044 599-1988
            <span className="header-info-colored"> МЫ РАБОТАЕМ</span> c 10:00 до
            22:00
          </p>
          <ul className="header-icon-list">
            <li className="header-icon">
              <a href="#">
                <img
                  className="facebook"
                  src="data:image/png;base64,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"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="header-icon">
              <a href="">
                <img
                  className="telega"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxhscEGhYyaLPDZS9h1rxZZ_M_35A730z2g&usqp=CAU"
                  alt="telega"
                />
              </a>
            </li>
            <li className="header-icon">
              <a href="#">
                <img
                  className="insta"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png"
                ></img>
              </a>
            </li>
            <li className="header-icon">
              <a href="">
                <img
                  className="order"
                  src="data:image/png;base64,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"
                  alt="order"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="logo-and-menu">
          <img
            className="header-logo"
            alt="logo"
            src="https://lh3.googleusercontent.com/proxy/gpy3S79zC6JNx3Rx50LOZr45NpU-Xrs_OrRlpX--oMVXQ6QYgBdhKzluImVosVv6sktS46LBIh6Lev5avV1DU_z2o-ZbnMMpBuKavhjkhfzzpIhPj9ZKMByUL0J9e5BSyU8zz-5NtkXQ8b3yguYrfGuY8SezPbHBgHixNt3AO3ZE8dQZiQ"
          />
          <div className="sushi-menu">
            <ul className="menu-list">
              <li className="menu">Суши</li>
              <li className="menu">Ролы</li>
              <li className="menu">Салаты и Супы</li>
              <li className="menu">Сашими</li>
              <li className="menu">Наборы</li>
              <li className="menu">Напитки</li>
              <li className="menu">Доставка</li>
            </ul>
          </div>
        </div>
      </haeder>
    </div>
  );
};
export default Header;
