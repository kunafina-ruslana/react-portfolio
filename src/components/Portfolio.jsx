import React from 'react';
import './Portfolio.css';

function Portfolio () {
  const projects = [
    {
      id: 1,
      title: "Магазин очков",
      description: "Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью",
      technologies: ["React", "Node.js", "PHP", "SQL"],
      status: "В разработке",
      link: "#"
    },
    {
      id: 2,
      title: "Приложение для задач",
      description: "Интерактивный список задач ",
      technologies: ["HTML/CSS", "Node.js", "SQLite"],
      status: "Завершен",
      link: "#"
    },
    {
      id: 3,
      title: "Онлайн платформа для постов",
      description: "Платформа для обмена фотографиями с системой лайков и комментариев",
      technologies: ["HTML/CSS", "Node.js", "SQLite"],
      status: "Завершен",
      link: "#"
    },
    {
      id: 4,
      title: "Система управления контентом",
      description: "CMS для блогов с редактором",
      technologies: ["React", "Node.js", "PHP", "SQL"],
      status: "Планируется",
      link: "#"
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="portfolio_title">Мои проекты</h2>
        <p className="portfolio_subtitle">Последние работы</p>
        
        <div className="projects_grid">
          {projects.map(project => (
            <div 
              className={`project_card ${project.status.toLowerCase()}`} key={project.id}>
              <div className="project_header">
                <h3 className="project_title">{project.title}</h3>
                <span className={`project_status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project_description">{project.description}</p>
              
              <div className="project_technologies">
                {project.technologies.map((tech, index) => (
                  <span className="technology_tag" key={index}>{tech}</span>
                ))}
              </div>
              
              <div className="project_footer">
                <a href={project.link} className="project_link">Подробнее →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;