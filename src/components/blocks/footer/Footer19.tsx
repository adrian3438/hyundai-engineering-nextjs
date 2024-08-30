import { PropsWithChildren } from "react";
import SocialLinks from "components/reuseable/SocialLinks";

// ==============================================================
interface WidgetProps extends PropsWithChildren {
  title: string;
}
// ==============================================================

const Widget = ({ title, children }: WidgetProps) => (
  <div className="col-md-4">
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      {children}
    </div>
  </div>
);

export default function Footer19() {
  return (
    <footer className="pt-12">
      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              {/* address widget column */}
              <Widget title="Address">
                <address>
                  Moonshine St. 14/05 <br className="d-none d-md-block" /> Light City, London, UK
                </address>
              </Widget>

              {/* phone widget column */}
              <Widget title="Phone">
                <p>
                  00 (123) 456 78 90 <br />
                  00 (987) 654 32 10
                </p>
              </Widget>

              {/* email widget column */}
              <Widget title="E-mail">
                <p>
                  <a href="mailto:sandbox@email.com" className="link-body">
                    sandbox@email.com
                  </a>{" "}
                  <br className="d-none d-md-block" />
                  <a href="mailto:help@sandbox.com" className="link-body">
                    help@sandbox.com
                  </a>
                </p>
              </Widget>
            </div>

            <p>© 2023 Sandbox. All rights reserved.</p>

            {/* social link list */}
            <SocialLinks className="nav social justify-content-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
