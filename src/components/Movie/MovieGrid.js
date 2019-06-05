import React, { Component } from 'react';
import * as data from './movies.json';
import MoviePage from './MoviePage';
import MovieGridItem from './MovieGridItem';
import SearchBar from './SearchBar';
import styles from './MovieGrid.module.css';

class MovieGrid extends Component {
  filmsArr = data.default;

  gridClasses = [styles.grid];

  state = {
    value: '',
  };

  filterFilms = value => {
    const filteredFilms = [...this.filmsArr];
    console.log(value, filteredFilms);
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value,
    });
    this.filterFilms(value);
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={this.gridClasses}>
        <MoviePage>
          <SearchBar value={value} onChange={this.handleChange} />
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
