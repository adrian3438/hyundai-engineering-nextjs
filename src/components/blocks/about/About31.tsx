import Safe from "icons/solid/Safe";
import Share from "icons/solid-mono/Share";
import Puzzle from "icons/solid-mono/Puzzle";
import PenTool from "icons/solid-duo/PenTool";
import Devices from "icons/solid-mono/Devices";
import GlobeTwo from "icons/solid-mono/GlobeTwo";

export default function About31() {
  return (
    <div className="container py-15 py-md-17">
      <div className="row">
        <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="display-2 mb-4">What makes us different?</h2>
          <p className="lead fs-lg mb-11">
            Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non
            magna.
          </p>
        </div>
      </div>

      <div className="row gx-lg-0 gy-10 align-items-center mb-15 mb-md-17">
        <Box className="col-lg-7 position-relative" image="mi1" />

        <div className="col-lg-4 ms-auto">
          <h2 className="display-5 mb-2 mt-xxl-n10">Design</h2>
          <p className="mb-8">Maecenas sed diam eget risus varius blandit sit amet non magna justo sit amet risus.</p>

          <ListItem Icon={Puzzle} title="UI/UX Design" />
          <ListItem Icon={PenTool} title="Design System" />
          <ListItem last Icon={Share} title="Digital Branding" />
        </div>
      </div>

      <div className="row gx-lg-0 gy-10 align-items-center">
        <Box image="mi2" className="col-lg-7 position-relative order-lg-2" />

        <div className="col-lg-4 me-auto">
          <h2 className="display-5 mb-2 mt-xxl-n10">Development</h2>
          <p className="mb-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh fermentum.</p>

          <ListItem Icon={Devices} title="Responsive Website" />
          <ListItem Icon={Safe} title="Backup and Updates" />
          <ListItem last Icon={GlobeTwo} title="SEO Optimization" />
        </div>
      </div>
    </div>
  );
}

const style = {
  top: "50%",
  zIndex: -1,
  left: "50%",
  width: "140%",
  height: "auto",
  transform: "translate(-50%,-50%)"
};

// ==============================================================
type ListItemProps = { Icon: any; title: string; last?: boolean };
// ==============================================================

const ListItem = ({ Icon, title, last }: ListItemProps) => {
  return (
    <div className={last ? "d-flex flex-row" : "d-flex flex-row mb-6"}>
      <div>
        <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
          <Icon className="solid-duo text-grape-fuchsia" />
        </div>
      </div>

      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.</p>
      </div>
    </div>
  );
};

const Box = ({ image, className }: { image: string; className: string }) => {
  return (
    <div className={className}>
      <div className="position-absolute" style={style}>
        <img className="w-100" src="/img/photos/blurry.png" alt="" />
      </div>

      <figure>
        <img src={`/img/photos/${image}.png`} srcSet={`/img/photos/${image}@2x.png 2x`} alt="" />
      </figure>
    </div>
  );
};
