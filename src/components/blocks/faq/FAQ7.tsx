import data from "data/demo-27";

export default function FAQ7() {
  return (
    <div className="row">
      <div className="col-xl-11 mx-auto">
        <div className="row gx-md-8 gx-xl-12 gy-10 px-lg-5">
          {data.faqList.map(({ id, title, description, Icon }) => (
            <div className="col-lg-6" key={id}>
              <div className="d-flex flex-row">
                <div>
                  <Icon />
                </div>

                <div>
                  <h4 className="fs-20 ls-sm">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
