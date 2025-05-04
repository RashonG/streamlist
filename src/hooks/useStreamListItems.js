// src/hooks/useStreamListItems.js
import { useState } from "react";

const useStreamListItems = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    if (!text) return;
    const newItem = { id: Date.now(), text, completed: false };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItem = (id, newText) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const completeItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return {
    items,
    addItem,
    updateItem,
    completeItem,
    deleteItem,
  };
};

export default useStreamListItems;
