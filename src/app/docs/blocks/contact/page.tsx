import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/contact";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Contact() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n14">
          <All.Contact4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n14">
          <All.Contact5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pb-13 pb-md-15">
          <All.Contact6 />
        </div>
      </Block>

      <Block id={7}>
        <All.Contact7 />
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="pb-13 pb-md-15">
          <All.Contact9 />
        </div>
      </Block>

      <Block id={10}>
        <All.Contact10 />
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n18">
          <All.Contact11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pb-13 pb-md-15">
          <All.Contact12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact13 />
        </div>
      </Block>
    </Fragment>
  );
}
