import { ServiceCard1 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList11 } from "data/service";

export default function Services21() {
  return (
    <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17">
      {serviceList11.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
}
