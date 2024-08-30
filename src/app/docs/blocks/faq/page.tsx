import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/faq";

export default function Faq() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pb-13 pb-md-15">
          <All.FAQ2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ3 />
        </div>
      </Block>

      {/* <Block id={4}>
        <div className="container pt-18 pt-md-20">
          <All.FAQ4 />
        </div>
      </Block> */}

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ7 />
        </div>
      </Block>
    </Fragment>
  );
}
