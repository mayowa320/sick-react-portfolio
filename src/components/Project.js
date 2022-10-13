export default function Project(props) {
  let { name, url, description } = props.data;
  return (
    <div className="project">
      <div className="project_header">{name}</div>
      <div className="project_description">
        <div>{description}</div>
        <a href={url} target="_blank">
          go to github
        </a>
      </div>
    </div>
  );
}
