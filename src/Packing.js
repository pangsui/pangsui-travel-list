import { useState } from "react";

export default function Packing({
  items,
  deleteItems,
  onCheckItem,
  onClearList,
}) {
  const [sortBy, setSortedBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") {
    sortedItem = items;
  }
  if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItem = items.slice().sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            deleteItems={deleteItems}
            onCheckItem={onCheckItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        {/* we can also use value={sortBy} */}
        <select name={sortBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button type="button" onClick={onClearList}>
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
function Item({ item, deleteItems, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
}
