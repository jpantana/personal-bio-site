import pantana from './components/pantana/pantana';

import events from './components/events/events';

// import bio from './components/bio/bio';

import '../styles/main.scss';

const init = () => {
  pantana.profileImageBuilder();
  // bio.bioDivBuilder();
  events.buttonEvents();
};

init();

export default { init };
