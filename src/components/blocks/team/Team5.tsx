import { TeamCard3 } from "components/reuseable/team-cards";
// CUSTOM DATA
import { teams } from "data/demo-8";

export default function Team5() {
  return (
    <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-16 mb-md-19">
      {teams.map((item) => (
        <div className="col-md-6 col-lg-3" key={item.id}>
          <TeamCard3 {...item} />
        </div>
      ))}
    </div>
  );
}
