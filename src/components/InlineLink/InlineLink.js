import React from "react";
import { Email, Item } from "react-html-email";
import "./InlineLink.css";

function InlineLink({ name, message }) {
  return (
    <Email title="link">
      <Item style={{ fontSize: "2rem", textAlign: "center" }}>
        {name} Contacted Us
      </Item>
      <Item>{message}</Item>
    </Email>
  );
}

export default InlineLink;
