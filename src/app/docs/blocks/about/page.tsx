import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/about";

export default function About() {
  return (
    <Fragment>
      <Block id={1} className="pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
        <All.About1 />
      </Block>

      <Block id={2} className="pb-13 pb-md-15 mb-n14 mb-md-n17 mb-lg-n19">
        <All.About2 />
      </Block>

      <Block id={3} className="pb-13 pb-md-15">
        <All.About3 />
      </Block>

      <Block id={4} className="pb-13 pb-md-15">
        <All.About4 />
      </Block>

      <Block id={5} className="pb-13 pb-md-15">
        <div className="row">
          <All.About5 />
        </div>
      </Block>

      <Block id={6} className="pb-13 pb-md-15 mb-n14 mb-md-n17">
        <All.About6 />
      </Block>

      <Block id={7} className="pb-13 pb-md-15 mb-n15 mb-md-n18">
        <All.About7 />
      </Block>

      <Block id={8} className="pb-13 pb-md-15 mb-n15 mb-md-n18">
        <All.About8 />
      </Block>

      <Block id={9} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About9 />
      </Block>

      <Block id={10} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About10 />
      </Block>

      <Block id={11} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About11 />
      </Block>

      <Block id={12} className="pb-13 pb-md-15 mb-n14 mb-md-n17">
        <All.About12 />
      </Block>

      <Block id={13} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About13 />
      </Block>

      <Block id={14} className="pb-13 pb-md-15">
        <All.About14 />
      </Block>

      <Block id={15} className="pb-13 pb-md-15">
        <All.About15 />
      </Block>

      <Block id={16} className="pb-13 pb-md-15 mb-n14 mb-md-n16">
        <All.About16 />
      </Block>

      <Block id={17} className="pb-13 pb-md-15 mb-n15 mb-md-n18">
        <All.About17 />
      </Block>

      <Block id={18} className="pb-13 pb-md-15">
        <All.About18 />
      </Block>

      <Block id={19} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About19 />
      </Block>

      <Block id={20} container={false} className="container pb-13 pb-md-15">
        <All.About20 />
      </Block>

      <Block id={21} className="pb-13 pb-md-15 mb-n15 mb-md-n17">
        <All.About21 />
      </Block>

      <Block id={22} className="pb-13 pb-md-15" container={false}>
        <All.About22 />
      </Block>

      <Block id={23} className="pb-13 pb-md-15">
        <All.About23 />
      </Block>

      <Block id={24} container={false}>
        <All.About24 />
      </Block>

      <Block id={25} className="pb-n14 pb-md-n16 pb-13 pb-md-15" container={false}>
        <All.About25 />
      </Block>

      <Block id={26} className="pb-13 pb-md-15">
        <All.About26 />
      </Block>

      <Block id={27} className="pb-13 pb-md-15">
        <All.About28 />
      </Block>

      <Block id={28} className="pb-n12 pb-md-n14">
        <All.About28 />
      </Block>
    </Fragment>
  );
}
