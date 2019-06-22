import util from '../../helpers/util';
// import img from '../../../../imgs/joshPantanaB&W.jpg';

import './pantana.scss';

const profileImageBuilder = () => {
  const domString = `
  <div id="profilePicDiv">
    <h2 id="imgH1"><span id="josh3">Software</span>Developer</h2>
  </div>`;
  util.printToDom('mainDiv', domString);
};

export default { profileImageBuilder };
