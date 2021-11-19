import React, { useEffect, useState } from 'react';

const App = () => {
  const [doggoUrl, setDoggoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then(res => res.json())
      .then(({ message: url }) => {
        setDoggoUrl(url);
        setIsLoading(false);
      })
      .catch(err => new Error(err));
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {doggoUrl && <img src={doggoUrl} alt="A Random Dog" />}
    </div>
  );
};

export default App;
