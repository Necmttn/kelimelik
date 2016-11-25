import React, {PropTypes} from 'react';
export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <h2 className="neco">this.props.name</h2>
      </div>
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};
