import projects from '../projects/projects';
import bio from '../bio/bio';
import technologies from '../technologies/technologies';

const buttonEvents = () => {
  document.getElementById('bioLink').addEventListener('click', bio.bioDivBuilder);
  document.getElementById('techLink').addEventListener('click', technologies.techDivBuilder);
  document.getElementById('projectLink').addEventListener('click', projects.createProjectCards);
};

export default { buttonEvents };
