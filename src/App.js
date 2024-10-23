import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import Packing from "./Packing";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleItemCheck(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <Packing
        items={items}
        deleteItems={handleDeleteItems}
        onCheckItem={handleItemCheck}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
