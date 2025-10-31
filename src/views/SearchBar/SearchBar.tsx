export default function SearchBar({filterText, inStockOnly,onFilterTextChange,onInStockOnlyChange}:{filterText:string, inStockOnly:boolean,onInStockOnlyChange:(value:boolean) => void,onFilterTextChange:(value:string) => void}){
    return (
        <form action="">
            <input type="text" 
            value={filterText} 
            onChange={(e) =>onFilterTextChange(e.target.value)}
            placeholder="Search..." />
            <label>
                <input type="checkbox"
                checked={inStockOnly}
                onChange={(e)=>onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}