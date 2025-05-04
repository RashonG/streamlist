// src/components/StreamItem.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const StreamItem = ({ item, onComplete, onEdit, onDelete }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          color: "white",
        }}
      >
        {item.text}
      </span>

      <button onClick={() => onComplete(item.id)}>
        <FontAwesomeIcon icon={faCheck} />
      </button>

      <button onClick={() => onEdit(item.id)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <button onClick={() => onDelete(item.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default StreamItem;
