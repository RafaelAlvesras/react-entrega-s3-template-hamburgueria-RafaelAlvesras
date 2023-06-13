import { Header } from "./Components/Header/index.jsx"
import { GlobalReset } from "./Styles/reset.js"
import { GlobalStyles } from "./Styles/global.js"
import { ProductsSection } from "./Components/ProductsSection/index.jsx"
import { useState } from "react"
import { Modal } from "./Components/Modal/index.jsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


export function App() {
  const [isOpen, setIsOpen ] = useState(false)
  const [listCart, setListCart ] = useState([]) 
  const [searchInput, setSearchInput] = useState("")
  const [products, setProducts] = useState([])
  const [countCart , setCountCart ] = useState(0) 

  const searchProducts = products.filter(
    (product) => product.name.toUpperCase().includes(searchInput.toUpperCase())
  )

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header setSearchInput={setSearchInput} countCart={countCart} setIsOpen={setIsOpen} />
      {
        isOpen ? <Modal setCountCart={setCountCart} setIsOpen={setIsOpen} listCart={listCart} setListCart={setListCart}/> : <></>
      }
      <main>
        <ToastContainer />
        <ProductsSection searchProducts={searchProducts} products={products} setProducts={setProducts} countCart={countCart} setCountCart={setCountCart} listCart={listCart} setListCart={setListCart}/>
      </main>
    </>
  )
}