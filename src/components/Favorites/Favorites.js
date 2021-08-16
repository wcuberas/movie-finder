import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from '../../actions'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
            {
              this.props.moviesFavourites && this.props.moviesFavourites.map(movie => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <span>{movie.title}</span>
                  </Link>
                    <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
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
    moviesFavourites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
