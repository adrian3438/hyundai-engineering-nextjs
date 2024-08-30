import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/testimonial";

export default function Testimonials() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mt-md-23 mb-n16 mb-md-n18">
          <All.Testimonial2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14">
          <All.Testimonial3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Testimonial4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14">
          <All.Testimonial7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Testimonial9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15 mt-md-25">
          <All.Testimonial10 />
        </div>
      </Block>

      {/* <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial11 />
        </div>
      </Block> */}

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mt-md-22 mb-n14 mb-md-n18">
          <All.Testimonial12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mt-md-22 mb-n14 mb-md-n17">
          <All.Testimonial14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mb-n18">
          <All.Testimonial15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-21 mt-md-23">
          <All.Testimonial16 />
        </div>
      </Block>

      <Block id={17}>
        <All.Testimonial17 />
      </Block>

      <Block id={18}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial18 />
        </div>
      </Block>

      <Block id={19}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial19 />
        </div>
      </Block>

      <Block id={20}>
        <div className="container pt-13 pt-md-15">
          <All.Testimonial20 />
        </div>
      </Block>

      <Block id={21}>
        <div className="container pt-13 pt-md-15">
          <All.Testimonial21 />
        </div>
      </Block>
    </Fragment>
  );
}
