import Link from "next/link";

export default function About29() {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
      <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
        <div className="img-mask mask-2 px-xxl-8">
          <img src="/img/photos/about28.jpg" srcSet="/img/photos/about28@2x.jpg 2x" alt="" />
        </div>
      </div>

      <div className="col-lg-6">
        <h2 className="display-3 mb-3">
          More <em>about</em> me
        </h2>

        <p className="lead fs-lg">
          I'm Julia Sandbox, a corporate brand designer based in New York City. I’m very passionate about the work that
          I do.
        </p>

        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce
          dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.
        </p>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla
          sed consectetur. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
        </p>

        <Link href="#" className="btn btn-primary rounded-pill mt-2">
          Learn More
        </Link>
      </div>
    </div>
  );
}
