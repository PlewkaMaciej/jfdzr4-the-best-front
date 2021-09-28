import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@mui/styles';
import img from '../rowerem i pieszo przez czarny ląd.png';

const useStyles = makeStyles({  
    card: {
        borderRadius: '12px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '1px 3px 8px rgba(0, 0, 0, .12)'
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },    
    btn: {
        alignSelf: 'center'
    }
})

const BookCard = ({title, author, price}) => {

    const classes = useStyles();

    return (

        <li style={{maxWidth:'600px', margin: '0 auto', marginTop: '50px'}}>
            <Card 
                sx={{ maxWidth: 300 }}
                className={classes.card}
            >
                <CardMedia
                    component="img"
                    height="330"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography 
                        gutterBottom
                        variant="h2"
                        component="div"
                        align="left"
                        fontWeight="700"
                        fontSize="24px"
                    >
                        {title}
                    </Typography>
                    <Typography 
                        gutterBottom
                        variant="subtitle1" 
                        component="div"
                    >
                        {author}
                    </Typography>
                    {/* <Typography
                        gutterBottom 
                        variant="body2" 
                        color="text.secondary" 
                        noWrap
                    >
                        {description}
                    </Typography> */}
                    <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="div"
                    >
                        {`cena: ${price.toFixed(2)} zł`}
                    </Typography>
                </CardContent>
                <CardActions
                    className={classes.cardActions}
                >
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"   
                        startIcon={<AddShoppingCartIcon />}
                        className={classes.btn}
                    >
                        Add to Basket
                    </Button>
                </CardActions>
            </Card>
        </li>
    );
}
 
export default BookCard;