import Link from "types/link";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// CUSTOM DATA
import { helps, learnMore } from "data/footer";

const bgImage = { backgroundImage: "url(/img/pattern.png)" };

// common links section
const widget = (list: Link[], title: string) => {
  return (
    <div className="widget">
      <h4 className="widget-title text-white mb-3">{title}</h4>
      <ul className="list-unstyled text-reset mb-0">
        {list.map(({ url, title, id }) => (
          <li key={id}>
            <NextLink href={url} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer20() {
  return (
    <footer className="wrapper pattern-wrapper bg-image section-frame" style={bgImage}>
      <div className="container pb-13 pb-md-15">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5 rounded-xl"
          style={{ backgroundImage: "url(/img/photos/bg27.jpg)" }}>
          <div className="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
            <h3 className="display-2 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white">
              We are trusted by over 5000+ clients. Join them now and grow your business.
            </h3>

            <NextLink title="Join Us" href="#" className="btn btn-lg btn-white rounded-xl mb-0 text-nowrap" />
          </div>
        </div>

        <div className="text-inverse mx-md-5 mt-n15 mt-lg-0">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="h2 mb-3 text-white">Join the Community</h3>

                <p className="mb-5">
                  Let's make something great together. We are trusted by over 5000+ clients. Join them by using our
                  services and grow your business.
                </p>
                <p className="mb-1">© 2023 Sandbox. All rights reserved.</p>

                <SocialLinks className="nav social social-white" />
              </div>
            </div>

            <div className="col-md-4 col-lg-2 offset-lg-2">{widget(helps, "Need Help?")}</div>

            <div className="col-md-4 col-lg-2">{widget(learnMore, "Learn More")}</div>

            <div className="col-md-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                <a href="mailto:first.last@email.com">info@email.com</a>
                <br /> 00 (123) 456 78 90
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
