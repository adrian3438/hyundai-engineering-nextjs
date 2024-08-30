import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/portfolio";

export default function Portfolios() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n17">
          <All.Portfolio1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n9 mb-md-n14">
          <All.Portfolio2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Portfolio4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Portfolio5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio6 />
        </div>
      </Block>

      {/* <Block id={7}>
        <div className="">
          <All.Portfolio7 />
        </div>
      </Block> */}

      <Block id={8}>
        <All.Portfolio8 />
      </Block>

      <Block id={9}>
        <All.Portfolio9 />
      </Block>

      <Block id={10}>
        <div className="container pb-13 pb-md-15">
          <All.Portfolio10 />
        </div>
      </Block>

      <Block id={11}>
        <All.Portfolio11 />
      </Block>

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio12 />
        </div>
      </Block>
    </Fragment>
  );
}
