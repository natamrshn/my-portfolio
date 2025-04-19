"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobs } from "@/data/experience";
import "./Experience.scss";
import { JobTabs } from "./Components/JobTabs/JobTabs";
import { JobDetails } from "./Components/JobDetails/JobDetails";

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="experience">
      <JobTabs selected={selected} onSelect={setSelected} companies={jobs} />

      <div className="experience__content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="experience__content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <JobDetails job={jobs[selected]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
