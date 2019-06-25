import pantana from './components/pantana/pantana';

import events from './components/events/events';

import '../styles/main.scss';

const init = () => {
  pantana.profileImageBuilder();
  events.buttonEvents();
};

init();

export default { init };
