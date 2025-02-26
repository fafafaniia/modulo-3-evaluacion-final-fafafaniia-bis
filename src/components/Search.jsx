import PropTypes from 'prop-types';

function Search({setLanguageFilter, setNameFilter}) {
    const handleLanguageChange = (e) => {
        setLanguageFilter(e.target.value); 
      };
    
      const handleNameChange = (e) => {
        setNameFilter(e.target.value); 
      };

    return(
        <header className="header">
            <div className="search-container">
                <select onChange={handleLanguageChange} defaultValue="">
                <option value="">Filtrar por lenguaje</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                </select>
    
                <input className="searchInput"
                type="text"
                placeholder="Buscar repositorio..."
                onChange={handleNameChange}
                />
            </div>
        </header>
    )
}

Search.propTypes= {
    setLanguageFilter: PropTypes.func.isRequired,
    setNameFilter: PropTypes.func.isRequired
}

export default Search;