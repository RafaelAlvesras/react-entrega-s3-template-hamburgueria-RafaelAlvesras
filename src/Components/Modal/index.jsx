import { useRef, useEffect } from "react"
import { StyledModal } from "./StyledModal"
import trash from "../../assets/img/trash.png"
import { StyledCard } from "./CardModal.js"

export function Modal({ setIsOpen, setListCart, listCart, setCountCart}) {

    function deleteProductCart(productId) {
        setListCart((listCart) => listCart.filter(pro => pro.id !== productId))
        setCountCart((prevCount) => prevCount - 1);
    }

    function deleteAllCart() {
        setListCart([])
        setCountCart(0);
    }


    const modalRef = useRef(null)

    useEffect(() => {
        const handleOutclick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        window.addEventListener("mousedown", handleOutclick)
        window.addEventListener("keydown", handleKeyPress)
      
        return () => {
          window.removeEventListener("mousedown", handleOutclick)
          window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    const total = listCart.reduce((accumulator, product) => accumulator + product.price, 0)

    return (
        <StyledModal role="dialog">
            <div className="modal" ref={modalRef}>
                <div className="title">
                    <h2>Carrinho de compras</h2>
                    <button className="buttonClose" onClick={() => setIsOpen(false)}>X</button>
                </div>
                <div className="divCartList">
                    <ul className="listCartSection">
                        {
                            listCart.length == 0 ? <div className="noProducts"><h2>Nenhum produto cadastrado</h2></div> :
                                listCart.map((product) =>
                                    <StyledCard key={product.id}>
                                        <img className="productImg" src={product.img} alt="imagem ilustrativa do produto" />
                                        <div className="namePriceDiv">
                                            <h2>{product.name}</h2>
                                            <p className="price">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                        </div>
                                        <button className="trashButton" onClick={() => deleteProductCart(product.id)}><img src={trash} alt="botão com imagem de lixeira" /></button>
                                    </StyledCard>)
                        }
                    </ul>
                </div>
                <div className="totalDiv">
                    <div className="divTotalPriceModal">
                        <p className="totalTitle">Total</p>
                        <p className="totalPrice">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                    </div>
                    <button className="removeAll" onClick={() => deleteAllCart()}>Remover todos</button>
                </div>
            </div>
        </StyledModal>
    )
}