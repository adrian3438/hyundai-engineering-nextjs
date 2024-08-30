"use client";

import Image from "next/image";
import NextLink from "../links/NextLink";
// GLOBAL CUSTOM HOOKS
import useLightBox from "hooks/useLightBox";

// ==============================================================================
interface ProjectCard3Props {
  link: string;
  title: string;
  image: string;
  category: string;
  fullImage: string;
}
// ==============================================================================

export default function ProjectCard3({ link, title, image, category, fullImage }: ProjectCard3Props) {
  // lighbox hook called
  useLightBox();

  return (
    <>
      <figure className="rounded mb-6">
        <Image width={410} height={440} src={image} alt={title} className="w-100 h-auto" />
        <a className="item-link" href={fullImage} data-glightbox data-gallery="projects-group">
          <i className="uil uil-focus-add" />
        </a>
      </figure>

      <div className="project-details d-flex justify-content-center flex-column">
        <div className="post-header">
          <h2 className="post-title h3">
            <NextLink href={link} title={title} className="link-dark" />
          </h2>

          <div className="post-category text-ash">{category}</div>
        </div>
      </div>
    </>
  );
}
