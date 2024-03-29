import { createContext, useContext } from "react";

const CardContext = createContext({});

const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState([]);
    // const addToCart = (product) => {
    //     setCart([...cart, product]);
    // };
    // const removeFromCart = (productId) => {
    //     setCart(cart.filter((product) => product.id !== productId));
    // };
    return (
        <CardContext.Provider value={{ items: [], onAddItem: () => {} }}>
        {children}
        </CardContext.Provider>
    );
    }

    export default CartProvider;


    export const useCart =  () => useContext(CardContext)