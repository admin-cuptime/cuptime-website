
// import EventsHero from '@/components/events-hero/events-hero';
import EventHero from '@/components/events-hero/events-hero';
import FamiliarProducts from '@/components/familiar-products/familiar-products';
import React from 'react'

const EventsPage = () => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto space-y-20">
        <EventHero/>
        <FamiliarProducts/>
      </div>
    </>
  );
}

export default EventsPage;
