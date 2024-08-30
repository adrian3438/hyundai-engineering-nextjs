import { Fragment } from "react";
import clsx from "clsx";
// CUSTOM DATA
import data from "data/product-details-page";

export default function ProductDescription() {
  return (
    <Fragment>
      <ul className="nav nav-tabs nav-tabs-basic mt-12">
        {data.tabList.map(({ id, title }, i) => (
          <li className="nav-item" key={id}>
            <a data-bs-toggle="tab" href={id} className={clsx({ "nav-link": true, active: i === 0 })}>
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-0 mt-md-5">
        <div className="tab-pane fade show active" id="tab-1">
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed
            posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a
            pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
            ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="tab-pane fade" id="tab-2">
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>

        <div className="tab-pane fade" id="tab-3">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus
            sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur
            est at lobortis. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Nulla
            vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
