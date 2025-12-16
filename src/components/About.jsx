import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about">
        <h2 className="section_title">Инфомайшен</h2>
          <div className="about_text">
            <h3>Привет!</h3>
            <p className="intro">
              Frontend разработчики с 3+ годами опыта, специализирующиеся на создании современных, отзывчивых веб-приложений с использованием React и современных технологий.</p>
            
            <div className="about_details">
              <div className="detail_item">
                <span className="detail_label">Местоположение:</span>
                <span className="detail_value">Оренбург, Россия</span>
              </div>
              <div className="detail_item">
                <span className="detail_label">Образование:</span>
                <span className="detail_value">ГАПОУ ОКЭИ</span>
              </div>
              <div className="detail_item">
                <span className="detail_label">Опыт:</span>
                <span className="detail_value">3+ года</span>
              </div>
              <div className="detail_item">
                <span className="detail_label">Специализация:</span>
                <span className="detail_value">React, JavaScript, UI/UX</span>
              </div>
            </div>
            
            <div className={`additional_info ${showMore ? 'show' : ''}`}>
              <p>Бла-Бла-Бла</p>
              <p>Бла-Бла-Бла</p>
              <p>Бла-Бла-Бла</p>
              <p>Бла-Бла-Бла</p>
              <div className="skills">
                <h4>Технологии, которые мы используем:</h4>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>C#</li>
                  <li>PHP</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            
            <button 
              className={`toggle_button ${showMore ? 'active' : ''}`}
              onClick={toggleShowMore}>
              {showMore ? 'Скрыть подробности' : 'Узнать больше'}
              <span className="button_icon">{showMore ? '↑' : '↓'}</span>
            </button>
          </div>
    </section>
  );
};

export default About;