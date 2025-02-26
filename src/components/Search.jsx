import PropTypes from 'prop-types';
import logoAdalab from '../images/logo-adalab.png'

function Search({setLanguageFilter, setNameFilter}) {
    const handleLanguageChange = (e) => {
        setLanguageFilter(e.target.value); 
      };
    
      const handleNameChange = (e) => {
        setNameFilter(e.target.value); 
      };

    return(
        <div className="header">
            <img className="logoAdalab" src={logoAdalab} alt="Imagen con el logo de Adalab que tiene escrito Repositorios de Adalab" />
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
        </div>
    )
}

Search.propTypes= {
    setLanguageFilter: PropTypes.func.isRequired,
    setNameFilter: PropTypes.func.isRequired
}

export default Search;