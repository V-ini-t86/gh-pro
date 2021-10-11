import React from "react";

function ComparePlans() {
  return (
    <>
      <h2 className="display-6 text-center mb-4">Compare plans</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>Easy</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Revision 1
              </th>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Revision 2
              </th>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Revision 3
              </th>
              <td></td>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Dataset(1200-1500) images
              </th>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited Dataset
              </th>
              <td></td>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Time Needed : less than 6 weeks
              </th>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Time Needed : less than 4 weeks
              </th>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Time Needed : less than 3 weeks
              </th>
              <td></td>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#check" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ComparePlans;
