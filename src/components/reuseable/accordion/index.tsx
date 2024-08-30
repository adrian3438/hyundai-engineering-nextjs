import clsx from "clsx";

// ==================================================
interface AccordionProps {
  no: string;
  body: string;
  heading: string;
  expand: boolean;
  type?: "plain" | "shadow-lg";
}
// ==================================================

export default function Accordion({ no, body, heading, expand, type }: AccordionProps) {
  return (
    <div className={clsx({ "card accordion-item": true, [type || ""]: true })}>
      <div className="card-header" id={`heading${no}`}>
        <button
          data-bs-toggle="collapse"
          aria-controls={`collapse${no}`}
          data-bs-target={`#collapse${no}`}
          aria-expanded={expand ? "true" : "false"}
          className={expand ? "accordion-button" : "collapsed"}>
          {heading}
        </button>
      </div>

      <div
        id={`collapse${no}`}
        aria-labelledby={`heading${no}`}
        data-bs-parent="#accordionExample"
        className={clsx({ "accordion-collapse collapse": true, show: expand })}>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}
