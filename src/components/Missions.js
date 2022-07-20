import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const teste = missions.map((e, i) => {
      const { name, year, country, destination } = e;
      return (<MissionCard
        key={ i }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />);
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {teste}
      </div>
    );
  }
}

export default Missions;
