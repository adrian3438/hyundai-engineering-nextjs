import { PropsWithChildren } from "react";
// GLOBAL CUSTOM COMPONENTS
import CodeHighlight from "components/reuseable/CodeHighlight";

interface BlockProps extends PropsWithChildren {
  id: number;
}

export default function Block({ id, children }: BlockProps) {
  // markup
  const markup = `import { CTA${id} } from 'components/blocks/call-to-action';

   <CTA${id} />
   `;

  return (
    <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
      {children}

      <div className="container pb-15 pb-md-17">
        <div className="card">
          <div className="card-footer border-0 position-relative" style={{ zIndex: 3 }}>
            <a
              className="collapse-link collapsed stretched-link"
              data-bs-toggle="collapse"
              href={`#collapse-snippet-${id}`}>
              View example's code
            </a>
          </div>

          <div id={`collapse-snippet-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
