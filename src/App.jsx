import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import Card from './components/Card'
import ItemsPages from './components/ItemsPages';

const App = () => {
  const apikey = "2688550ee208f34afd6b3212ea8336cf";
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [listCharacters, setListCharacters] = useState([]);
  const getCharacters = async () => {
    const pageAct = page * 21;
    await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=21&offset=${pageAct}&apikey=${apikey}`).then((rest) => {
      const { data } = rest.data;
      setTotal(data.total);
      const list = data.results.map(item => ({
        thumbnail: item.thumbnail,
        name: item.name,
        description: item.description,
        id: item.id,
        stories: item.stories.returned,
      }));
      setListCharacters(list);
    });
  }

  useEffect(() => {
    getCharacters();
  }, [page]);

  const newPages = (newPage) => {
    setPage(newPage)
  };

  return (
    <div className='m-3'>
      <ItemsPages page={page} countPages={Math.ceil(total / 21)} newPage={newPages} />
      <dev className="container" >
        <div className="row justify-content-center  "> 
          {
            listCharacters.length > 0 && (
              listCharacters.map(item => (
                <Card key={item.id} name={item.name} description={item.description} thumbnail={item.thumbnail} stories={item.stories} />
              ))
            )
          }
        </div>
      </dev>
      <ItemsPages page={page} countPages={Math.ceil(total / 21)} newPage={newPages} />
    </div>
  )
};

export default App;
