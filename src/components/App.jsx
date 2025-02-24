import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Search from './Search';
import RepoList from './RepoList';
import Repo from './Repo';


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
     <RepoList data={filteredData}/>
     <Repo/>
    </div>
  )
}

export default App;
