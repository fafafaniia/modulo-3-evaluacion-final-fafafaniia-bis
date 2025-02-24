function Search({}) {
    const [searchName, setSearchName] = useState('');

    return(
        <input
        type="text"
        placeholder="Buscar repositorio..."
        value={searchTerm}
        onChange={(e) => setSearchName(e.target.value)} // Actualiza el estado cuando el usuario escribe
      />
    )
}

export default Search;