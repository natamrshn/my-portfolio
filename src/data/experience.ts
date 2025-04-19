export interface Job {
  company: string;
  title: string;
  location: string;
  date: string;
  tasks: string[];
}

export const jobs: Job[] = [
  {
    company: "Selfbook",
    title: "Software Developer (Remote)",
    location: "Selfbook / US - New York",
    date: "Jun 2021 - Present",
    tasks: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    company: "Upwork",
    title: "Freelance Frontend Developer",
    location: "Remote",
    date: "Feb 2020 - Jun 2021",
    tasks: [
      "Worked with various clients building web UIs with React.",
      "Created reusable components and optimized frontend performance.",
    ],
  },
];
