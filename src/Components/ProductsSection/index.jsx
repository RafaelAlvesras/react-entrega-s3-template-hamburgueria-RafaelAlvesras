import { ProductsList } from "./ProductsList/index.jsx"
import { StyledSection } from "./StyledSection.js"

export function ProductsSection({ countCart, setCountCart, listCart, setListCart,products, setProducts, searchProducts }) {
    return (
        <StyledSection>
            <ProductsList searchProducts={searchProducts} products={products} setProducts={setProducts} countCart={countCart} setCountCart={setCountCart} listCart={listCart} setListCart={setListCart}/>
        </StyledSection>
    )
}