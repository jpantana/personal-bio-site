import util from '../../helpers/util';
// import img from '../../../../imgs/joshpantanablackbackground.jpg';
// import img2 from '../../../../imgs/jpantanasuit.jpg';

import './pantana.scss';


const profileImageBuilder = () => {
  const domString = `
  <div id="jpOnLoadDiv" class="wow bounceIn slideInUp" style="visibility: visible; animation-delay: 0s; animation-name: slideInUp;">
    <div id="jpOnLoadBrandDiv">
    <div class="textInsideImage bounceIn pulse" style="visibility: visible; animation-delay: 0s; animation-name: pulse;">
      <h1 id="jpOnLoadName"><span class="spacingLet">J</span><span class="os"><span class="spacingLet">o</span><span class="spacingLet">s</span></span><span class="spacingLet">h</span></h1>
      <h3 id="JPbodyHeader">Pantana</h3>
      <h3 id="jpOnLoadTitle"><span id="soft">Soft</span>ware Devel<span id="oper">oper</span></h3>
      </div>
    </div>
  </div>`;
  util.printToDom('mainDiv', domString);
};

export default { profileImageBuilder };
