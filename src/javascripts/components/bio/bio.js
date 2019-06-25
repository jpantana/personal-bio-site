import util from '../../helpers/util';

import './bio.scss';
// import img from '../../../../imgs/jpantanasuit.jpg';

import 'bootstrap';

const bioDivBuilder = (e) => {
  e.preventDefault();
  let domString = '';
  domString += `
  <div id="bioPage" class="mainDiv bounceIn headShake" style="visibility: visible; animation-delay: 0s; animation-name: headShake;">
    <h2 id="aboutH1">About me...</h2>
      <h3 class="h3"></em>software developer</em></h3>
      <p id="bio">Greetings! My name is Josh Pantana. Among other things, I’m a full-stack web developer residing in Nashville, TN. 
      I have a serious passion for creating a highly functional,  intuitive, and 
      inspired web experience. I believe the web best serves the user when it is both aesthetically stimulating, 
      and operationally friction-free. I’m versed in JavaScript (with a React emphasis) and (will be learning) .NET (with a C# emphasis). Let’s 
      make the web a more beautiful place together!</p>
  </div>`;
  util.printToDom('mainDiv', domString);
  // buttonEvents(); // eslint-disable-line no-use-before-define
};

export default { bioDivBuilder };
/* <div id="JPPhoto">
  <img class="jpImg" src="${img}" alt="josh pantana">
</div> */
