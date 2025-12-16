import './Header.css';

const Header = () => {
  return (
    <header>
        <div className="logo">
          <h1>Каверина_Кунафина</h1>
          <p className="subtitle">Практика GIT</p>
        </div>
        
        <nav className="navigation">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#about" className="nav_link">Обо мне</a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">Портфолио</a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">Контакты</a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="nav_link">Блог</a>
            </li>
          </ul>
        </nav>
        
    </header>
  );
};

export default Header;