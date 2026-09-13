import { Lesson } from '@/types';

export const LESSONS: Lesson[] = [
  {
    day: 1,
    title: 'Meet Scratch',
    subtitle: 'Intro Day & Scratch Setup',
    type: 'scratch',
    description: 'Discover the power of code! Learn the Scratch workspace, add your first sprite, and make it speak.',
    skills: ['Scratch Interface', 'Sprites', 'Backdrops', 'Say Blocks'],
    objectives: [
      'Navigate the Scratch stage and blocks menu',
      'Add a custom sprite and backdrop',
      'Make a sprite output text on screen'
    ],
    activities: [
      {
        id: 'd1-a1',
        title: 'Sprite Explorer',
        type: 'practice',
        description: 'Pick a sprite from the library and snap a `when green flag clicked` block to a `say Hello!` block.'
      }
    ],
    reflection: 'What sprite did you choose, and why?'
  },
  {
    day: 2,
    title: 'Make It React',
    subtitle: 'Events & Sounds',
    type: 'scratch',
    description: 'Bring code to life using event listeners and sound effects triggered by clicks.',
    skills: ['Event Handlers', 'Sound Effects', 'Sprite Interaction'],
    objectives: [
      'Use the green flag and click event triggers',
      'Add sound effects to code blocks',
      'Create dialogue timing between two sprites'
    ],
    activities: [
      {
        id: 'd2-a1',
        title: 'Sound & Click',
        type: 'practice',
        description: 'Add a sound effect to your sprite that triggers whenever the user clicks on it directly.'
      }
    ],
    reflection: 'How do event blocks tell a program when to run code?'
  },
  {
    day: 3,
    title: 'Get Moving',
    subtitle: 'Motion & Backdrops',
    type: 'scratch',
    description: 'Learn spatial positioning and animate sprite movement across different backdrop scenes.',
    skills: ['X/Y Coordinates', 'Glide', 'Backdrop Switching'],
    objectives: [
      'Move sprites using X and Y coordinates',
      'Glide smoothly across the stage',
      'Switch backdrops to create scenes'
    ],
    activities: [
      {
        id: 'd3-a1',
        title: 'Moving Adventure',
        type: 'challenge',
        description: 'Program a sprite to glide across the screen and change the backdrop once it reaches the edge.'
      }
    ],
    reflection: 'What happens to the X value when your sprite moves right?'
  },
  {
    day: 4,
    title: 'Bring It to Life',
    subtitle: 'Intro to Animation',
    type: 'scratch',
    description: 'Master costume switching and repeating loops to create frame-by-frame character animations.',
    skills: ['Costumes', 'Forever Loops', 'Frame Rates'],
    objectives: [
      'Cycle through sprite costumes',
      'Use repeat and forever loops for continuous animation',
      'Control animation speed using wait blocks'
    ],
    activities: [
      {
        id: 'd4-a1',
        title: 'Dancing Sprite',
        type: 'practice',
        description: 'Create a mini-project where your sprite cycles costumes inside a forever loop to dance.'
      }
    ],
    reflection: 'Why do we need a wait block inside an animation loop?'
  },
  {
    day: 5,
    title: 'Tell a Story',
    subtitle: 'Broadcasts & Storytelling',
    type: 'scratch',
    description: 'Connect events across multiple sprites using invisible broadcast messages to tell multi-scene stories.',
    skills: ['Broadcast Messages', 'Scene Timing', 'Multi-Sprite Scripts'],
    objectives: [
      'Send and receive broadcast signals',
      'Synchronize conversations between sprites',
      'Build a multi-scene animated adventure'
    ],
    activities: [
      {
        id: 'd5-a1',
        title: 'Interactive Story',
        type: 'challenge',
        description: 'Build a two-scene story where Sprite A broadcasts a message that triggers Sprite B to speak.'
      }
    ],
    reflection: 'How does a broadcast message act like a signal flag in code?'
  },
  {
    day: 6,
    title: 'Level Up with Code.org',
    subtitle: 'Transitioning Platforms',
    type: 'code-org',
    description: 'Transition your block coding skills into Code.org and explore new project workflows.',
    skills: ['Code.org Interface', 'Workspace Navigation', 'Remixing'],
    objectives: [
      'Set up and navigate Code.org workspaces',
      'Connect Scratch logic to Code.org blocks',
      'Explore and remix project library starters'
    ],
    activities: [
      {
        id: 'd6-a1',
        title: 'Platform Remix',
        type: 'practice',
        description: 'Open a starter project on Code.org and remix it with your own sprite behaviors.'
      }
    ],
    reflection: 'What similarities did you notice between Scratch and Code.org?'
  },
  {
    day: 7,
    title: 'Think Like a Programmer',
    subtitle: 'Loops & Conditionals',
    type: 'code-org',
    description: 'Dive deep into algorithm logic, sequencing puzzles, and interactive dance events.',
    skills: ['Sequencing', 'Conditionals (If/Else)', 'Dance Party API'],
    objectives: [
      'Build efficient algorithms with minimal blocks',
      'Use conditional logic (If/Else Statements)',
      'Create interactive responses based on user input'
    ],
    activities: [
      {
        id: 'd7-a1',
        title: 'Dance Party Event',
        type: 'challenge',
        description: 'Build a Dance Party in Code.org where pressing arrow keys triggers specific dance moves.'
      }
    ],
    reflection: 'When would you use a conditional statement instead of a standard loop?'
  },
  {
    day: 8,
    title: 'Build Your Project',
    subtitle: 'Final Project Kickoff',
    type: 'capstone',
    description: 'Brainstorm, design, and begin building your original capstone project.',
    skills: ['Project Planning', 'Software Design', 'System Integration'],
    objectives: [
      'Choose a project path (Game, Story, or Dance Party)',
      'Create a storyboard and feature checklist',
      'Program core mechanics and sprite interactions'
    ],
    activities: [
      {
        id: 'd8-a1',
        title: 'Capstone Blueprint',
        type: 'learn',
        description: 'Map out your 2+ sprites, 2+ backdrops, loop, and conditional/variable logic.'
      }
    ],
    reflection: 'What is the core mechanic or goal of your final project?'
  },
  {
    day: 9,
    title: 'Hunt the Bugs',
    subtitle: 'Debugging & Polish',
    type: 'capstone',
    description: 'Identify common software bugs, polish your UI/UX, and conduct peer testing.',
    skills: ['Debugging', 'Peer Code Review', 'State Resets'],
    objectives: [
      'Identify and fix common bugs (e.g., Teleport Bug, Runaway Score)',
      'Ensure initial sprite state resets properly on restart',
      'Gather and implement peer testing feedback'
    ],
    activities: [
      {
        id: 'd9-a1',
        title: 'Bug Lab Inspection',
        type: 'challenge',
        description: 'Fix the missing initialization block causing your sprite to spawn in the wrong position.'
      }
    ],
    reflection: 'Why is setting initial conditions so important when a project resets?'
  },
  {
    day: 10,
    title: 'Pitch Preparation',
    subtitle: 'Presentation Planning',
    type: 'capstone',
    description: 'Prepare a 1-minute pitch highlighting your code architecture, challenges, and favorite features.',
    skills: ['Technical Communication', 'Project Demos', 'Public Speaking'],
    objectives: [
      'Write a concise pitch describing your project build',
      'Explain a specific coding challenge and how you solved it',
      'Run final QA tests before presentation day'
    ],
    activities: [
      {
        id: 'd10-a1',
        title: 'Pitch Generator',
        type: 'practice',
        description: 'Use the Interactive Pitch Builder tool to organize your demonstration notes.'
      }
    ],
    reflection: 'What feature in your project are you most proud of building?'
  },
  {
    day: 11,
    title: 'Showcase & Graduation',
    subtitle: 'Project Demos & Next Steps',
    type: 'capstone',
    description: 'Present your completed project to the class, celebrate your journey, and discover text-based coding!',
    skills: ['Project Showcase', 'Reflection', 'Future Learning Paths'],
    objectives: [
      'Demonstrate your final capstone project live',
      'Receive your Code Splash Summer 2026 Certificate',
      'Explore paths into text-based languages like Python and JavaScript'
    ],
    activities: [
      {
        id: 'd11-a1',
        title: 'Final Gallery Submission',
        type: 'challenge',
        description: 'Publish your project link and description to the Code Splash Showcase.'
      }
    ],
    reflection: 'What is the next coding language or project you want to tackle?'
  }
];
