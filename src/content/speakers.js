import aditya from '../assets/aditya.jpg';
import usha from '../assets/usha.jpg';
import harsh from '../assets/harsh.jpg';
import dhruv from '../assets/dhruv.jpeg';

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
    image: aditya,
    pixelImage: pixelate(aditya),
    name: 'Aditya Oberai',
    title: 'Intern at Techdome Solutions Pvt. Ltd.',
    about: [
      "lorem  ipsum "
    ],
    social: []
  },
  {
    image: usha,
    pixelImage: pixelate(usha),
    name: 'Usha Rengaraju',
    title: 'Founder at Neuro AI',
    about: [
      'lorem ipsum'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  },
  {
    image: harsh,
    pixelImage: pixelate(harsh),
    name: 'Harsh Bardhan Mishra',
    title: 'GSoC 21 at MetaCall',
    about: [
      'lorem ipsum'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  },
  {
    image: dhruv,
    pixelImage: pixelate(dhruv),
    name: 'Dhrubajyoti Chakraborty',
    title: 'Founder at Learn For Cause',
    about: [
      'lorem ipsum'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  },
  {
    image: usha,
    pixelImage: pixelate(usha),
    name: 'Swati Chabbra',
    title: 'Founder at Neuro AI',
    about: [
      'lorem ipsum'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  }
];
