import { useEffect, useState } from "react"
import { api } from "../../../../services/api.js"
import { StyledCard } from "../ProductsCard/StyledCard.js"
import { StyledSpinner } from "./StyledSpinner.js"

export function ProductsCard({ setCountCart, listCart, setListCart, setProducts, products, searchProducts}) {
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        async function loadData() {
            try{
                const response = await api.get('/products')
                
                setProducts(response.data)
            } catch {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])

    const handleAddToCart = (product) => {
        const existingProduct = listCart.find((item) => item.id === product.id)
        if (existingProduct) {
          alert("Item já existe no carrinho");
        } else {
          setListCart((listCart) => [...listCart, product]);
          setCountCart((prevCount) => prevCount + 1);
        }
    }

    return( 
        <>
            {
            isLoading ?
            <StyledSpinner></StyledSpinner> :
            searchProducts.map((product) => 
            <StyledCard key={product.id}>
                <div className="divImg">
                <img src={product.img} alt="imagem ilustrativa do produto" />
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <p className="category">{product.category}</p>
                    <p className="price">{product.price.toLocaleString('pt-BR', {style:'currency' , currency: 'BRL'})}</p>
                    <button onClick={() => handleAddToCart(product)}>Adicionar</button>
                </div>
            </StyledCard>
            )}
        </>
    )
}