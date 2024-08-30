import NextLink from "../links/NextLink";

// ==================================================================================
interface ServiceCardProps {
  url: string;
  icon: string;
  title: string;
  className?: string;
  description: string;
}
// ==================================================================================

export default function ServiceCard5({
  url,
  icon,
  title,
  description,
  className = "card shadow-lg mb-md-6 mt-lg-6"
}: ServiceCardProps) {
  return (
    <div className={className}>
      <div className="card-body">
        <div className="icon btn btn-circle btn-lg btn-soft-purple pe-none mb-3">
          <i className={`uil ${icon}`} />
        </div>

        <h4>{title}</h4>
        <p className="mb-2">{description}</p>
        <NextLink title="Learn More" href={url} className="more hover link-purple" />
      </div>
    </div>
  );
}
