import { ServiceCard1 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { services } from "data/demo-12";

export default function Services16() {
  return (
    <div className="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
      {services.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
}
