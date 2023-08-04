import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalValue = cartList.map(each => each.price * each.quantity)
      const totalOrderValue = totalValue.reduce((a, b) => a + b)

      return (
        <div className="order-total-container">
          <div>
            <h1 className="order-total-heading">
              Order Total:{' '}
              <span className="order-total-span">Rs {totalOrderValue}/- </span>
            </h1>
            <p className="items-in-cart-para">
              {cartList.length} items in cart
            </p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
