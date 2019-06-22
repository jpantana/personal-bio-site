// import projectsData from './helpers/data/projectsData';
import events from './components/events/events';
import '../styles/main.scss';

const init = () => {
  events.buttonEvents();
};

init();

export default { init };
