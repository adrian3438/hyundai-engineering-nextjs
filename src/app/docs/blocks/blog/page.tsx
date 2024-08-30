import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/blog";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Blog() {
  return (
    <Fragment>
      <hr className="border-0 mb-0" />
      <Block id={1}>
        <All.Blog1 />
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Blog2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Blog3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n17 mb-md-n20">
          <All.Blog4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="mb-12">
          <All.Blog5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pb-13 pb-md-15">
          <All.Blog6 />
        </div>
      </Block>
    </Fragment>
  );
}
