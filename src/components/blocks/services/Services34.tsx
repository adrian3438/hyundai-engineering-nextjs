import { services } from "data/demo-32";

export default function Services34() {
  return (
    <section className="wrapper bg-dark text-inverse">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-white mb-3">Our Services</h2>
            <h3 className="display-3 text-white mb-10">
              The full service we are offering is specifically designed to meet your business needs.
            </h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-9">
          {services.map(({ description, id, image, title }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <div className="d-flex flex-row">
                <div>
                  <img src={image} className="w-13 me-5" alt="" />
                </div>

                <div>
                  <h3 className="mb-2 text-white">{title}</h3>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
