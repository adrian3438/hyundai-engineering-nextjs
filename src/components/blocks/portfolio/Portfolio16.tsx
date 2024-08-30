import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function Portfolio16() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-10 col-xxl-8 mx-auto mb-12">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 className="display-2 ls-sm">
            Check out some of our{" "}
            <span className="underline-3 style-1 primary">
              <em>awesome</em>
            </span>{" "}
            projects with creative ideas and great design.
          </h3>
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-15 mb-md-17">
        <div className="col-lg-7">
          <div className="card bg-soft-grape">
            <div className="card-body px-9 py-0 overflow-hidden">
              <div className="row gx-4 gx-md-9">
                <div className="col-6">
                  <figure className="mt-9">
                    <Link href="#">
                      <img
                        alt="demo"
                        src="/img/demos/d18-1.jpg"
                        className="shadow-lg rounded-top"
                        srcSet="/img/demos/d18-1@2x.jpg 2x"
                      />
                    </Link>
                  </figure>
                </div>

                <div className="col-6">
                  <figure>
                    <Link href="#">
                      <img
                        alt="demo"
                        src="/img/demos/d18-2.jpg"
                        srcSet="/img/demos/d18-2@2x.jpg 2x"
                        className="shadow-lg rounded-bottom"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ms-auto">
          <h3 className="h1 post-title ls-sm mb-2">Wiretree Network Company</h3>

          <div className="post-category text-muted mb-4">
            <span>Dashboard</span>, <span>Web Development</span>
          </div>

          <p className="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>

          <NextLink title="See Project" href="#" className="btn btn-grape rounded" />
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-15 mb-md-17">
        <div className="col-lg-7 order-lg-2">
          <div className="card bg-soft-primary">
            <div className="card-body p-11 overflow-hidden">
              <figure>
                <Link href="#">
                  <img src="/img/photos/f2.png" srcSet="/img/photos/f2@2x.png 2x" alt="" />
                </Link>
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-4 me-auto">
          <h3 className="h1 post-title ls-sm mb-2">Alphine Finance</h3>

          <div className="post-category text-muted mb-4">
            <span>Branding</span>, <span>Web Design</span>
          </div>

          <p className="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>

          <NextLink title="See Project" href="#" className="btn btn-primary rounded" />
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-15 mb-md-17">
        <div className="col-lg-7">
          <div className="card bg-soft-violet">
            <div className="card-body p-11 pb-0 overflow-hidden">
              <figure>
                <Link href="#">
                  <img src="/img/photos/f1.png" srcSet="/img/photos/f1@2x.png 2x" alt="" />
                </Link>
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ms-auto">
          <h3 className="h1 post-title ls-sm mb-2">Skybox Landing Pages</h3>

          <div className="post-category text-muted mb-4">
            <span>Logo</span>, <span>Web Design</span>
          </div>

          <p className="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>

          <NextLink title="See Project" href="#" className="btn btn-violet rounded" />
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-17 mb-md-19">
        <div className="col-lg-7 order-lg-2">
          <div className="card bg-soft-red">
            <div className="card-body p-11 pb-0 overflow-hidden">
              <figure>
                <Link href="#">
                  <img src="/img/photos/f4.png" srcSet="/img/photos/f4@2x.png 2x" alt="" />
                </Link>
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-4 me-auto">
          <h3 className="h1 post-title ls-sm mb-2">Nutshell Application</h3>
          <div className="post-category text-muted mb-4">
            <span>App Design</span>, <span>Branding</span>
          </div>

          <p className="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>

          <NextLink title="See Project" href="#" className="btn btn-red rounded" />
        </div>
      </div>
    </Fragment>
  );
}
