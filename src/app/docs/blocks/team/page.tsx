import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/team";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Teams() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="mt-n8 mt-lg-23 mt-xl-25">
          <All.Team1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n17 mb-xl-n20">
          <All.Team2 />
        </div>
      </Block>

      <Block id={3}>
        <All.Team3 />
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Team4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n19">
          <All.Team5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-md-n20">
          <All.Team6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Team7 />
        </div>
      </Block>
    </Fragment>
  );
}
