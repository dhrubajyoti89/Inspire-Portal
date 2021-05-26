import React from 'react';
import { Text } from 'theme-ui';

// import { registerLink } from './sidebar';

import intro from '../assets/carousel-intro.png'
// import tickets from '../assets/carousel-tickets.jpg';


export const slides = [
  {
    image: intro,
    title: "Let's do something for the cause.",
    text: () => (
      <Text>
        Researchers, engineers, policy makers, VCs, Mentors, entrepreneurs, philanthropies, and more...
        <br />
        They are all here.
        <br /><br />
        Come with your questions.
      </Text>
    )
  },
//   {
//     title: 'Registrations are open now!',
//     text: () => (
//      <Text>
//          Register and get your FREE PASS now{' '}
//       <a as="a" href="www.google.com" target="_blank">
//          via Eventbrite
//       </a>
//        .
//      </Text>
//    )
//  }
];
