import { Link } from 'react-router-dom';
import CartCategories from './CartCategories';
import CartSummary from './CartSummary';
import { Wrapper } from './Cart.styled';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CartItem from './CartItem';


const Cart = () => {

    return (
        <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <CartCategories />
        <Divider />
            <CartItem />
            <CartItem />
            <CartItem />
        <Divider />
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '3rem'
        }}>
            <Link to="/">
                continue shopping
            </Link>
            <button
                type='button'
                // onClick={clearCart}
            >
                clear shopping cart
            </button>
        </Box>
        <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <CartSummary />
        </Box>
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