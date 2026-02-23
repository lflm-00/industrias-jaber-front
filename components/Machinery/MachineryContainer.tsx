"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import MachineryGrid from "./MachineryGrid";

export default function MachineryContainer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <MachineryGrid activeCategory={activeCategory} />
    </>
  );
}
