import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const teste = planets.map((planet, i) => {
      const { name, image } = planet;
      return <PlanetCard key={ i } planetName={ `${name}` } planetImage={ `${image}` } />;
    });
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <main>
          {teste}
        </main>
      </>
    );
  }
}

export default SolarSystem;
