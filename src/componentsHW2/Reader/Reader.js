// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import styles from './Reader.module.css';

// export default class Reader extends Component {
//   state = {
//     index: this.props.publications,
//   };

// handleIncrement = () => {
//   this.setState((prevState, props) => ({
//     value: prevState.value + props.step,
//   }));
// };

// handleDecrement = () => {
//   this.setState((prevState, props) => ({
//     value: prevState.value - props.step,
//   }));
// };

//   render() {
//     const readerClasses = [styles.reader];
//     // const { value } = this.state;
//     const { array } = this.props;

//     return (
//       <div className={readerClasses}>
//         <Article publications={this.props} />
//       </div>
//     );
//   }
// }

// Reader.propTypes = {
//   props: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
