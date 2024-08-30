import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/services";

export default function Features() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Services1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Services4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services5 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-6 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-6 pt-md-6 pb-13 pb-md-15 mb-n15">
          <All.Services8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
          <All.Services9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n18">
          <All.Services10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n20">
          <All.Services11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services12 />
        </div>
      </Block>

      {/* <Block id={13}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services13 />
        </div>
      </Block> */}

      <Block id={14}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-md-n15">
          <All.Services15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mt-md-21 mb-n14 mb-md-n17">
          <All.Services16 />
        </div>
      </Block>

      {/* <Block id={17}>
        <All.Services17 />
      </Block> */}

      {/* <Block id={18}>
        <All.Services18 />
      </Block> */}

      <Block id={19}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n16">
          <All.Services19 />
        </div>
      </Block>

      <Block id={20}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n17">
          <All.Services20 />
        </div>
      </Block>

      <Block id={21}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mb-n14 mb-md-n17">
          <All.Services21 />
        </div>
      </Block>

      <Block id={22}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services22 />
        </div>
      </Block>

      <Block id={23}>
        <div className="container">
          <All.Services23 />
        </div>
      </Block>

      <Block id={24}>
        <All.Services24 />
      </Block>

      <Block id={25}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services25 />
        </div>
      </Block>

      <Block id={26}>
        <All.Services26 />
      </Block>

      <Block id={27}>
        <div className="pb-13 pb-md-15">
          <All.Services27 />
        </div>
      </Block>

      <Block id={28}>
        <div className="container pt-13 pt-md-15">
          <All.Services28 />
        </div>
      </Block>

      <Block id={29}>
        <All.Services29 />
      </Block>
    </Fragment>
  );
}
