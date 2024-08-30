import NextLink from "components/reuseable/links/NextLink";

// ========================================================
interface BreadcrumbProps {
  className?: string;
  data?: { id: number; title: string; url: string }[];
}
// ========================================================

const breadcrumb = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Shop", url: "/shop" }
];

export default function Breadcrumb({ data = breadcrumb, className = "" }: BreadcrumbProps) {
  return (
    <nav className="d-inline-block" aria-label="breadcrumb">
      <ol className={`breadcrumb ${className}`}>
        {data.map(({ id, title, url }, i) => {
          return data.length - 1 === i ? (
            <li key={id} className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          ) : (
            <li className="breadcrumb-item" key={id}>
              <NextLink title={title} href={url} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
