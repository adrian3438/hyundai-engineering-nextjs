import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import { CTA1, CTA2, CTA3, CTA4, CTA5, CTA6, CTA7, CTA8, CTA9, CTA10 } from "components/blocks/call-to-action";

export default function CallToAction() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="pb-14 pb-md-16">
          <CTA1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="py-14 py-md-16">
          <CTA2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="py-14 py-md-16 mb-n14 mb-md-n16">
          <CTA3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="py-14 py-md-16">
          <CTA4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="py-14 py-md-16">
          <CTA5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="py-14 py-md-16">
          <CTA6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="py-14 py-md-16 mb-n14">
          <CTA7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="py-14 py-md-16 mb-n14">
          <CTA8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="py-14 py-md-16">
          <CTA9 />
        </div>
      </Block>

      <Block id={10}>
        <CTA10 />
      </Block>
    </Fragment>
  );
}
