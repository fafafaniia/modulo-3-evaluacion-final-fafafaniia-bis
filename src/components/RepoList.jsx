import PropTypes from 'prop-types';

function RepoList({data}) {
    const getLanguageColor = (language) => {
        switch (language) {
          case 'HTML':
            return 'red';
          case 'CSS':
            return 'blue';
          case 'JavaScript':
            return 'yellow';
          default:
            return 'gray';
        }
    };

    return(
        <ul>
        {data.map((item) => (
            <li key={item.id}>
                <h2>
                <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                </a>
                </h2>
                {item.description && <p>{item.description}</p>}
                {item.language && (
                <div className={`language-circle ${item.language.toLowerCase()}`}></div>
                )}
                {item.language && <span>{item.language}</span>}
            </li>
            ))}
        </ul>
    )
}

RepoList.propTypes= {
    data: PropTypes.array.isRequired
}

export default RepoList;