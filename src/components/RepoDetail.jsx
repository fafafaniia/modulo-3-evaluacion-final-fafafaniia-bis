import { useParams } from 'react-router';
import PropTypes from 'prop-types';

function RepoDetail({ data }) {
  const { id } = useParams();
  const repo = data.find((repo) => repo.id === parseInt(id));

  if (!repo) {
    return <p>Repo no encontrado.</p>;
  }

  return (
    <div className="repo-detail">
      <h1>{repo.name}</h1>
      {repo.description && <p>{repo.description}</p>}
      {repo.language && <p><strong>Lenguaje:</strong> {repo.language}</p>}
      <p><strong>Estrellas:</strong> {repo.stargazers_count}</p>
      <p><strong>Observadores:</strong> {repo.watchers_count}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <a href={repo.html_url}>
        Ver en GitHub
      </a>
    </div>
  );
}

RepoDetail.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RepoDetail;
