import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Controls from './Controls';
import Balans from './Balans';

export default class Dashboard extends Component {
  dashboardClasses = [styles.dashboard];

  render() {
    return (
      <div className={this.dashboardClasses}>
        <Controls />
        <Balans />
      </div>
    );
  }
}
