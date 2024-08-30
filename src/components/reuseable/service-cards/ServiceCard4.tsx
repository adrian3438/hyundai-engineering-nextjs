import { ReactElement } from "react";

// ==================================================================================
interface ServiceCardProps {
  title: string;
  cardColor: string;
  Icon: ReactElement;
  columnClass: string;
  description: string;
}
// ==================================================================================

export default function ServiceCard4({
  Icon,
  title,
  cardColor,
  columnClass,
  description
}: ServiceCardProps) {
  return (
    <div className={columnClass}>
      <div className={`card ${cardColor}`}>
        <div className="card-body">
          {Icon}
          <h4>{title}</h4>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
