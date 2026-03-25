function CategoryCard({ category }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-[0_12px_25px_rgba(15,23,42,0.12)]">
      <img
        src={category.image}
        alt={category.title}
        className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.62))]" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-white">
        <span className="rounded-full bg-[#58c6f6]/90 px-3 py-1 text-[11px] font-bold">
          {category.subtitle}
        </span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold">
          مدينة مميزة
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-right text-white">
        <h3 className="text-lg font-extrabold">{category.title}</h3>
      </div>
    </article>
  );
}

export default CategoryCard;
