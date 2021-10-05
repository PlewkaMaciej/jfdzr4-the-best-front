import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@mui/styles';
import { storage } from './../index';
import { ref, getDownloadURL } from 'firebase/storage';

const useStyles = makeStyles({  
    card: {
        borderRadius: '12px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '1px 3px 8px rgba(0, 0, 0, .12)'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
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

const BookCard = ({title, author, price, id, coverName, description}) => {
    const classes = useStyles();

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        getDownloadURL(ref(storage, `covers/${id}/${coverName}`))
            .then(url => {
                setImgUrl(url);
            })
            .catch(err => {
                console.log(err, err.message);
            });
    }, [id, coverName]);

    return (
            <Card 
                sx={{ maxWidth: 300 }}
                className={classes.card}
            >
                <Link to={`/${id}`} className={classes.link}>
                    <CardMedia
                        component="img"
                        height="330"
                        image={imgUrl}
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
                        <Typography
                            gutterBottom 
                            variant="body2" 
                            color="text.secondary" 
                            noWrap
                        >
                            {description}
                        </Typography>
                        <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="div"
                        >
                            {`cena: ${price.toFixed(2)} zł`}
                        </Typography>
                    </CardContent>
                </Link>
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
    );
}
 
export default BookCard;