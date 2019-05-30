import React, { Component } from 'react';
import * as data from './movies.json';
// import MovieGridItem from './MovieGridItem';
// import styles from './MovieGrid.module.css';

// const GridClasses = [styles.movie - grid];

class MovieGrid extends Component {
  filmsArr = data.default;

  render() {
    return <div className="GridClasses" />;
  }
}

export default MovieGrid;

//  {this.filmArr.map(filmItem =>
//     <MovieGridItem id={filmItem.id} title={filmItem.title}/>)
//     }
