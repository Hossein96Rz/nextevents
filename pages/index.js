import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage(featuredEvents) {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getServerSideProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { featuredEvents },
  };
}
