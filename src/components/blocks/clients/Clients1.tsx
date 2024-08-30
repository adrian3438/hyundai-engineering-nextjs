// CUSTOM DATA
import { clientList } from "data/client";

export default function Clients1() {
  return (
    <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
      {clientList.map((item) => (
        <div className="col-4 col-md-2" key={item}>
          <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
            <img src={item} alt="client" />
          </figure>
        </div>
      ))}
    </div>
  );
}
