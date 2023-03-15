import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div className="mission-card">
        <div className="mission-title">
          <p data-testid="mission-name">
            {name}
          </p>
        </div>
        <div data-testid="mission-card" className="mission-content">
          <p data-testid="mission-year">
            {year}
          </p>
          <p data-testid="mission-country">
            {country}
          </p>
          <p data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
