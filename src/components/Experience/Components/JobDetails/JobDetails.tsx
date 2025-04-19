import React from "react";
import { motion } from "framer-motion";
import { Job } from "@/data/experience";
import "./JobDetails.scss";
interface Props {
  job: Job;
}

export const JobDetails: React.FC<Props> = ({ job }) => (
  <motion.div
    className="experience__content"
    key={job.company}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    <h3 className="experience__title">{job.title}</h3>
    <a href="#" className="experience__location">
      {job.location}
    </a>
    <p className="experience__date">{job.date}</p>
    <ul className="experience__tasks">
      {job.tasks.map((task, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          - {task}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);
