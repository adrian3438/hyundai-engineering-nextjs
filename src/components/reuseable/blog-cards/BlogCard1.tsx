import Link from "next/link";
import Image from "next/image";
import NextLink from "../links/NextLink";

// ======================================================
interface BlogCard1Props {
  date: string;
  image: string;
  title: string;
  category: string;
}
// ======================================================

export default function BlogCard1({ date, image, title, category }: BlogCard1Props) {
  return (
    <article>
      <figure className="overlay overlay-1 hover-scale rounded mb-6">
        <Link href="#">
          <Image src={image} alt={title} width={560} height={350} className="w-100 h-auto" />
          <span className="bg" />
        </Link>

        <figcaption>
          <h5 className="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>

      <div className="post-header">
        <h2 className="post-title h3 mb-3">
          <NextLink title="Ligula tristique quis risus" className="link-dark" href="#" />
        </h2>
      </div>

      <div className="post-footer">
        <ul className="post-meta">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>{date}</span>
          </li>

          <li className="post-comments">
            <NextLink
              href="#"
              className="link-dark"
              title={
                <>
                  <i className="uil uil-file-alt fs-15" />
                  {category}
                </>
              }
            />
          </li>
        </ul>
      </div>
    </article>
  );
}
