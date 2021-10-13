import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { DropdownMenu } from './DropdownMenu';
import { LogoWrapper, ButtonsWrapper } from './Navigation.styled';
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
                    <Link to="/about" style={{textDecoration: 'none'}}>
                        <Button 
                            variant="text"
                            sx={{mr: 1, p: 1, color: '#fff', '&:hover': {
                                backgroundColor: '#1c54b2',
                                boxShadow: '0 0 5px #1c54b2'
                            }}}
                            startIcon={<AccountBalanceOutlinedIcon />}
                        >
                            About
                        </Button>
                    </Link>
                    <Link to="/forum" style={{textDecoration: 'none'}}>
                        <Button 
                            variant="text"
                            sx={{mr: 1, p: 1, color: '#fff', '&:hover': {
                                backgroundColor: '#1c54b2',
                                boxShadow: '0 0 5px #1c54b2'
                            }}}
                            startIcon={<AccountBalanceOutlinedIcon />}
                        >
                            Forum
                        </Button>
                    </Link>
                    <Link to="/recommend" style={{textDecoration: 'none'}}>
                        <Button 
                            variant="text"
                            sx={{mr: 1, p: 1, color: '#fff', '&:hover': {
                                backgroundColor: '#1c54b2',
                                boxShadow: '0 0 5px #1c54b2'
                            }}}
                            startIcon={<RecommendOutlinedIcon />}
                        >
                            Recommend
                        </Button>
                    </Link>
                    <Link to="/cart" style={{textDecoration: 'none'}}>
                        <Button 
                            variant="text"
                            sx={{mr: 1, p: 1, color: '#fff', '&:hover': {
                                backgroundColor: '#1c54b2',
                                boxShadow: '0 0 5px #1c54b2'
                            }}}
                            startIcon={<AddShoppingCartIcon />}
                        >
                            Cart
                        </Button>
                    </Link>
                    <DropdownMenu />
                </ButtonsWrapper>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navigation;