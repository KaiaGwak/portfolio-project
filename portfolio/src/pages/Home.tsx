import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: { ja: 'プロジェクト1', en: 'Project 1' },
      category: { ja: 'ウェブ開発', en: 'Web Development' },
      description: {
        ja: '詳細な説明文がここに入ります。',
        en: 'Detailed description goes here.'
      },
      image: '/images/project1.jpg'
    }
    // 더 많은 프로젝트를 추가할 수 있습니다
  ];

  return (
    <main>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title" data-lang="projects-title">プロジェクト</h2>
          <div className="filter-buttons">
            <button className="filter-btn active" data-category="all">すべて</button>
            <button className="filter-btn" data-category="web">ウェブ開発</button>
            <button className="filter-btn" data-category="app">アプリ開発</button>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
