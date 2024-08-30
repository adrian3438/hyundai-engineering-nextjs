import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import { services } from "data/demo-30";

export default function Services32() {
  return (
    <div className="container pt-6">
      <div className="row">
        <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="display-2 mb-4">The full service we are offering</h2>
          <p className="lead fs-lg mb-11">
            Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Integer posuere ante
            venenatis.
          </p>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
        {services.map(({ id, Icon, title }) => (
          <div className="col-md-6 col-lg-3" key={id}>
            <div className="svg-bg svg-bg-lg bg-white rounded-xl shadow-xl mb-6">
              <Icon className="solid-duo text-grape-fuchsia" />
            </div>

            <h3>{title}</h3>

            <p className="mb-3">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.
            </p>

            <NextLink title="Learn More" href="#" className="more hover" />
          </div>
        ))}
      </div>
    </div>
  );
}
