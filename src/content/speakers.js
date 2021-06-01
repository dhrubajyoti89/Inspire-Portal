import aditya from '../assets/aditya.jpg';
import usha from '../assets/usha.jpg';
import harsh from '../assets/harsh.jpg';
import dhruv from '../assets/dhruv.jpeg';
import akash from '../assets/pp-3.jpg';
import jai from '../assets/jaisadana.jpg';
import omkar from '../assets/omkar.jpg';
import sandip from '../assets/sandip.jpg';
import ankita from '../assets/ankita.jpeg';


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
      "Aditya Oberai is a Junior Software Developer Intern at Techdome and a full-time student pursuing Computer Science and Engineering at Amity University, Noida in India. Having worked with various technologies such as .NET, Microsoft Azure, etc., he spends most of his time empowering tech communities as an MLH Coach, Twilio Champion, Gold Microsoft Learn Student Ambassador, and an #IamRemarkable facilitator. Aditya has been awarded Azure Heroes Community Hero and AI Ambassador Digital Badgers by Microsoft and is a member of the .NET Foundation. He was the National Winner in the Education category at Microsoft Imagine Cup 2021 India Chapter. "
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/adityaoberai1/' }]
  },
  {
    image: omkar,
    pixelImage: pixelate(omkar),
    name: 'Omkar Shinde',
    title: 'Founder at CommunityX  Pvt. Ltd.',
    about: [
      "Omkar Shinde is the Founder at CommunityX an online marketplace for Communities ONLY! At CommunityX, they invite & support all online/offline communities. All the communities can share their upcoming initiatives, volunteering work opportunities for students.  "
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/omkar-shinde-310aa5193/' }]
  },
  {
    image: jai,
    pixelImage: pixelate(jai),
    name: 'Jai Sadana',
    title: 'Founder at Script Foundation',
    about: [
      "A Young Man who is working for the betterment of India and its youth. His work is focused on providing quality education to the youth of India for free. He is the Founder and CEO of Script Foundation. Script Foundation is a non-profit organization that aims to provide quality education to the students who are unable to get in this toughest times"
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/jaisadana/' }]
  },
  {
    image: usha,
    pixelImage: pixelate(usha),
    name: 'Usha Rengaraju',
    title: 'Founder at Neuro AI',
    about: [
      'Ranked as Top Ten Data Scientists for 2020 by Analytics India Magazine and Founder at Neuro AI and Module Expert for Probabilistic Graphical Models @Upgrad '
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/usha-rengaraju-b570b7a2/' }]
  },
  {
    image: harsh,
    pixelImage: pixelate(harsh),
    name: 'Harsh Bardhan Mishra',
    title: 'GSoC 21 at MetaCall',
    about: [
      'Harsh is a Junior Year Student at Sathyabama IST currently undertaking Bachelors in Computer Science and Engineering. He cracked GSOC 21 for Metacall and an Intern at Red Hat with the CCS Team. He had been an MLH Fellow for the Fall 2020 Batch, a Former Software Engineering Intern at Qxf2 Services and a Summer Intern at Scholify.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/harshcasper/' }]
  },
  {
    image: dhruv,
    pixelImage: pixelate(dhruv),
    name: 'Dhrubajyoti Chakraborty',
    title: 'Founder at Learn For Cause',
    about: [
      'Dhrubajyoti is the Founder and Open Source Software Development Head at Learn For Cause. He is the ML Head of Techanalogy - Chennai and an Testing Intern at Digilocker and a full-time student pursuing Computer Science and Engineering at BPUT, Odisha in India. Having worked with various technologies such as MERN, Kubernetes, etc., he spends most of his time empowering tech communities as an MD at CXC, Open Source Developer at Girlscript Foundation, Developer at Call For Code and various others.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/dhrubajyoti-chakraborty-62588a186/' }]
  },
  {
    image: akash,
    pixelImage: pixelate(akash),
    name: 'Akash Sharma',
    title: 'Co-Founder at AgSpert Technologies',
    about: [
      'Akash is one of the Co-Founder at AgSpert where they are building A.I. powered platforms that help in increasing productivity and efficiency of the farming industry.'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  },
  {
    image: sandip,
    pixelImage: pixelate(sandip),
    name: 'Sandeep Singh',
    title: 'Growth Hacker at Commudle',
    about: [
      'Sandeep is one of the Co-Founder at Commudle an ecosystem for Software Developers and their Communities to share knowledge, network and grow together.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/sandybcsald/' }]
  },
  {
    image: ankita,
    pixelImage: pixelate(ankita),
    name: 'Ankita Dutta',
    title: 'Event Manager at INSPIRE INDIA',
    about: [
      'Ankita is one of the host and the Events Manager of the INSPIRE INDIA Program 2021'
    ],
    social: [{ type: 'linkedin', url: '#' }]
  }
];
