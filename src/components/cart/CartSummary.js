import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { Wrapper, ItemRight, ItemLeft} from './CartSummary.styled'

const CartSummary = () => {

    return (
      <Wrapper>
        <Grid 
          container
          rowSpacing={2}
        >
          <Grid item xs={6}>
            <ItemLeft>
              subtotal :
            </ItemLeft>
          </Grid>
          <Grid item xs={6}>
            <ItemRight>
              128,35 zł
            </ItemRight>
          </Grid>
          <Grid item xs={6}>
            <ItemLeft>
              shipping fee :
            </ItemLeft>
          </Grid>
          <Grid item xs={6}>
            <ItemRight>
              9,99 zł
            </ItemRight>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <ItemLeft 
              fontSize="20px"
              fontWeight="700"
              gutterBottom
            >
              Order Total :
            </ItemLeft>
          </Grid>
          <Grid item xs={6}>
            <ItemRight
              gutterBottom
              fontSize="20px"
              fontWeight="700"
            >
              137,34 zł
            </ItemRight>
          </Grid>
          <Grid item xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Link to='/checkout'
              style={{                    textDecoration: 'none'}}
            >
              <Fab
              size="small"
                variant="extended"
                color="primary"
                type="submit"
                aria-label="proceed to checkout"
                sx={{
                    fontSize: '.9rem',
                }}   
              >
                proceed to checkout
                <SendIcon 
                  sx={{
                    ml:1, fontSize: '1rem'
                  }} 
                />
              </Fab>
            </Link>
          </Grid>
        </Grid>
      </Wrapper>
  )
}
 
export default CartSummary;