import projects from '../projects/projects';
import bio from '../bio/bio';
import technologies from '../technologies/technologies';
import pantana from '../pantana/pantana';

const buttonEvents = () => {
  document.getElementById('bioLink').addEventListener('click', bio.bioDivBuilder);
  document.getElementById('techLink').addEventListener('click', technologies.techDivBuilder);
  document.getElementById('projectLink').addEventListener('click', projects.createProjectCards);
  document.getElementById('jpanBtn').addEventListener('click', pantana.profileImageBuilder);
};

export default { buttonEvents };
