// ==========================================================
type TeamCard3Props = {
  name: string;
  designation: string;
  image: { "1x": string; "2x": string };
};
// ==========================================================
export default function TeamCard3({ name, image, designation }: TeamCard3Props) {
  return (
    <div className="position-relative">
      <div
        className="shape rounded bg-soft-primary rellax d-md-block"
        style={{ zIndex: 0, width: "98%", height: "98%", right: "-0.75rem", bottom: "-0.75rem" }}
      />

      <div className="card shadow-lg">
        <figure className="card-img-top">
          <img className="img-fluid" src={image["1x"]} srcSet={image["2x"]} alt="" />
        </figure>

        <div className="card-body px-6 py-5">
          <h4 className="mb-1">{name}</h4>
          <p className="mb-0">{designation}</p>
        </div>
      </div>
    </div>
  );
}
