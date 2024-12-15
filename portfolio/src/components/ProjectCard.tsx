interface ProjectCardProps {
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
}

const ProjectCard = ({ id, title, category, description, image }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title.ja} />
      </div>
      <div className="project-content">
        <h3>{title.ja}</h3>
        <span className="project-category">{category.ja}</span>
        <p className="project-description">{description.ja}</p>
        <div className="project-links">
          <a href={`/project/${id}`} className="button">詳細を見る</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
