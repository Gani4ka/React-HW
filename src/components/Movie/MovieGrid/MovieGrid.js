import React, { Component } from 'react';
import * as data from '../movies.json';
import MoviePage from '../Movie-page/MoviePage';
import MovieGridItem from './MovieCridItem/MovieGridItem';
import SearchBar from '../Search-bar/SearchBar';
import styles from './MovieGrid.module.css';

class MovieGrid extends Component {
  filmsArr = data.default;

  gridClasses = [styles.grid];

  state = {
    value: '',
    films: this.filmsArr,
  };

  filterFilms = value => {
    const filteredFilms = this.filmsArr.filter(film =>
      film.title.toLowerCase().includes(value),
    );
    return filteredFilms;
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value,
      films: this.filterFilms(value),
    });
    this.filterFilms(value);
  };

  render() {
    const { value, films } = this.state;
    return (
      <div className={this.gridClasses}>
        <MoviePage>
          <SearchBar value={value} onChange={this.handleChange} />
          {films.length !== 0 ? (
            films.map(film => (
              <React.Fragment key={film.id}>
                <MovieGridItem
                  id={film.id}
                  title={film.title}
                  posterUrl={film.posterUrl}
                  overview={film.overview}
                />
              </React.Fragment>
            ))
          ) : (
            <span>No matchings results!</span>
          )}
        </MoviePage>
      </div>
    );
  }
}

export default MovieGrid;
