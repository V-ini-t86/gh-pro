import React from "react";
import "./Team.css";
const team = [
  {
    img: "img/01.jpg",
    name: "John",
    job: "Director",
  },
  {
    img: "img/11.jpg",
    name: "Ritesh Kumar",
    job: "Machine Learning(TA)",
  },
  {
    img: "img/13.jpg",
    name: "Vikram Bharadwaj",
    job: "Python Data Structures(TA)",
  },
  {
    img: "img/14.jpg",
    name: "Rohit Bajaj",
    job: "Python Data Structures (TA)",
  },
];
function Team() {
  return (
    <div id="team" className="text-center mt-5 my-4">
      <div className="container">
        <div className="text-center">
          <h2>Meet the Team</h2>
        </div>
        {/* <div id="row" classNameName="row col-rows-1">
          {team
            ? team.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  classNameName="col-md-3 col-sm-6 my-4 team"
                >
                  <div classNameName="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." classNameName="team-img" />
                    <div classNameName="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
        <div className="container mb-5 ">
          <div className="d-flex justify-content-lg-center flex-wrap justify-content-md-start justify-content-sm-center justify-content-center">
            <div className="col-md-4">
              <div className="card">
                {" "}
                <img
                  src="https://i.imgur.com/iNFaRXx.jpg"
                  className="img-fluid rounded"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="info info-yellow">
                    {" "}
                    <span className="user-icons text-dark fw-bolder fs-2">
                      1
                    </span>
                    <div className="user-profile d-flex flex-row">
                      <div className="d-flex flex-column mr-4">
                        {" "}
                        <span className="name fw-bold">
                          Kshitiz Badola
                        </span>{" "}
                        <small className="designation">Founder, CEO </small>{" "}
                        <small className="designation">
                          Head Of Data Science Dept.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {" "}
                <img
                  src="https://i.imgur.com/4IqYoqv.jpg"
                  className="img-fluid rounded"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="info info-green">
                    {" "}
                    <span className="user-icons text-dark fw-bolder fs-2">
                      2
                    </span>
                    <div className="user-profile d-flex flex-row">
                      <div className="d-flex flex-column mr-3">
                        {" "}
                        <span className="name fw-bold">Vinit Joshi</span>{" "}
                        <small className="designation">Managing Director</small>{" "}
                        <small className="designation">Web Developer</small>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {" "}
                <img
                  src="img/p-img.png"
                  className="img-fluid rounded"
                  style={{ width: "300px", height: "400px" }}
                  alt="a"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="info info-blue">
                    {" "}
                    <span className="user-icons text-dark fw-bolder fs-2">
                      3
                    </span>
                    <div className="user-profile d-flex flex-row">
                      <div className="d-flex flex-column mr-4">
                        {" "}
                        <span className="name fw-bold">Shruti Tiwari</span>{" "}
                        <small className="designation">Data Science</small>{" "}
                        <small className="designation">Data Analyst</small>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {" "}
                <img
                  src="img/wp.jpg"
                  className="img-fluid rounded"
                  style={{ width: "300px", height: "400px" }}
                  alt="img"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="info info-green">
                    {" "}
                    <span className="user-icons text-dark fw-bolder fs-2">
                      4
                    </span>
                    <div className="user-profile d-flex flex-row">
                      <div className="d-flex flex-column mr-4">
                        {" "}
                        <span className="name fw-bold">Mridul Sharma</span>{" "}
                        <small className="designation">Data Science</small>{" "}
                        <small className="designation">
                          Cognitive Computing
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {" "}
                <img
                  src="img/hh.webp"
                  style={{ width: "300px", height: "400px" }}
                  className="img-fluid rounded"
                  alt="i"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="info info-yellow">
                    {" "}
                    <span className="user-icons text-dark fw-bolder fs-2">
                      5
                    </span>
                    <div className="user-profile d-flex flex-row">
                      <div className="d-flex flex-column mr-4">
                        {" "}
                        <span className="name fw-bold">Sam Disauga</span>{" "}
                        <small className="designation">Project Manager</small>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
