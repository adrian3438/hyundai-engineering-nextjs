import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/pricing";

export default function Pricing() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Pricing1 />
        </div>
      </Block>

      {/* <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing2 />
        </div>
      </Block> */}

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n18">
          <All.Pricing3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Pricing4 />
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Pricing5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n18">
          <All.Pricing7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing8 />
        </div>
      </Block>

      <Block id={10}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing10 />
        </div>
      </Block>
    </Fragment>
  );
}
