import React, { Component } from 'react';
import * as data from './movies.json';
import MoviePage from './MoviePage';
import MovieGridItem from './MovieGridItem';
import styles from './MovieGrid.module.css';

class MovieGrid extends Component {
  filmsArr = data.default;

  debugger;

  gridClasses = [styles.grid];

  debugger;

  render() {
    return (
      <div className={this.gridClasses}>
        <MoviePage>
          {this.filmsArr.map(film => (
            <React.Fragment key={film.id}>
              <MovieGridItem
                id={film.id}
                title={film.title}
                posterUrl={film.posterUrl}
                overview={film.overview}
              />
            </React.Fragment>
          ))}
        </MoviePage>
      </div>
    );
  }
}

export default MovieGrid;

//  {this.filmArr.map(filmItem =>
//     <MovieGridItem id={filmItem.id} title={filmItem.title}/>)
//     }
