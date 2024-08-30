import NextLink from "components/reuseable/links/NextLink";

export default function CTA12() {
  return (
    <div className="row">
      <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
        <h2 className="fs-16 text-uppercase text-white mb-3">Join Our Community</h2>

        <h3 className="display-3 text-white mb-6">
          We are{" "}
          <span className="underline-2 underline-gradient-6">
            <em>trusted</em>
          </span>{" "}
          by over 5000+ clients. Join them now and grow your business.
        </h3>

        <NextLink title="Join Us" href="#" className="btn btn-white" />
      </div>
    </div>
  );
}
