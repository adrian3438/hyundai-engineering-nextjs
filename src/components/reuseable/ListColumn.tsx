import clsx from "clsx";

// ===========================================================
interface ListColumnProps {
  list: string[][];
  rowClass?: string;
  bulletColor?: string;
}
// ===========================================================

export default function ListColumn({ list, rowClass = "", bulletColor = "primary" }: ListColumnProps) {
  return (
    <div className={"row gy-3 " + rowClass}>
      {list.map((item, i) => (
        <div className="col-xl-6" key={i}>
          <ul className={`icon-list bullet-bg bullet-soft-${bulletColor} mb-0`}>
            {item.map((li, i) => (
              <li key={li} className={clsx({ "mt-3": i !== 0 })}>
                <i className="uil uil-check" /> {li}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
