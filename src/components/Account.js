import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../controllers/UserContext';
import Spinner from './Spinner';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';

const Account = () => {
    const history = useHistory();
    const user = useContext(UserContext);

    const handleBack = () => {
        history.go(-1);
    }

    const imgUrl = null;

    return (
            <Box 
                sx={{
                    maxWidth: '1000px',
                    m: "0 auto",
                    p: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '15px',
                    boxShadow: '0 0 10px rgba(0,0,0, .1)'
                }}
            >
                {
                    imgUrl !== '' 
                    ?   <CardMedia
                        component="img"
                        height="330"
                        width="300"
                        image={imgUrl}
                        alt="user avatar"
                        sx={{alignSelf: 'center'}}
                        />
                    :   <Box sx={{
                            height: 330,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: '50%'
                            }}
                    >
                            <Spinner />
                    </Box>  
                }
                <Box 
                    sx={{
                        padding: '0 2rem 0 2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start' 
                    }}
                >
                        <Fab
                            onClick={handleBack}
                            variant="extended"
                            color="primary"
                            aria-label="go back"
                            sx={{
                                alignSelf: 'flex-end',
                                mb:1,
                                fontSize: '.8rem',
                                lineHeight: 2
                            }} 
                        >
                            <ArrowBackOutlinedIcon sx={{mr:1, fontSize: '1.3rem'}} />
                            back
                        </Fab>
                    <Typography
                        variant="h4"
                        component="div"
                        gutterBottom
                    >
                        Account Details
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{fontWeight: 300}}
                    >
                        Username: 
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{fontWeight: 300}}
                    >
                        Email: { user.email }
                    </Typography>
                </Box>
            </Box>
    );
}
 
export default Account;