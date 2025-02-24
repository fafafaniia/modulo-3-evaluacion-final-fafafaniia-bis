

function Search({searchName, setSearchName}) {

    return(
        <input
            type="text"
            placeholder="Buscar repositorio..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)} // Actualiza el estado cuando el usuario escribe
        />
        

    )
}



export default Search;