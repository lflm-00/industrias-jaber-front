export default function SectionTitle({ eyebrow, title, centered }) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-black">{title}</h2>
    </div>
  );
}