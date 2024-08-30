import NextLink from "components/reuseable/links/NextLink";

export default function Ads1() {
  const style = { backgroundImage: "url(/img/pattern.png)" };

  return (
    <section className="wrapper pattern-wrapper bg-image section-frame" style={style}>
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-12">
        <div className="row text-center mb-13">
          <div className="col-lg-12 mx-auto">
            <div className="mt-lg-n23 mt-xl-n21">
              <figure className="rounded-xl">
                <img src="/img/photos/about18.jpg" srcSet="/img/photos/about18@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div className="row gx-md-8 gx-lg-12 gy-6 gy-lg-0 mb-13">
          <div className="col-lg-6">
            <h1 className="display-2 mb-0 text-white">
              We are an award winning digital web design agency that strongly believes in the power of creative ideas.
            </h1>
          </div>

          <div className="col-lg-6">
            <p className="lead fs-lg mb-3 text-inverse">
              Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel
              eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus.
            </p>

            <NextLink title="Learn More" href="#" className="more link-white hover" />
          </div>
        </div>
      </div>
    </section>
  );
}
