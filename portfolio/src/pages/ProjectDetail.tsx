interface Project {
  id: number;
  title: {
    ja: string;
    en: string;
  };
  category: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  image: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

const ProjectDetail = () => {
  // 실제로는 ID를 URL에서 가져와서 해당 프로젝트를 찾아야 합니다
  const project: Project = {
    id: 1,
    title: { ja: 'プロジェクト1', en: 'Project 1' },
    category: { ja: 'ウェブ開発', en: 'Web Development' },
    description: {
      ja: '詳細な説明文がここに入ります。',
      en: 'Detailed description goes here.'
    },
    image: '/images/project1.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com'
  };

  return (
    <main className="project-detail">
      <div className="container">
        <div className="breadcrumb">
          <a href="/">ホーム</a>
          <span className="separator">/</span>
          <span>プロジェクト詳細</span>
        </div>

        <article className="project-content">
          <header className="project-header">
            <h1 className="project-title">{project.title.ja}</h1>
            <p className="project-category">{project.category.ja}</p>
          </header>

          <div className="project-gallery">
            <img className="project-main-image" src={project.image} alt={project.title.ja} />
          </div>

          <div className="project-info">
            <section className="info-section">
              <h2>概要</h2>
              <p>{project.description.ja}</p>
            </section>

            <section className="info-section">
              <h2>使用技術</h2>
              <ul className="tech-list">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>

            <div className="project-links">
              {project.github && (
                <a href={project.github} className="button" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="button" target="_blank" rel="noopener noreferrer">
                  デモを見る
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetail;
