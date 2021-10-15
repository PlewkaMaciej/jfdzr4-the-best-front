import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const Wrapper = styled(Paper)`
    max-width: 300px;
    margin-top: 3rem;
    padding: 1.5rem 2rem;
    align-self: flex-end;
    border-radius: 10px;
`;

export const ItemRight = styled(Typography)`
    text-align: left;
    margin-left: 25%
`;
export const ItemLeft = styled(Typography)`
    text-align: left;
`;