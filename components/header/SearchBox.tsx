"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const SearchBox = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("categoty") || "All";

  const { data: categories, error } = useSWR("/api/products/categories");

  if (error) return error.message;
  if (!categories) return "Chargement";
  return (
    <form action="/search" method="GET">
      <div className="join">
        <select
          name="category"
          defaultValue={category}
          className="join-item select select-bordered "
        >
          <option value="all">Tous</option>
          {categories.map((c: string) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input
          className="join-item input input-bordered  w-48"
          placeholder="Rechercher"
          defaultValue={q}
          name="q"
        />
        <button className="join-item btn">Rechercher</button>
      </div>
    </form>
  );
};
