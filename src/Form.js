import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // setting description and quantity to initial states afte submitting
    setDescription("");
    setQuantity(1);
    onAddItems(newItem);
  }
  function arrayValues() {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>De quoi avez-vous besoin pour votre 😍 voyage ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {arrayValues().map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
