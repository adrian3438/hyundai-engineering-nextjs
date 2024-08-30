import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import DocLayout from "components/layouts/DocLayout";

const v11 = [
  "pages/demo-26.tsx",
  "pages/demo-27.tsx",
  "",
  "src/components/blocks/about/About27.tsx",
  "src/components/blocks/about/About28.tsx",
  "src/components/blocks/blog/Blog7.tsx",
  "src/components/blocks/call-to-action/CTA10.tsx",
  "src/components/blocks/contact/Contact13.tsx",
  "src/components/blocks/facts/Facts17.tsx",
  "src/components/blocks/faq/FAQ7.tsx",
  "src/components/blocks/footer/Footer17.tsx",
  "src/components/blocks/footer/Footer18.tsx",
  "src/components/blocks/hero/Hero26.tsx",
  "src/components/blocks/hero/Hero27.tsx",
  "src/components/blocks/pricing/Pricing9.tsx",
  "src/components/blocks/pricing/Pricing10.tsx",
  "src/components/blocks/process/Process16.tsx",
  "src/components/blocks/process/Process17.tsx",
  "src/components/blocks/services/Services28.tsx",
  "src/components/blocks/services/Services29.tsx",
  "src/components/blocks/testimonial/Testimonial20.tsx",
  "src/components/blocks/testimonial/Testimonial21.tsx",
  "",
  "src/data/demo-26.ts",
  "src/data/demo-27.ts"
];

export default function Changelog() {
  return (
    <DocLayout
      pageTitle="Changelog"
      description="Find out what is newly added, changed, fixed, improved or updated in the latest Sandbox versions.">
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">v2.0.0 - 14 February 24</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">Added Nextjs 14 App Router </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">Install / Update all project dependency</p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added <mark>VideoPlyr</mark> and <mark>CountUp</mark> reusable components
                </p>
              </li>
            </ul>

            <a className="collapse-link collapsed" data-bs-toggle="collapse" href="#collapse-15">
              Changed files / folders
            </a>

            <div id="collapse-15" className="accordion-collapse collapse">
              <ul className="list-unstyled mt-2 mb-0">
                <li>
                  <code className="folder">
                    <strong>src/app</strong>
                  </code>
                </li>

                <li>
                  <code className="folder">
                    <strong>src/theme</strong>
                  </code>
                </li>

                <li>
                  <code className="folder">
                    <strong>src/hooks</strong>
                  </code>
                </li>

                <li>
                  <code className="folder">
                    <strong>src/components</strong>
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">v1.2.0 - 15 March 23</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  7 new demos:{" "}
                  {[28, 29, 30, 31, 32, 33, 34].map((item) => (
                    <a href={`/demo-${item}`} className="external mt-n1" target="_blank" key={item}>
                      Demo {item}
                    </a>
                  ))}
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">Install / Update all project dependency</p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">Added JavaScript version</p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added a new font option: Space Grotesk.{" "}
                  {[28, 29, 30].map((item) => (
                    <a href={`/demo-${item}`} className="external mt-n1" target="_blank" key={item}>
                      Demo {item}
                    </a>
                  ))}
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added a new SVG icon mode:{" "}
                  <a href="/docs/styleguide/icons-svg" className="internal mt-n1">
                    Solid
                  </a>
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added{" "}
                  <Link href="/docs/elements/shapes#snippet-4" className="internal mt-n1">
                    SVG doodles
                  </Link>
                  <a href="/demo-29" className="external mt-n1" target="_blank">
                    Demo 29
                  </a>
                  <a href="/demo-30" className="external mt-n1" target="_blank">
                    Demo 30
                  </a>
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Gradient option for background.{" "}
                  <a href="/demo-28" className="external mt-n1" target="_blank">
                    Demo 28
                  </a>
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added a ticker option for Swiper.{" "}
                  <a href="/demo-30" className="external mt-n1" target="_blank">
                    Demo 30
                  </a>
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added a timeline feature{" "}
                  <a href="/demo-33" className="external mt-n1" target="_blank">
                    Demo 33
                  </a>
                </p>
              </li>

              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>
                <p className="mb-0">
                  Added a new shadow option: shadow-xl{" "}
                  <Link href="/docs/elements/shadows" className="internal mt-n1">
                    Shadows
                  </Link>
                </p>
              </li>
            </ul>

            <a className="collapse-link collapsed" data-bs-toggle="collapse" href="#collapse-15">
              Changed files
            </a>

            <div id="collapse-15" className="accordion-collapse collapse">
              <ul className="list-unstyled mt-2 mb-0">
                <li>
                  <code className="file">pages/index</code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-28</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-29</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-30</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-31</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-32</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-33</strong>
                  </code>
                </li>
                <li>
                  <code className="file">
                    <strong>pages/demo-34</strong>
                  </code>
                </li>

                <li>
                  <code className="file">src/assets/scss/_variables.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_background.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_buttons.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_carousel.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_colors.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_icons.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_nav.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_navbar.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_player.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_process.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_reboot.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_root.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_type.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_utilities.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/theme/_wrappers.scss</code>
                </li>
                <li>
                  <code className="file">src/assets/scss/fonts/space.scss</code>
                </li>
                <li>
                  <code className="folder">src/assets/fonts/space</code>
                </li>
                <li>
                  <code className="folder">public/img</code>
                </li>
                <li>
                  <code className="folder">public/media</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-5">v1.1.0 - 5 December, 22</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="d-flex flex-row mb-2">
                <span className="badge badge-lg bg-pale-purple text-purple rounded me-2 align-self-start">New</span>{" "}
                Added Demo-26 and Demo-27
              </li>
            </ul>

            <a className="collapse-link collapsed" data-bs-toggle="collapse" href="#collapse-14" aria-expanded="false">
              Changed files
            </a>

            <div id="collapse-14" className="accordion-collapse collapse">
              <ul className="list-unstyled mt-2 mb-0">
                {v11.map((item) => {
                  if (item) {
                    return (
                      <li key={item}>
                        <code className="file">{item}</code>
                      </li>
                    );
                  }

                  return <br key={item} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-1" className="wrapper pb-16">
        <h2 className="mb-5">v1.0.0 - 1 November, 22</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li>Initial release.</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}
