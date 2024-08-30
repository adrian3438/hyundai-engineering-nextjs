import { ServiceCard3 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { processList } from "data/demo-28";

export default function Process18() {
  return (
    <div className="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
      <div className="col-lg-4">
        <h2 className="display-3 mb-3">
          My <em>working</em> process
        </h2>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus. Aenean
          eu leo quam.
        </p>
      </div>

      <div className="col-lg-8">
        <div className="row gy-8 gx-md-8 gx-xl-12">
          {processList.map(({ Icon, ...item }) => (
            <div className="col-md-6" key={item.id}>
              <ServiceCard3
                title={item.title}
                description={item.description}
                Icon={<Icon className="icon-svg-sm solid-duo text-purple-aqua mt-1 me-4" />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
