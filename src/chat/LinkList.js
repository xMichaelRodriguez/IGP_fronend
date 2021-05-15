import React from "react";
import { BsChevronRight } from "react-icons/bs";

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item mb-2 shadow px-3 bg-secondary">
      <blockquote class="blockquote text-center highlight">
        <p class="mb-1">
          <BsChevronRight /> {link.title}
        </p>
        <footer class="blockquote-footer">
          <span className="Source Title">{link.text}</span>
        </footer>
      </blockquote>
    </li>
  ));
  return <ul className="list-group mb-5">{linkMarkup}</ul>;
};
