import React from "react";

export default function Testimonials() {
  const l = [
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "MS Dhoni",
    },
  ];
  return (
    <div className="container col-md-8">
      <h1
        className="bg-light"
        style={{
          textAlign: "center",
          padding: "0.5rem",
          boxShadow: "5px 5px 5px gray",
          borderRadius:"20px"
        }}
      >
        Testimonials
      </h1>
      <div style={{ height: "500px", overflow: "auto",marginTop:"1rem" }}>
        {l.map((ele, index) => {
          return (
            <div
              className="bg-light"
              style={{
                padding: "1rem",
                margin: "1rem",
                boxShadow: "5px 5px 5px gray",
                borderRadius:"20px"
              }}
            >
              <p style={{ textAlign: "center", fontSize: "20px" }}>
                "{ele.msg}"
              </p>
              <p style={{ textAlign: "center" }}>~ {ele.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
