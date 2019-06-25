import util from '../../helpers/util';
// import img from '../../../../imgs/joshpantanablackbackground.jpg';
// import img2 from '../../../../imgs/jpantanasuit.jpg';

import './pantana.scss';


const profileImageBuilder = () => {
  const domString = `
  <div id="jpOnLoadDiv" class="wow bounceIn slideInUp" style="visibility: visible; animation-delay: 0s; animation-name: slideInUp;">
    <div id="jpOnLoadBrandDiv">
      <h1 id="jpOnLoadName" class="bounceIn pulse" style="visibility: visible; animation-delay: 0s; animation-name: pulse;"><span class="J">J</span>os<span class="H">h</span</h1><br>
      <span id="JPbodyHeader">Pantana</span>
      <h3 id="jpOnLoadTitle"><span id="soft">Soft</span>ware Devel<span id="oper">oper</span></h3>
    </div>
  </div>`;
  util.printToDom('mainDiv', domString);
};

export default { profileImageBuilder };
