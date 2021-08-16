import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions'


export class Buscador extends Component {
  constructor(props) {
    super(props);                 // Este es un estado local, propio de Buscador!
    this.state = {                // Lo vamos a usar para manejar el input
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className='container-general'>
        <div className='container-buscador'>
          <div>
             <h2 className="buscador">Busca tu pelicula...</h2>
          </div>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label className="label" htmlFor="title">Película: </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button className='btn btn-dark' type="submit">BUSCAR</button>
          </form>
        </div>
        <ul className="lista-pelis">
            {       // Aca mostramos las peliculas
              this.props.movies?.map(movie => (
                <div className="div-ul" key={movie.imdbID}>
                    <button className="fav-button" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
                  <Link to={`/movie/${movie.imdbID}`}>
                    {/* <span>{movie.Title}</span> */}
                    <img src={movie.Poster} alt='movies'/>
                  </Link>
                </div>
              ))
            }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded  // Lo que hace es pasarle a Buscador una propiedad "movies"
  };                            // que adentro va a tener el estado de ese array.
}
// <Buscador movies = state.moviesLoaded

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))  // Se lee: "ante un titulo, vos vas a despachar getMovies"
    // Internamente lo que hace es que a Buscador le asigna una action como propiedad.
    // <Buscador getMovies = (title) => store.dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
