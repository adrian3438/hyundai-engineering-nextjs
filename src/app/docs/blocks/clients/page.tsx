import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import { Clients1, Clients2, Clients3, Clients4, Clients5 } from "components/blocks/clients";

export default function Clients() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <Clients1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n13 mb-md-n17">
          <Clients2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n19">
          <Clients3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="pb-13 pb-md-15">
          <Clients4 />
        </div>
      </Block>

      <Block id={5}>
        <Clients5 />
      </Block>
    </Fragment>
  );
}
