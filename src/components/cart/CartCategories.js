import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const CartCategories = () => {
    return (
        <>
            <Content>
                <Typography
                    variant="h6"
                >
                    item
                </Typography>
                <Typography
                    variant="h6"
                >
                    price
                </Typography>
                <Typography
                    variant="h6"
                >
                    quantity
                </Typography>
                <Typography
                    variant="h6"
                >
                    subtotal
                </Typography>
                <Span></Span>
            </Content>
            <Divider />
        </>
    )
}



const Content = styled.div`
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    justify-items: center;
    column-gap: 1rem;
`;

const Span = styled.span`
    width: 2rem;
    height: 2rem;
`;

export default CartCategories;