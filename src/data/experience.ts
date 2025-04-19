export interface Job {
  company: string;
  title: string;
  location: string;
  date: string;
  tasks: string[];
}

export const jobs: Job[] = [
  {
    company: "Nordic Nest",
    title: "Frontend Developer",
    location: "Remote",
    date: "Jan 2025 - Present",
    tasks: [
      "Created modular and reusable React components using TypeScript, ensuring scalability and maintainability across the project.",
      "Developed a Single Page Application (SPA) to enhance user experience by reducing page load times and ensuring smooth navigation.",
      "Implemented responsive, cross-device layouts using CSS Flexbox and Grid to ensure a seamless experience on various screen sizes.",
    ],
  },
  {
    company: "Skarpette",
    title: "Frontend Developer",
    location: "Remote",
    date: "Mar 2024 - Jan 2025",
    tasks: [
      "Built and optimized React components with TypeScript, focusing on code reusability and performance.",
      "Implemented SPA architecture to improve overall application performance and reduce load times.",
      "Enhanced user experience through lazy loading, API optimizations, and responsive design techniques.",
      "Integrated RESTful APIs for seamless data management and smooth user interactions. Also integrated Nova Poshta API for order creation.",
    ],
  },
  {
    company: "Optik Okulist",
    title: "Markup Developer",
    location: "Remote",
    date: "Jan 2024 - Mar 2024",
    tasks: [
      "Built responsive page layouts using Flexbox, styled and animated them with BEM methodology and SASS for better code structure and scalability.",
      "Created page skeletons and structure using semantic HTML, focusing on accessibility, SEO optimization, and clean component hierarchy.",
      "Worked on hover effects, CSS transitions, and mobile-first responsiveness to ensure smooth and adaptive user experience.",
    ],
  },
];
