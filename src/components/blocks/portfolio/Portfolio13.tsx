"use client";

import { ProjectCard4 } from "components/reuseable/project-cards";
// GLOBAL CUSTOM HOOKS
import useTooltip from "hooks/useTooltip";
// CUSTOM DATA
import { projects } from "data/demo-28";

export default function Portfolio13() {
  useTooltip();

  return (
    <div className="grid grid-view projects-masonry mt-md-n20 mt-lg-n22 mb-20">
      <div className="row g-8 g-lg-10">
        {projects.map((item) => (
          <div key={item.id} className="project col-md-6 col-xl-4">
            <ProjectCard4 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
