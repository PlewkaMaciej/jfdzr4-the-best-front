// import { Link } from 'react-router-dom';
import CartCategories from './CartCategories';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';
import { Wrapper } from './Cart.styled';


const Cart = () => {

    return (
        <Wrapper className='section section-center'>
        <CartCategories />
        {/* <CartItem /> */}
        {/* <hr /> */}
        {/* <div className='link-container'>
            <Link to="/"
             className='link-btn'>
            continue shopping
            </Link>
            <button
            type='button'
            className='link-btn clear-btn'
            // onClick={clearCart}
            >
            clear shopping cart
            </button>
        </div> */}
        {/* <CartSummary /> */}
        </Wrapper>
    )
}

// const Wrapper = styled.section`
//   .link-container {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 2rem;
//   }
//   .link-btn {
//     background: transparent;
//     border-color: transparent;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//     background: var(--clr-primary-5);
//     color: var(--clr-white);
//     border-radius: var(--radius);
//     letter-spacing: var(--spacing);
//     font-weight: 400;
//     cursor: pointer;
//   }
//   .clear-btn {
//     background: var(--clr-black);
//   }
// `
export default Cart;