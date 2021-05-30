import React from "react";
import { BsChevronRight } from "react-icons/bs";

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li
      key={link.id}
      className=" card  ml-auto mr-auto mt-auto mb-3  px-3 bg-secondary "
      style={{ maxWidth: "250px", borderRadius: "2%" }}
    >
      <blockquote className="blockquote text-justify highlight py-3">
        <p clasclassName="mb-1 ">
          <BsChevronRight />
          {link.title}
        </p>
        <footer className="blockquote-footer">
          <span className="Source Title">{link.text}</span>
        </footer>
      </blockquote>
    </li>
  ));
  return (
    <ul className="list-group mb-5 " style={{ listStyle: "none" }}>
      {linkMarkup}
    </ul>
  );
};
