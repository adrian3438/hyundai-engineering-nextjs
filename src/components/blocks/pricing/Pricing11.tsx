import { useState } from "react";
import Switch from "components/reuseable/Switch";
import NextLink from "components/reuseable/links/NextLink";
import { PricingCard3 } from "components/reuseable/pricing-cards";

const style = {
  top: "55%",
  left: "50%",
  width: "140%",
  height: "auto",
  transform: "translate(-50%,-50%)"
};

export default function Pricing11() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6">
      <div className="col-lg-4">
        <h2 className="display-2 mt-lg-18 mb-3">Our Pricing</h2>
        <p className="lead fs-lg mb-3">We offer great prices, premium and quality products for your business.</p>
        <p>
          Enjoy a <NextLink title="free 30-day trial" href="#" className="hover" />
          and experience the full service. No credit card required!
        </p>
        <NextLink title="See All Prices" href="#" className="btn btn-primary rounded-xl mt-2" />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Monthly</p>

          <Switch value={activeYearly} onChange={setActiveYearly} />

          <p className="mb-0 ps-3">
            Yearly <span className="text-red">(Save 30%)</span>
          </p>
        </div>

        <div className="row gy-6 position-relative mt-5">
          <div className="col-md-6">
            <div className="position-absolute pe-none" style={style}>
              <img className="w-100" src="/img/photos/blurry.png" alt="" />
            </div>

            <PricingCard3
              api={100}
              projects={5}
              storage={200}
              monthlyPrice={19}
              yearlyPrice={199}
              planName="Premium Plan"
              activeYearly={activeYearly}
            />
          </div>

          <div className="col-md-6 popular">
            <PricingCard3
              api={300}
              projects={20}
              storage={500}
              monthlyPrice={49}
              yearlyPrice={499}
              planName="Corporate Plan"
              activeYearly={activeYearly}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
