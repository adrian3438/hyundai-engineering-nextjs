import { PropsWithChildren } from "react";
import Price from "./Price";
import NextLink from "../links/NextLink";

const ListItem = ({ children }: PropsWithChildren) => (
  <li>
    <i className="uil uil-check fs-21" />
    <span>{children}</span>
  </li>
);

// ================================================================
interface PricingCard3Props {
  api: number;
  storage: number;
  projects: number;
  planName: string;
  yearlyPrice: number;
  monthlyPrice: number;
  activeYearly: boolean;
}
// ================================================================

export default function PricingCard3(props: PricingCard3Props) {
  const { activeYearly, planName, yearlyPrice, monthlyPrice, api, storage, projects } = props;

  const yearClasses = activeYearly ? "price-show" : "price-hide price-hidden";
  const monthClasses = !activeYearly ? "price-show" : "price-hide price-hidden";

  return (
    <div className="pricing card shadow-xl rounded-xl">
      <div className="card-body pb-12">
        <div className="prices text-dark">
          <Price duration="mo" value={monthlyPrice} classes={monthClasses} />
          <Price duration="yr" value={yearlyPrice} classes={yearClasses} />
        </div>

        <h4 className="card-title mt-2">{planName}</h4>

        <ul className="icon-list bullet-primary mt-7 mb-8">
          <ListItem>
            <strong>{projects}</strong> Projects
          </ListItem>

          <ListItem>
            <strong>{api}K</strong> API Access
          </ListItem>

          <ListItem>
            <strong>{storage}MB</strong> Storage
          </ListItem>

          <ListItem>
            Weekly <strong>Reports</strong>
          </ListItem>

          <ListItem>
            7/24 <strong>Support</strong>
          </ListItem>
        </ul>

        <NextLink title="Choose Plan" href="#" className="btn btn-primary rounded-xl" />
      </div>
    </div>
  );
}
