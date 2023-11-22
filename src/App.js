import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import store from "./reduxStore/store";
import { addList } from "./actions/favAction";
import { movies } from "./movies";

function App() {
  const [sira, setSira] = useState(0);
  
  const favorites = useSelector(store => store.favorites)
  const dispatch = useDispatch()
  function sonrakiFilm() {
    setSira(sira + 1);
    if (sira === movies.length - 1) {
      setSira(movies.length - 1);
    }
  }

  function oncekiFilm() {
    setSira(sira - 1);
    if (sira === 0) {
      setSira(0);
    }
  }
  function basaDon() {
    setSira(0);
  }

  const addHandler = (movie)=>{
    dispatch(addList(movies[sira]))
    
  }
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {sira !==0 && <button
              onClick={basaDon}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Basa Don
            </button>}
          
            {sira !==0 && <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Onceki
            </button>}
              {sira !== movies.length -1 && <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>}
            
            <button onClick={() => addHandler(movies.sira)} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>
        <Route path="/listem">
          <div>
            {favorites.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
