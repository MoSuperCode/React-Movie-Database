import './App.css';
import movies from './components/database/database';
import Filme from './components/Filme/Filme';

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Filme key={index} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} />;
      })}
    </div>
  );
}

export default App;
