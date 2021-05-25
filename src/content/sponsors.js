import { hasConferenceStarted } from './agenda';

import apheris from '../assets/script.png';
import arkhn from '../assets/gvc.png';
import cdhi from '../assets/cxc.jpg';
import datafleets from '../assets/skillship.png';

export const title = 'Sponsors';
export const titleLink = hasConferenceStarted ? 'Donate →' : 'Become a Sponsor →';
export const sponsorLink = hasConferenceStarted
  ? '#'
  : '#';
export const sponsors = [
  {
    image: apheris,
    name: 'Script Foundation',
    url: '#'
  },
  {
    image: arkhn,
    name: 'Give My Certificate',
    url: '#'
  },
  {
    image: cdhi,
    name: 'CodXCrypt',
    url: '#'
  },
  {
    image: datafleets,
    name: 'Skillship Foundation',
    url: '#'
  }
];
