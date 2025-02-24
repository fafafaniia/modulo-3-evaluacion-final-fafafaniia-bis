import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Search from './Search';
import RepoList from './RepoList';
import Repo from './Repo';


function App() {
  const [searchName, setSearchName] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.github.com/orgs/Adalab/repos')
    .then(response => response.json())
    .then(responseRepos => {
      setData(responseRepos);
    });
  }, []);

  return (
    <div>
     <Search searchName={searchName} setSearchName={setSearchName}/>
     <RepoList data={data}/>
     <Repo/>
    </div>
  )
}

export default App;
