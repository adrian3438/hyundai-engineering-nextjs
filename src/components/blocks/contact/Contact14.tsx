export default function Contact14() {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row gx-md-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <img
              alt=""
              src="./assets/img/icons/solid/email-2.svg"
              className="svg-inject icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
            />

            <h2 className="display-3 mb-3 pe-xl-14 pe-xxl-16">
              If you like what you see, <em>let's work</em> together.
            </h2>

            <p className="lead fs-lg pe-xxl-12 mb-0">
              Have any questions? Reach out to me from this contact form and I will get back to you shortly.
            </p>
          </div>

          <div className="col-lg-6">
            <form className="contact-form needs-validation">
              <div className="messages" />

              <div className="row gx-4">
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      required
                      type="text"
                      name="name"
                      id="form_name"
                      placeholder="Jane"
                      className="form-control border-0"
                      data-error="First Name is required."
                    />

                    <label htmlFor="form_name">Name *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please enter your name. </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      required
                      type="email"
                      name="email"
                      id="form_email"
                      className="form-control border-0"
                      placeholder="jane.doe@example.com"
                      data-error="Valid email is required."
                    />
                    <label htmlFor="form_email">Email *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please provide a valid email address. </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating mb-4">
                    <textarea
                      required
                      name="message"
                      id="form_message"
                      placeholder="Your message"
                      className="form-control border-0 h-20"
                    />

                    <label htmlFor="form_message">Message *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please enter your messsage. </div>
                  </div>
                </div>

                <div className="col-12">
                  <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
