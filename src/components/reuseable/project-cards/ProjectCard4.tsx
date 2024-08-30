import Link from "next/link";
import Image from "next/image";

// ==============================================================
interface ProjectCard4Props {
  id: number;
  image: string;
  title: string;
  color: string;
  category: string;
}
// ==============================================================

export default function ProjectCard4({ image, title, color, category }: ProjectCard4Props) {
  return (
    <div className="card shadow-lg">
      <figure className="card-img-top" title="Click to see the project">
        <Link href="#">
          <Image src={image} width={1300} height={1132} alt="" />
        </Link>
      </figure>

      <div className="card-body p-7">
        <div className="post-header">
          <div className={`post-category text-line mb-2 text-${color}`}>{category}</div>
          <h3 className="mb-0">{title}</h3>
        </div>
      </div>
    </div>
  );
}
