import React from 'react';
import PropTypes from 'prop-types';
import styles from './MongoCharts.module.css';

const MongoCharts = () => (
  <div className={styles.MongoCharts}>
      <iframe className={styles.chart1} width="640" height="480" src="https://charts.mongodb.com/charts-reboothack-svrqf/embed/charts?id=579d473f-cb9a-476a-8d8c-f43dd939365f&theme=light"></iframe>
  </div>
);

MongoCharts.propTypes = {};

MongoCharts.defaultProps = {};

export default MongoCharts;
