import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const StreamList = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  const handleAdd = () => {
    if (!input) return;
    const newItem = { id: Date.now(), text: input, completed: false };
    setItems([...items, newItem]);
    setInput('');
  };
  
  const handleUpdate = () => {
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, text: input } : item
      )
    );
    setInput('');
    setEditId(null);
    setIsEditing(false);
  };
  
  const handleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  
  const handleEdit = (id) => {
    const toEdit = items.find((item) => item.id === id);
    setInput(toEdit.text);
    setEditId(id);
    setIsEditing(true);
  };
  
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
  
      <button onClick={isEditing ? handleUpdate : handleAdd}>
        {isEditing ? 'Update' : 'Add'}
      </button>
  
      <ul>
        {items.map((item) => (
          <li key={item.id}>
           <span style={{ 
  textDecoration: item.completed ? 'line-through' : 'none',
  color: 'white' 
}}>
  {item.text}
</span>

  
            <button onClick={() => handleComplete(item.id)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
  
            <button onClick={() => handleEdit(item.id)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
  
            <button onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  export default StreamList;
