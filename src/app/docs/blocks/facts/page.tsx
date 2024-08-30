"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/facts";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Facts() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Facts1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-18 pt-md-20">
          <All.Facts3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Facts5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-lg-n18">
          <All.Facts6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="pb-13 pb-md-15">
          <All.Facts7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="mt-20">
          <All.Facts9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15">
          <All.Facts10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n11">
          <All.Facts11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Facts13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n11">
          <All.Facts15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts16 />
        </div>
      </Block>

      <Block id={17}>
        <div className="pb-13 pb-md-15">
          <All.Facts17 />
        </div>
      </Block>
    </Fragment>
  );
}
