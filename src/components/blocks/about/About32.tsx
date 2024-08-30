import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Tiles11 } from "components/elements/tiles";
import { Counter4 } from "components/reuseable/counter";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import { abouts } from "data/demo-32";

export default function About32() {
  return (
    <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        <div className="col-lg-6">
          <Tiles11 />
        </div>

        <div className="col-lg-6">
          <h2 className="fs-16 text-uppercase text-primary mb-3">Who Are We?</h2>
          <h3 className="display-3 mb-5">Company that believes in the power of creative strategy.</h3>
          <p className="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
            bibendum nulla sed.
          </p>

          <div className="row align-items-center counter-wrapper gy-6">
            <Counter4 title="Customer Satisfaction" end={99.7} suffix="%" decimals={1} />
            <Counter4 title="Revenue Growth" end={12} suffix="x" />
          </div>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
        {abouts.map(({ id, title, description }) => (
          <Card key={id} number={id} title={title} description={description} />
        ))}
      </div>

      <div className="text-center">
        <NextLink title="More Details" href="#" className="btn btn-primary" />
      </div>
    </Fragment>
  );
}

// ==========================================================================
type CardProps = { title: string; number: number; description: string };
// ==========================================================================

const Card = ({ title, number, description }: CardProps) => {
  return (
    <div className="col-lg-4">
      <div className="d-flex flex-row">
        <div>
          <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
            <span className="number fs-18">{number}</span>
          </div>
        </div>

        <div>
          <h3>{title}</h3>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
