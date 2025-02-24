import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Search from './Search';


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
     <Search setSearchName={setSearchName}/>
      
    </div>
  )
}

export default App;
