import { TeamCard1 } from "components/reuseable/team-cards";
// CUSTOM DATA
import teams from "data/team-list";

export default function Team4() {
  return (
    <div className="row grid-view gy-6 gy-xl-0">
      {teams.slice(0, 4).map((item) => (
        <div className="col-md-6 col-xl-3" key={item.id}>
          <TeamCard1 shadow {...item} />
        </div>
      ))}
    </div>
  );
}
