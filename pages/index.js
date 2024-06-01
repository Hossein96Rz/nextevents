import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = getFeaturedEvents();
  return {
    props: { featuredEvents },
  };
}
