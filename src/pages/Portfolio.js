import projects from "../projects.json";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div>
      <h3>my portfolio here</h3>
      <div className="flex">
        {projects.map((project) => (
          <Project data={project} key={project.url} />
        ))}
      </div>
    </div>
  );
}
