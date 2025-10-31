import type { Product } from "../../interface/typeof";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";
import { useState } from "react";
export default function FilterableProductTable({ products }: { products: Product[] }) {
  
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div>

      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products} />

    </div>
  );
}