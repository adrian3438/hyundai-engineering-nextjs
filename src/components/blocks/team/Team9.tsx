import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
// IMAGES
import image from "../../../../public/img/photos/bg12.jpg";

export default function Team9() {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-15 pt-md-17">
        <div className="row">
          <div className="col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Our Team</h2>

            <h3 className="display-3 px-lg-18 px-xl-12 px-xxl-15 mb-6">
              Save your time and money by choosing our professional team.
            </h3>

            <p className="mb-8 px-lg-10 px-xl-0">
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>

            <NextLink title="Read More" href="#" className="btn btn-primary" />
          </div>
        </div>
      </div>

      <figure>
        <Image src={image} placeholder="blur" alt="Team" />
      </figure>
    </section>
  );
}
