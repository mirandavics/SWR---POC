/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useFetch } from './api/useFetch';
import './App.css';

function App() {
  const [articles, errorArticles] = useFetch('mostpopular/v2/viewed/1.json');

  /*  example when you want to fetch on a click button  */
  const [shouldFetchBooks, setShouldFetchBooks] = useState(false);
  const [books, errorBooks] = useFetch(
    shouldFetchBooks ? 'books/v3/lists/names.json' : null
  );

  const getData = () => {
    setShouldFetchBooks(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Boolean(articles?.results) && (
            <>
              <p>These are the most viewed articles on NYTimes.com</p>
              <div className="box-titles">
                {articles?.results.map((item: any, index: number) => (
                  <p key={index} style={{ margin: '8px' }}>
                    {item.title}
                  </p>
                ))}
              </div>
            </>
          )}

          {Boolean(errorArticles) && <p>Error Articles: {errorArticles}</p>}
        </div>

        <div>
          <p>Click the button bellow to obtain NYT Best Sellers Lists</p>

          <button className="btn-search" onClick={getData}>
            Click here
          </button>

          {Boolean(books?.results) && (
            <>
              <p>These are the most viewed articles on NYTimes.com</p>
              <div className="box-titles">
                {books?.results.map((item: any, index: number) => (
                  <p key={index} style={{ margin: '8px' }}>
                    {item.display_name}
                  </p>
                ))}
              </div>
            </>
          )}

          {Boolean(errorBooks) && <p>Error: {errorBooks}</p>}
        </div>

        <a
          className="App-link"
          href="https://swr.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about SWR
        </a>
      </header>
    </div>
  );
}

export default App;
