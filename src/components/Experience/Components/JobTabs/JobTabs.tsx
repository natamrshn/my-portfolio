import { Job } from "@/data/experience";
import React from "react";
import "./JobTabs.scss";

interface Props {
  companies: Job[];
  selected: number;
  onSelect: (index: number) => void;
}

export const JobTabs: React.FC<Props> = ({ companies, selected, onSelect }) => (
  <div className="experience__sidebar">
    {companies.map((company, index) => (
      <button
        key={index}
        className={`experience__tab ${selected === index ? "active" : ""}`}
        onClick={() => onSelect(index)}
      >
        {company.company}
      </button>
    ))}
  </div>
);
