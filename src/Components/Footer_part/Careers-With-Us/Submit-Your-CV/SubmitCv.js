import { Card, CardContent, Button } from "@material-ui/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SubmitCv = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Submit success")
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center mt-5">
            Ready to take your next step? Send us your CV / Resume and let one
            of our consultants help you find your next career opportunity...
          </h2>
          <Card>
            <CardContent>
              <form onSubmit={formSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label
                        for="validationDefault01"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault01"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        for="validationDefault01"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Email Address:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="validationDefault01"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        for="exampleFormControlFile1"
                        style={{ fontWeight: "bold" }}
                      >
                        CV Upload: (.doc/.docx/.pdf)
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label
                        for="validationDefault01"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault01"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        for="validationDefault01"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault01"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        for="validationDefault04"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Where Did You Hear About Us?
                      </label>
                      <select
                        className="form-select"
                        id="validationDefault04"
                        required
                        style={{ width: "100%" }}
                      >
                        <option selected disabled value="">
                          Select an option
                        </option>
                        <option>Google</option>
                        <option>Facebook</option>
                        <option>Linkedln</option>
                        <option>Referred by a friend</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label
                    for="validationDefault01"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Message
                  </label>
                  <small className="form-text text-muted">
                    Tell us why you are looking for a new position? What is your
                    ideal role and company? When will you be ready to start in
                    your new role? What are your salary expectations?
                  </small>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mt-3">
                  <p>
                    Please include as much detail in your messages so that we
                    can deal with your request more quickly and efficiently.
                    Your CV and information will be kept confidential and only
                    submitted to our clients with your permission.
                  </p>
                </div>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I confirm I have read and understand COREcruitment's
                  </label>
                </div>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Yes, I'd like to receive more information on COREcruitment's
                    vacancies, events and promotions via email
                  </label>
                </div>
                <div className="mt-5 text-center">
                <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ padding: "10px 50px", fontSize: "17px" }}
                      >
                       
                        Send Us Your CV/Resume
                        <span className="ml-2">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Button>
                                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitCv;
