// ==============================================================
interface ProcessList2Props {
  no: string;
  title: string;
  subtitle: string;
  className?: string;
}
// ==============================================================

export default function ProcessList2({ no, title, subtitle, className = "" }: ProcessList2Props) {
  return (
    <div className="d-flex flex-row mb-6">
      <div>
        <span className={className}>
          <span className="number fs-18">{no}</span>
        </span>
      </div>

      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">{subtitle}</p>
      </div>
    </div>
  );
}
