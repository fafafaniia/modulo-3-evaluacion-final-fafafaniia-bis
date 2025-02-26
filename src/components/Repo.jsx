import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Repo({data, handleRepoClick}) {
    return(
        <>
        {data.map((item) => (
            <li key={item.id} className="repo-item" onClick={() => handleRepoClick(item)}>
                <h2>
                <Link to={item.html_url} target="_blank">
                    {item.name}
                </Link>
                </h2>
                {item.description && <p>{item.description}</p>}
                {item.language && (
                <div className={`language-circle ${item.language.toLowerCase()}`}/>
                )}
                {item.language && <span>{item.language}</span>}
            </li>
        ))}
        </>
        
    )
}

Repo.propTypes= {
    data: PropTypes.array.isRequired,
    handleRepoClick: PropTypes.func.isRequired
}

export default Repo;