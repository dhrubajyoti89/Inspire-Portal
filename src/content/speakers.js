import austin from '../assets/austin-arensberg.jpg';
import jackson from '../assets/jackson-cummings.jpg';
import morgan from '../assets/morgan-mahlock.jpg';
import laurens from '../assets/laurens-van-der-maaten.jpg';
import awni from '../assets/awni-hannun.jpg';
import fatemehsadat from '../assets/fatemehsadat-mireshghallah.jpg';
import daniel from '../assets/daniel-escudero.jpg';
import kritika from '../assets/kritika-prakash.jpg';
import alan from '../assets/alan_aboudib.jpg';
import suha from '../assets/suha-sabi-hussain.jpg';
import pranav from '../assets/pranav-subramani.jpg';
import borja from '../assets/borja-balle.jpg';
import kartik from '../assets/kartik-chopra.jpg';
import sadegh from '../assets/m-sadegh-riazi.jpg';
import nicolas from '../assets/nicolas-papernot.jpg';
import lucile from '../assets/lucile-saulnier.jpg';
import dmitrii from '../assets/dmitrii-usynin.jpg';
import zarreen from '../assets/zarreen-reza.jpg';
import sasi from '../assets/sasi-kumar-murakonda.jpg';
import georgios from '../assets/georgios-kaissis.jpg';
import madeleine from '../assets/maddie-shang.jpg';
import krzysztof from '../assets/krzysztof-ostrowski.jpg';
import jason from '../assets/jason-mancuso.jpg';
import andrew from '../assets/andrew-trask.jpg';
import helen from '../assets/helen-nissenbaum.jpg';
import peter from '../assets/peter-kairouz.jpg';
import nick from '../assets/nick-rose.jpg';
import ronnie from '../assets/ronnie-falcon.jpg';
import pia from '../assets/pia-mancini.jpg';
import nathan from '../assets/nathan-benaich.jpg';
import sachin from '../assets/sachin-deshpande.jpg';
import ken from '../assets/kenneth-cukier.jpg';
import amber from '../assets/amber-trask.jpg';
import miguel from '../assets/miguel-guevara.jpg';
import kristin from '../assets/kristin-lauter.jpg';
import sameer from '../assets/sameer-wagh.jpg';
import mayank from '../assets/mayank-varia.jpg';
import varun from '../assets/varun-khare.jpg';
import eric from '../assets/eric-verner.jpg';
import robin from '../assets/robin-roehm.jpg';
import pavlos from '../assets/pavlos-papadopoulos.jpg';
import adam from '../assets/adam-hall.jpg';
import lohan from '../assets/lohan-spies.jpg';
import tom from '../assets/tom-titcombe.jpg';
import will from '../assets/will-abramson.jpg';
import hadrien from '../assets/hadrien-lautraite.jpg';
import patrick from '../assets/patrick-mesana.jpg';
import alex from '../assets/alex-ziller.jpg';
import jonathan from '../assets/jonathan-passerat-palmbach.jpg';
import jim from '../assets/jim-o-leary.jpg';
import john from '../assets/john-farkas.jpg'
import emily from '../assets/emily-glanz.jpg';
import weikang from '../assets/weikang-song.jpg';
import bob from '../assets/bob-rogers.jpg';
import eckersley from '../assets/peter-eckersley.jpg';
import luca from '../assets/luca-belli.jpg';
import davide from '../assets/davide-testuggine.jpg';
import chinmay from '../assets/chinmay-shah.jpg';
import theo from '../assets/theo-ryffel.jpg';
import michael from '../assets/michael-geer.jpg';
import datafleets from '../assets/nick-elledge.jpg';
import mariya from '../assets/mariya-georgieva.jpg';
import nicolasinpher from '../assets/nicolas-gama.jpg';
import sarah from '../assets/default-speaker.jpg';
import zach from '../assets/zachary-charles.jpg';

const pixelate = (url) => {
  // Canvas, context, and image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  const value = 24;

  img.src = url;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    // Calculate the factor
    var fw = (img.width / value) | 0,
      fh = (img.height / value) | 0;

    // Turn off image smoothing (prefixed in some browsers)
    ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.msImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = false;

    // Draw mini-version of image
    ctx.drawImage(img, 0, 0, fw, fh);

    // Draw the mini-version back up, voila, pixelated
    ctx.drawImage(canvas, 0, 0, fw, fh, 0, 0, img.width, img.height);
  };

  return canvas;
};

export const getSpeakerByName = (input) => speakers.filter(({ name }) => name === input)[0];

export const title = 'Speakers';
export const titleLink = 'Submit a Talk →';
export const speakers = [
  {
    image: eckersley,
    pixelImage: pixelate(eckersley),
    name: 'Peter Eckersley',
    title: 'Convener at stop-covid.tech',
    about: [
      "Peter is an AI ethics, safety and privacy researcher. He has served as Convener of stop-covid.tech, as Director of Research at the Partnership on AI, and for many years as Technology Projects Director and Chief Computer Scientist at the Electronic Frontier Foundation. He has created or co-founded many privacy and security projects including, Panopticlick, Certbot, Let's Encrypt, Privacy Badger, and HTTPS Everywhere."
    ],
    social: []
  },
  {
    image: austin,
    pixelImage: pixelate(austin),
    name: 'Austin Arensberg',
    title: 'Director at Okta Ventures',
    about: [
      'Austin serves as Director of Okta Ventures, overseeing startup investments in privacy, identity, and security. Okta has invested in startups such as Datagrail, Hunters, VNDLY, Ockam, Productiv, and Openpath. Austin spent over 10 years of his career investing around the world. In the past 4 years he has spent time in early stage technology venture capital in San Francisco. Austin is passionate about international exchange and outreach, serves on the Board of the Princeton in Asia Fellowship program, is a Kauffman Fellow, and was also a Marshall Memorial Fellow.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/austinarensberg/' }]
  },
  {
    image: jackson,
    pixelImage: pixelate(jackson),
    name: 'Jackson Cummings',
    title: 'Investor at Salesforce Ventures',
    about: [
      'Jackson is an investor at Salesforce Ventures - Salesforce’s strategic investment arm that invests in innovative enterprise cloud companies. While at Salesforce Ventures, Jackson has worked on or led a number of deals including Forter, RunaHR, Narvar, BigID, Outreach, Ureeka and PerimeterX. Previously, Jackson was an investor at Top Tier Capital Partners, a global venture-focused Fund of Funds. Jackson graduated from Stanford University with a B.S. in Science, Technology and Society and was a member of the varsity football team. Jackson is a Kauffman Fellow and works with various non-profits including BLCK VC.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/jackson-cummings/' }]
  },
];
