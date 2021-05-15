import React from "react";
import { FaChevronRight } from "react-icons/fa";

export const LearningOptions = (props) => {
  const options = [
    {
      text: "¿Quieres saber cuáles son tus derechos fundamentales?",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <blockquote
      key={option.id}
      class="blockquote primary rounded p-2 cursor "
      onClick={option.handler}
    >
      <p className="m-auto">
        <FaChevronRight /> {option.text}
      </p>
    </blockquote>
  ));

  return (
    <div
      className="d-flex  align-items-start flex-wrap container-sm   "
      style={{ marginRight: "auto", padding: 5 }}
    >
      {optionsMarkup}
    </div>
  );
};
