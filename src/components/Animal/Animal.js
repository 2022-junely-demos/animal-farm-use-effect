import './Animal.css';
export default function Animal({ name, type, top, left, says }) {
  return (
    <div className="animal" style={{ top: `${top}px`, left: `${left}%` }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  );
}
