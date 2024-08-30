import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/footer";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Footers() {
  return (
    <Fragment>
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Footer1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pb-13 pb-md-15 mt-16 mt-md-21">
          <All.Footer2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="pb-13 pb-md-15">
          <All.Footer3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Footer4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Footer5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pb-13 pb-md-15">
          <All.Footer6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="pb-13 pb-md-15">
          <All.Footer7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="pb-13 pb-md-15">
          <All.Footer8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="pb-13 pb-md-15">
          <All.Footer9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15">
          <All.Footer10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="pt-15 pt-md-17">
          <All.Footer11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pb-13 pb-md-15">
          <All.Footer12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Footer13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Footer14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Footer15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="pb-13 pb-md-15">
          <All.Footer16 />
        </div>
      </Block>

      <Block id={17}>
        <div className="pt-10 pt-md-12 pb-13 pb-md-15">
          <All.Footer17 />
        </div>
      </Block>
    </Fragment>
  );
}
