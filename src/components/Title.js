import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    console.log('teste', headline);
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
