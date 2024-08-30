import NextLink from "components/reuseable/links/NextLink";
// GLOBAL CUSTOM COMPONENTS
import { testimonials } from "data/demo-30";

const style = {
  top: "50%",
  left: "50%",
  width: "130%",
  height: "auto",
  transform: "translate(-50%,-50%)"
};

export default function Testimonial24() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-15 mb-md-17">
      <div className="col-lg-7 position-relative">
        <div className="position-absolute" style={style}>
          <img className="w-100" src="/img/photos/blurry.png" alt="" />
        </div>

        <div className="row gx-md-5 gy-5">
          {testimonials.map(({ className, id, designation, name, review }) => (
            <div className={className} key={id}>
              <div className="card shadow-xl rounded-xl">
                <div className="card-body">
                  <blockquote className="icon mb-0">
                    <p>“{review}”</p>
                    <div className="blockquote-details">
                      <div className="info p-0">
                        <h5 className="mb-1">{name}</h5>
                        <p className="mb-0">{designation}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="display-2 mb-2 mt-lg-n6">Our Community</h2>
        <p className="lead fs-lg mb-4">
          Customer satisfaction is our major goal. See what our clients are saying about our services.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta
          felis euismod.
        </p>

        <NextLink href="#" title="All Testimonials" className="btn btn-primary rounded-xl mt-3" />
      </div>
    </div>
  );
}
