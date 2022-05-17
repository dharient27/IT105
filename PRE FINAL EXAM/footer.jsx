import React from "react";
const year = new Date().getFullYear();
function Footer() {
  return <footer style={{background: "yellow", color: "red"}}><p>{year}</p></footer>;
}

export default Footer;
