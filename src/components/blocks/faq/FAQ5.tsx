import { faq } from "data/demo-11";

export default function FAQ5() {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10">
      {faq.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="d-flex flex-row">
            <div>
              <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                <i className="uil uil-comment-exclamation" />
              </span>
            </div>
            <div>
              <h4>{item.title}</h4>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
