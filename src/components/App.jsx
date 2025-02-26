import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router';
import Search from './Search';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';


function App() {
  const [data, setData] = useState([]);

  const [languageFilter, setLanguageFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const filteredData = data.filter((item) => {
    const filteredLang = languageFilter ? item.language === languageFilter : true;
    const filteredName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
    return filteredLang && filteredName;
  });


  useEffect(() => {
    fetch('https://api.github.com/orgs/Adalab/repos')
    .then(response => response.json())
    .then(responseRepos => {
      setData(responseRepos);
    });
  }, []);

  return (
    <div>
     <Search setLanguageFilter={setLanguageFilter} setNameFilter={setNameFilter}/>
     <Routes>
      <Route path="/" element={<RepoList data={filteredData} />}/>
      <Route path="/repo/:id" element={<RepoDetail data={data} />}/>
     </Routes>
    </div>
  )
}

export default App;
