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
      'In this session we will be hosting various different speakers from the industry who will be sharing their valuable insights over the industry and their respective domain along with resources that will help the beginners to start off their career in that particular domain'
  },
  philanthropy: {
    title: 'Change Begins with a Gift: The Role of Philanthropy in Privacy Tech',
    description:
      'The first movers in any great revolution are those willing to make investments even in extremely uncertain and risky strategies. Such is the role of the great philanthropies throughout history. In this session, you will hear from a few of the leading privacy tech charities about how they support the development of privacy-enhancing infrastructure.'
  },
  'real-world-deployments-1': {
    title: 'Start-ups & Student Communities',
    description:
      'In this session we will be hosting various Entrepreneurs and Innovators who will be sharing their insights over their experience in managing and building their organizations from very scratch.'
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
    title: 'Real World Deployment Series: What is it Like to Build Products Today?',
    description:
      'Hear from leading tech startups deploying state-of-the-art tech at scale with live demonstartions of various projects. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  'closing-session-2': {
    title: 'Closing Session',
    description: 'Ankita recaps the highlights from the program. We will catch up once again in the coming year till then stay safe and keep coding and inspiring.'
  }
};

export const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  // SATURDAY
  {
    datetime: dayjs.utc('2021-06-10|10:30:00', timeFormat),
    speakers: [getSpeakerByName('Ankita Dutta')],
    title: 'Welcome Talk and Program Overview',
    group: groups['opening-session'],
    description: 'Tune in to find out about how were furthering our mission to organize the world’s information and make it universally accessible and useful.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-10|10:45:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'All about Learn For Cause as an organization',
    group: groups['opening-session'],
    description:
      "Learn more about the Learn For Cause organization and get all the information regarding joining the community and the benefits of being a LFC Community member.",
    duration: dayjs.duration({ minutes: 25 })
  },
  {
    datetime: dayjs.utc('2021-06-10|11:00:00', timeFormat),
    speakers: [getSpeakerByName('Aditya Oberai')],
    title: 'Internships & Networking',
    group: groups['roadmap'],
    description:
      'Know about the scenerario of Internships in the software industry in the time of this pandemic and the importance of Networking to get access to various resources and opportunities available in the industry',
    duration: dayjs.duration({ minutes: 45 })
  },
  {
    datetime: dayjs.utc('2021-06-10|11:45:00', timeFormat),
    speakers: [getSpeakerByName('Aditya Oberai')],
    title: 'QnA Session',
    group: groups['roadmap'],
    description:
      'An opportunity for all the participants to directly solve their doubts from Aditya completely live in this session',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-10|12:00:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'What is next in Web Development',
    group: groups['real-world-deployments-2'],
    description:
      'Fast approaching 5 billion users, the web platform has seen tremendous growth and innovation in the past year. Web developers around the world have come together to meet the moment, building vital experiences for everyone, everywhere. Learn how Learn For Cause is investing in a better web by building user trust in a privacy-first future, pushing innovation, and enabling developer success with tools and guidance.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-10|12:15:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'Build a MERN application from scratch',
    group: groups['real-world-deployments-2'],
    description:
      'Build a web application from scratch based on MERN stack. Step by Step explanation of the entire project along with free access to the codebase',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-10|13:00:00', timeFormat),
    speakers: [getSpeakerByName('Sandeep Singh')],
    title: 'All about the Commudle Ecosystem',
    group: groups['real-world-deployments-1'],
    description:
      'Build a web application from scratch based on MERN stack. Step by Step explanation of the entire project along with free access to the codebase',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2021-06-11|10:30:00', timeFormat),
    speakers: [getSpeakerByName('Usha Rengaraju')],
    title: 'Data Science Industry : How to get started?',
    group: groups['roadmap'],
    description:
      'Know about the scenerario of Data Science in the software industry in the time of this pandemic and How to get started to contribute to the domain alongside discussing the resources provided by the Neuro AI to the student community to help them empower the Data Science community',
    duration: dayjs.duration({ minutes: 45 })
  },
  {
    datetime: dayjs.utc('2021-06-11|11:15:00', timeFormat),
    speakers: [getSpeakerByName('Usha Rengaraju')],
    title: 'QnA Session',
    group: groups['roadmap'],
    description:
      'Solve all your queries and doubts live from Usha and also get to know how to connect to her in order to stay updated with the recent developments and opportunities in the field of Data Science',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-11|11:30:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'What is new in Machine Learning',
    group: groups['real-world-deployments-2'],
    description:
      'Learn about the latest and greatest in ML. We’ll cover what’s available to developers when it comes to creating, understanding, and deploying models for a variety of different applications. From Responsible AI to TensorFlow 2.5, Mobile Devices, Microcontrollers and beyond, we’ll cover new releases and tools. You will also hear about the latest from Google Cloud Platform and how to enable an end-to-end Machine Learning pipeline.',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-11|12:00:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'Project - ForumThread',
    group: groups['real-world-deployments-2'],
    description:
      'Get to know about the Learn For Cause hosted project ForumThread and get all the necessary insights on how to get started and contribute towards the project',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-11|12:30:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'Build a Node.js app and deploy it on Heroku',
    group: groups['real-world-deployments-2'],
    description:
      'Live demonstration of how to build a simple node.js application and deploy it to Heroku',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-11|13:00:00', timeFormat),
    speakers: [getSpeakerByName('Jai Sadana')],
    title: 'All about the Script Foundation',
    group: groups['real-world-deployments-1'],
    description:
      'All about the Script Foundation - Get to know about all the work that the Script Foundation has carried out so far including the community achievements and various others',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-11|13:30:00', timeFormat),
    speakers: [getSpeakerByName('Jai Sadana')],
    title: 'Importance of FREE Education and the future od ED-Tech in India',
    group: groups['real-world-deployments-1'],
    description:
      'Know the importanceof FREE Education and the future of Education Management startups in India',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-12|10:30:00', timeFormat),
    speakers: [getSpeakerByName('Harsh Bardhan Mishra')],
    title: 'All about Open Source Software Development',
    group: groups['roadmap'],
    description:
      'Get to know about Open Source Software Development and how to find organizations and start contribute to the projects along with resources and roadmap for GSOC 2022',
    duration: dayjs.duration({ minutes: 45 })
  },
  {
    datetime: dayjs.utc('2021-06-12|11:15:00', timeFormat),
    speakers: [getSpeakerByName('Harsh Bardhan Mishra')],
    title: 'QnA Session',
    group: groups['roadmap'],
    description:
      'An opportunity for all the participants to directly solve their doubts from Harsh completely live in this session',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-12|11:30:00', timeFormat),
    speakers: [getSpeakerByName('Omkar Shinde')],
    title: 'Building together communities - CommunityX',
    group: groups['roadmap'],
    description:
      'Understand the concept of CommunityX Platform and its benefits for the other communities',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2021-06-12|11:45:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'State of Kotlin on Android',
    group: groups['real-world-deployments-2'],
    description:
      'Kotlin on Android has been moving at a whirlwind pace in the last year, with major improvements in APIs, build tools, and performance. The Android team has been hard at work improving performance and integrating the newest Kotlin features with Android APIs. There’s a lot to keep up with, from a rewrite of the compiler to tools like Kotlin Symbol Processing and new Kotlin features in Android Studio. We’ll give the latest updates on what you need to know about the state of Kotlin on Android.',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-12|12:15:00', timeFormat),
    speakers: [getSpeakerByName('Dhrubajyoti Chakraborty')],
    title: 'Open Source Projects at Learn For Cause',
    group: groups['real-world-deployments-2'],
    description:
      'Learn more about all the Open Source projects of Learn For Cause and how can get start contributing to the projects along with the benefitsof becoming a community member at LFC.',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-12|12:30:00', timeFormat),
    speakers: [getSpeakerByName('Akash Sharma')],
    title: 'Ag-Spert Technologies - Next Gen Agriculture',
    group: groups['real-world-deployments-1'],
    description:
      'Smart crop monitoring solutions that can be readily deployed and remotely operated.',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-12|13:00:00', timeFormat),
    speakers: [getSpeakerByName('Sandeep Singh')],
    title: 'All about KOI',
    group: groups['real-world-deployments-1'],
    description:
      'Koi is building a decentralized publishing protocol and web 3.0 library. The protocol and tools Koi is implementing will allow for a robust ecosystem. The Koi ecosystem will provide grants for developers to take advantage of Koi tools that allow verified data and content, and new models for content monetization. Built on Arweave.org s permaweb, Koi is censorship resistant, highly scalable with no gas fees, and permanent over all time.',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2021-06-12|13:30:00', timeFormat),
    speakers: [getSpeakerByName('Ankita Dutta')],
    title: 'Closing Session',
    group: groups['closing-session-2'],
    description:
      'And thats it for INSPIRE INDIA 2021, We will be back next year with some amazing session and updates till then stay safe, keep coding and inspiring. Signing off!',
    duration: dayjs.duration({ minutes: 15 })
  }
];

const sortedSchedule = schedule.sort((a, b) => (a.datetime.isBefore(b.datetime) ? -1 : 1));

export const hasConferenceStarted = dayjs().isAfter(sortedSchedule[0].datetime);
export const agenda = groupSchedule(sortedSchedule);
