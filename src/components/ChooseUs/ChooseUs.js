import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  return (
    <section class="why-us mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="mt-5 py-5 text-center">Why Choose Us</h2>

            <p class="mb-5 text-center ">
              An experienced team with complete knowledge on deep learning and
              data science field is on its mission where they can find deffects
              in the final product released by any company or industry by their
              coded deep learning scipt which is using few of the machine
              learning models to encode and decode the product's failure and
              success.
            </p>
          </div>
        </div>
        <p className="text-danger fw-bold">
          **Note: We are initiating this strategy on IOT (Internet Of Things)
          products by the end of 2022 with the help of there chip data. Testings
          will begin soon.**
        </p>
        <div class="row ">
          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>01</span>
              <h4>
                <a href="#">Reliable</a>
              </h4>
              <p>
                Trust us with your project, we will not leak what you do not
                recommend.
              </p>
              <img src="/images/image-one.jpg" alt="" />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>02</span>
              <h4>
                <a href="#">Refundable</a>
              </h4>
              <p>
                Charges are refundable if you find any remarkable drwaback from
                our side.
              </p>
              <img src="/images/image-two.jpg" alt="" />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>03</span>
              <h4>
                <a href="#">Schedule Guarantee</a>
              </h4>
              <p>
                We will deliver results from your considered project in the
                decided time period only.
              </p>
              <img src="/images/image-three.jpg" alt="" />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>04</span>
              <h4>
                <a href="#">Project Guarantee</a>
              </h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                the majority have suffered alteration in some form
              </p>
              <img src="/images/image-four.jpg" alt="" />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>05</span>
              <h4>
                <a href="#">Contact support</a>
              </h4>
              <p>
                We will contact you, once you are registered with us each and
                every step will be guided from our side.
                <br />
                <br />
              </p>
              <img src="/images/image-five.jpg" alt="" />
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="box">
              <span>06</span>
              <h4>
                <a href="#">Leading</a>
              </h4>
              <p>
                We have just started this startup, and luckily we are having
                numerous kinds of projects from our clients. Also, by the end of
                year 2022 we will initiate this project in IOT products as well.
              </p>
              <img src="/images/image-six.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
