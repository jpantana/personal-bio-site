import util from '../../helpers/util';
import img from '../../../../imgs/joshpantanablackbackground.jpg';

import './pantana.scss';

const profileImageBuilder = () => {
  const domString = `
  <div id="profilePicDiv">
    <img id="profilePicImg" src="${img}" alt="photo of Josh Pantana with black background"> 
  </div>`;
  util.printToDom('mainDiv', domString);
};

export default { profileImageBuilder };
