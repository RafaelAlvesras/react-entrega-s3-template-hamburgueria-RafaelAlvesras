import { ProductsCard } from "./ProductsCard/index.jsx"
import { StyledList } from "./StyledList.js"

export function ProductsList({ countCart, setCountCart, listCart, setListCart, products, setProducts, searchProducts }) {
    return (
        <StyledList>
            <ProductsCard searchProducts={searchProducts} products={products} setProducts={setProducts} countCart={countCart} setCountCart={setCountCart} listCart={listCart} setListCart={setListCart}/>
        </StyledList>
    )
}