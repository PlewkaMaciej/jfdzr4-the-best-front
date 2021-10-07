import { useContext } from 'react';
import { UserContext } from '../controllers/UserContext';
import { Link } from 'react-router-dom';
import { auth } from '../index';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../logo.png';
import { signOut } from '@firebase/auth';

const Navigation = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        maxWidth: '35%',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    }));

    const LogoWrapper = styled('div')({
        display: 'flex',
        alignItems: 'center'
    })

    const ButtonsWrapper = styled('div')({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const user = useContext(UserContext);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <AppBar position="fixed">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <LogoWrapper>
                    <Avatar alt="logo" src={logo} />
                    <Link to="/" style={{textDecoration: 'none'}}>  
                        <Typography variant="h6" component="h2" sx={{
                                p: 1,
                                textDecoration: 'none',
                                color: '#fff'
                        }}>
                            Smart Books
                        </Typography>
                    </Link>
                </LogoWrapper>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <ButtonsWrapper>
                    <Button 
                        variant="contained"
                        color="primary"
                        sx={{mr: 1}}
                        startIcon={<AccountBalanceOutlinedIcon />}
                    >
                        About
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        sx={{mr: 1}}
                        startIcon={<AccountBalanceOutlinedIcon />}
                    >
                        Forum
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        sx={{mr: 1}}
                        startIcon={<RecommendOutlinedIcon />}
                    >
                        Recommend
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        sx={{mr: 1}}
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Basket
                    </Button>
                    {   
                        user
                        ?   <Link to="/account" style={{textDecoration: 'none'}}>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    sx={{mr: 1}}
                                    startIcon={<AccountCircleOutlinedIcon />}
                                >
                                    Account
                                </Button>
                            </Link>
                        :   <Link to="/sign-in" style={{textDecoration: 'none'}}>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    sx={{mr: 1}}
                                    startIcon={<LoginOutlinedIcon />}
                                >
                                        Sign in
                                </Button> 
                            </Link> 
                    }
                    {
                        user
                        ?   <Button 
                                variant="contained"
                                color="primary"
                                startIcon={<LogoutOutlinedIcon />}
                                onClick={handleSignOut}
                            >
                                Sign out
                            </Button>
                        :   <Link to="/sign-up" style={{textDecoration: 'none'}}>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    startIcon={<PersonAddIcon />}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                    }
                </ButtonsWrapper>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navigation;