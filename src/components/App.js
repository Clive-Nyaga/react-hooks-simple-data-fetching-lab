// create your App component here

import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
        {data ? <img src={data} alt=" A Random Dog" /> : 'Loading...'}
    </div>
  );
}

export default App;