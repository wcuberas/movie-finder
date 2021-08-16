import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    const movieId = this.props.match.params.id;
    this.props.getDetail(movieId)
}

    render() {
        return (
            
            
            <div className="movie-detail">
                {
                    this.props.loading ? <h2>CARGANDO...</h2> :
                <div>
                    <h4>{this.props.movie.Title}</h4>  
                    <h4>{this.props.movie.Year}</h4>  
                    <h4>{this.props.movie.Plot}</h4>  
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
      loading: state.loading
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getDetail: idMovie => dispatch(getMovieDetail(idMovie))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);
  