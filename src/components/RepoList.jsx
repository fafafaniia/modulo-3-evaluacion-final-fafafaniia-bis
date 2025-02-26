import PropTypes from 'prop-types';
import Repo from './Repo';
import { useNavigate } from 'react-router';

function RepoList({data}) {
  const navigate = useNavigate();

  const handleRepoClick = (repo) => {
    navigate(`/repo/${repo.id}`);
  };

  return(
      <div className='body'>
        <ul className='repo-list'>
        <Repo data={data} handleRepoClick={handleRepoClick}/>
        </ul>
      </div>
  )
}

RepoList.propTypes= {
    data: PropTypes.array.isRequired
}

export default RepoList;