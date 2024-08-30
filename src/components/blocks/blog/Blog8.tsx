import { BlogCard4 } from "components/reuseable/blog-cards";
// CUSTOM DATA
import { blogs } from "data/demo-32";

export default function Blog8() {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Case Studies</h2>
            <h3 className="display-3 mb-10">
              Check out some of our awesome projects with creative ideas and great design.
            </h3>
          </div>
        </div>

        <div className="row grid-view gy-6">
          {blogs.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <BlogCard4 className="card shadow-lg" {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
