import React from "react";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 bg-black text-white text-center pt-5">
              <ul style={{ listStyleType: "none" }}>
                <h3 style={{ paddingBottom: "20px" }}>Hours of Operation</h3>
                <li>Monday - Friday : 8:00AM - 7:00PM</li>
                <li>Saturday : 10:00AM - 3:00PM</li>
                <li>Sunday : 11:00AM - 3:00PM</li>
              </ul>
            </div>
            <div className="col-md-4 bg-black text-white text-center pt-5">
              <ul style={{ listStyleType: "none" }}>
                <h3>Phone Number</h3>
                <li>404-383-0055</li>
                <br />
                <h3>Email</h3>
                <li className="pb-5">thevendingfam@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
