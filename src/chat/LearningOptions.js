import React from "react";
import { FaChevronRight } from "react-icons/fa";

export const LearningOptions = (props) => {
  const options = [
    {
      text: "¿Quieres saber cuáles son tus derechos fundamentales?",
      handler: props.actionProvider.handleDerechos,
      id: 1,
    },
    {
      text: "¿Quieres saber que organizaciones protegen tus derechos?",
      handler: props.actionProvider.handleOrganizations,
      id: 2,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <blockquote
      key={option.id}
      className="blockquote primary rounded p-2 cursor shadow-sm"
      onClick={option.handler}
    >
      <p className="m-auto">
        <FaChevronRight /> {option.text}
      </p>
    </blockquote>
  ));

  return (
    <div
      className="d-flex  align-items-start flex-wrap container-sm"
      style={{ marginRight: "auto", padding: 5 }}
    >
      {optionsMarkup}
    </div>
  );
};
