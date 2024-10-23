export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>
          <p>
            Aucun article dans votre liste de colisage. Sélectionnez les
            articles nécessaires pour ce voyage ✈{" "}
          </p>
        </em>
      </footer>
    );
  }
  const packed = items.filter((item) => item.packed === true);
  let percentage = Math.trunc((packed.length * 100) / items.length);
  const len = items.length;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Vous avez tout emballé et êtes prêt pour le voyage ✈ "
          : `👜 Vous avez ${len} articles sur votre liste, et vous avez déjà
        emballé ${packed.length} (${len === 0 ? 0 : percentage}%)`}
      </em>
    </footer>
  );
}
