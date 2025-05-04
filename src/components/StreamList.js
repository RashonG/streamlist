// src/components/StreamList.js
import React, { useState } from "react";
import useStreamListItems from "../hooks/useStreamListItems";
import StreamItem from "./StreamItem";

const StreamList = () => {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const { items, addItem, updateItem, completeItem, deleteItem } =
    useStreamListItems();

  const handleAddOrUpdate = () => {
    if (!input) return;

    if (isEditing) {
      updateItem(editId, input);
      setIsEditing(false);
      setEditId(null);
    } else {
      addItem(input);
    }

    setInput("");
  };

  const handleEdit = (id) => {
    const toEdit = items.find((item) => item.id === id);
    setInput(toEdit.text);
    setEditId(id);
    setIsEditing(true);
  };

  return (
    <div className="streamlist-container">
      <h2>Welcome to StreamList</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a movie or show..."
      />

      <button onClick={handleAddOrUpdate}>
        {isEditing ? "Update" : "Add"}
      </button>

      <ul>
        {items.map((item) => (
          <StreamItem
            key={item.id}
            item={item}
            onComplete={completeItem}
            onEdit={handleEdit}
            onDelete={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
