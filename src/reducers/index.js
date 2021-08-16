import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIES_DETAIL, LOADING }  from '../actions'
// Lo tengo que importar xq lo defini como constantes

const initialState = {        // Esto es un estado global de la aplicacion
    moviesFavourites: [],     // Pero podriamos tener estados locales tb.
    moviesLoaded: [],
    movieDetail: {},
    loading: false
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,                                                 // Hago una copia del estado anterior
          moviesFavourites: state.moviesFavourites.concat(action.payload) // Luego modifico el que quiero
          // [...state.moviesFavourites, action.payload]    es otra forma de hacerlo
        }
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
        };
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === GET_MOVIES_DETAIL) {
        return {
          ...state,
          loading: false,
          movieDetail: action.payload
        };
    }
    if (action.type === LOADING) {
      return {
        ...state,
        loading: true
      };
  }
    return state;
  }
  
  export default rootReducer;


