import React, { useState } from 'react';
import NgoNav from './NgoNav';
//import VolunteerOpportunity from './VolunteerOpportunity';
import VolunteerOpportunityForm from './VolunteerOpportunityForm';

import Button from '@mui/material/Button';

const App: React.FC = () => {
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [opportunities, setOpportunities] = useState<any[]>([]);

  const handleShowOpportunities = () => {
    setShowOpportunities(true);
  };

  const handleSubmit = (subject: string, timings: string, volunteersNeeded: number) => {
    const newOpportunity = {
      subject,
      timings,
      volunteersNeeded,
    };
    setOpportunities([...opportunities, newOpportunity]);
  };

  return (
    <div>
      <NgoNav ></NgoNav>
      <header>
        <h1>CareWing for You!</h1>
      </header>
      {/* <nav>
        <Button variant="contained" onClick={handleShowOpportunities}>Add Volunteer Opportunities</Button>
      </nav>
      <main>
        {showOpportunities && (
          <section id="volunteer-opportunities">
            <h2>Volunteer Opportunities</h2>
            <VolunteerOpportunityForm onSubmit={handleSubmit} />
            {opportunities.map((opportunity, index) => (
              <VolunteerOpportunity key={index} {...opportunity} />
            ))}
            <button onClick={handleShowOpportunities}>Hide Volunteer Opportunities</button>
          </section>
        )}
      </main> */}
    </div>
  );
};

export default App;