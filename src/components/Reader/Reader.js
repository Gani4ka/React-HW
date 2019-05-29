import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as data from './publication.json';
import Article from './Article';
import Counter from './Counter';
import Controls from './Controls';
import styles from './Reader.module.css';

const readerClasses = [styles.reader];

class Reader extends Component {
  static defaultProps = {
    articleNumber: 0,
  };

  state = { articleNumber: this.props.articleNumber };

  handleIncrement = () => {
    this.setState(prevState => ({
      articleNumber: prevState.articleNumber + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      articleNumber: prevState.articleNumber - 1,
    }));
  };

  render() {
    const { articleNumber } = this.state;
    const publications = data.default;
    const isIncreamentDesabled = () => articleNumber >= publications.length - 1;
    const isDecreamentDesabled = () => articleNumber <= 0;

    return (
      <div className={readerClasses}>
        <Article articleNumber={articleNumber} publications={publications} />
        <Counter
          articleNumber={articleNumber}
          numberOfAllArticles={publications.length}
        />
        <Controls
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          isIncreamentDesabled={isIncreamentDesabled()}
          isDecreamentDesabled={isDecreamentDesabled()}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  articleNumber: PropTypes.number,
};

export default Reader;
