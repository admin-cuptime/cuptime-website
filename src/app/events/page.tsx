import EventHero from '@/components/events-hero/events-hero';
import FamiliarProducts from '@/components/familiar-products/familiar-products';
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';

const EventsPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto space-y-20">
      <EventHero />
      <CuptimeImageMedia />
      <FamiliarProducts />
    </section>
  );
};

export default EventsPage;
