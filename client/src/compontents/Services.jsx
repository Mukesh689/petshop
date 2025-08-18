// Services.jsx
import React from 'react';
import PetServiceCard from './PetServiceCard';

const Services = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap gap-4">
      <PetServiceCard
        icon="home"
        title="Pet Boarding"
        text="While you're on holiday, here's where your furry friends will spend their time."
      />
      <PetServiceCard
        icon="bone"
        title="Pet Daycare"
        text="Our certified staff has over a decade experience working in dog care."
      />
      <PetServiceCard
        icon="truck"
        title="Pet Transport"
        text="We welcome dogs of all shapes and sizes that meet safety requirements."
      />
    </div>
  );
};

export default Services;
