import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { getSpeakerByName } from './speakers';

dayjs.extend(utc);
dayjs.extend(duration);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  let agenda = [];

  schedule.forEach(({ datetime }) => {
    let match = false;

    for (let day = 0; day < agenda.length; day++) {
      if (datetime.isSame(agenda[day].datetime, 'day')) {
        match = true;
        break;
      }
    }

    if (!match) agenda.push({ datetime, events: [] });
  });

  schedule.forEach((item) => {
    for (let day = 0; day < agenda.length; day++) {
      if (item.datetime.isSame(agenda[day].datetime, 'day')) {
        agenda[day].events.push(item);
        break;
      }
    }
  });

  return agenda;
};

export const groups = {
  'opening-session': {
    title: 'Opening Session',
    description:
      'After the welcome message, the keynote speaker will talk about their first-hand account of the biggest tech revolution of the 21th century: how it happened, what we should learn from it, and what we need to do today.'
  },
  'in-the-research-lab-1': {
    title: 'In The Research Lab',
    description:
      "Several of the world's foremost tech experts talk about the latest in their research at the world's largest tech firms. This is the innovation that innovates the data usage from your pocket right now."
  },
  'keynote-1': {
    title: 'Keynote',
    description:
      'Hear from a legend of the tech community — whose groundbreaking philosophical research has defined what "technology" really is to both layman and academic. Her pivotal work is the foundation upon which our technical advancements rest.'
  },
  roadmap: {
    title: "Career Roadmap — Hack by the Experts?",
    description:
      'lorem ipsum'
  },
  philanthropy: {
    title: 'Change Begins with a Gift: The Role of Philanthropy in Privacy Tech',
    description:
      'The first movers in any great revolution are those willing to make investments even in extremely uncertain and risky strategies. Such is the role of the great philanthropies throughout history. In this session, you will hear from a few of the leading privacy tech charities about how they support the development of privacy-enhancing infrastructure.'
  },
  'real-world-deployments-1': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'Hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  investing: {
    title: 'Privacy is Profit: why are VCs Investing in Privacy-enhancing Tech?',
    description:
      'In a world where many view privacy as an opponent to innovation, these thought-leaders in the Venture Capital space see things differently. Come and hear why privacy-enhancing startups are going to outperform the previous generation on both ethics and economics.'
  },
  'research-lightning-1': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      '10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  'closing-session-1': {
    title: 'Closing Session',
    description:
      'Hear a grounding perspective on the gap between what society needs and what we, the privacy community, have yet to provide. This is the mountain we have yet to climb.'
  },
  teams: {
    title: 'Where Do I Fit In?',
    description:
      'A closer look at the organisational structure of OpenMined and will help you find where you can make impact among our thriving teams.'
  },
  networking: {
    title: 'Networking',
    description:
      'Use this hour to network on our Gather platform with speakers, OpenMined community members and others interested in privacy technology.'
  },
  'in-the-research-lab-2': {
    title: 'In The Research Lab',
    description:
      "Several of the world's foremost privacy experts talk about the latest in their privacy research at the world's largest tech firms. This is the innovation that protects the data sitting in your pocket right now."
  },
  'research-lightning-2': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      '10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  tutorials: {
    title: 'Tutorial Breakout Sessions',
    description:
      'Learn by doing! These hour-long tutorial sessions will all run in parallel. On the day, simply pick a session that interests you most and dive in!'
  },
  'real-world-deployments-2': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'Hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  'closing-session-2': {
    title: 'Closing Session',
    description: 'Andrew recaps the highlights from the conference.'
  }
};

export const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  // SATURDAY
  {
    datetime: dayjs.utc('2021-06-10|13:55:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'Welcome Talk and Program Overview',
    group: groups['opening-session'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-10|14:10:00', timeFormat),
    speakers: [getSpeakerByName('Swati Chabbra')],
    title: 'All about Learn For Cause as an organization',
    group: groups['opening-session'],
    description:
      "lorem ipsum",
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2021-06-10|14:30:00', timeFormat),
    speakers: [getSpeakerByName('Aditya Oberai')],
    title: 'Internships & Networking',
    group: groups['roadmap'],
    description:
      'lorem ipsum',
    duration: dayjs.duration({ minutes: 15 })
  }
];

const sortedSchedule = schedule.sort((a, b) => (a.datetime.isBefore(b.datetime) ? -1 : 1));

export const hasConferenceStarted = dayjs().isAfter(sortedSchedule[0].datetime);
export const agenda = groupSchedule(sortedSchedule);
