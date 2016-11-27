import React, {PropTypes} from 'react';

import styles from './style.css'

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <h2 className={styles.me}>me too</h2>
        <p>Hoba naber osman</p>
      </div>
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};
