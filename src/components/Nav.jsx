import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="w-100 d-flex p-3 justify-content-between align-items-center container-fluid">
      <div id="logo-ul" className="d-flex w-50 align-items-center">
        <Link to="/" className="logo">
          <img
            src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e"
            alt=""
          />
        </Link>
        <ul id="firstNav" className="d-flex gap-4 align-items-center">
          <li>
            <Link to="/about">Модельный ряд</Link>
          </li>
          <li>
            <a href="#">Собери свой микроскоп</a>
          </li>
          <li>
            <a href="#">Дилеры</a>
          </li>
        </ul>
      </div>
      <ul id="secondNav" className="d-flex gap-4">
        <li>
          <a href="#">Проверить по серийному номеру</a>
        </li>
        <li>
          <Link to="/info">О компании</Link>
        </li>
        <li>
          <a href="#">Обратная связь</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
