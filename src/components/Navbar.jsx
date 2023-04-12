import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Waves from "../images/wave.svg";
import WavesMobile from "../images/wave2.svg"
import { Container } from '@mui/system';
import Resume from "../Resume.pdf"

const pages = [{ link: "/", component: "Home" }, { link: "/work", component: "Work" }, { link: "/about", component: "About" }];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ backgroundImage: { xs: `url(${WavesMobile})`, md: `url(${Waves})` }, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
            <Container maxWidth="xl" sx={{ height: { xs: '200px', sm: '300px', md: "450px" }, padding: { xs: '1em', sm: '1.5em', md: '2.5em 1em', lg: '4em 2em' }, display: 'flex', alignItems: 'flex-start' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: "8px", sm: "15px" }, marginBottom: { xs: "10px", sm: "1em" } }} >
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontWeight: 700,
                                textTransform: "uppercase",
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: { xs: '18px', sm: '22px' }
                            }}
                        >
                            Neelam Chavan
                        </Typography>
                    </Box>
                    <Typography sx={{ textTransform: 'uppercase', color: "#fff", fontSize: { xs: '12px', sm: '14px' }, marginBottom: { xs: '1em' } }}>
                        Frontend Developer
                    </Typography>
                    <Box sx={{ display: 'flex', gap: { xs: '10px', md: '15px' } }}>
                        <IconButton sx={{ padding: 0, width: { xs: "18px", sm: "24px" } }}>
                            <svg fillRule="evenodd" clipRule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" role="img" class="InlineSvg-gigSlh hwPeQh"><title id="linkedin">linkedin</title><g id="linkedin"><path fill="#ffffff" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M11.4,24.2H7.5V12.5h3.9V24.2z M9.4,10.9L9.4,10.9c-1.3,0-2.2-0.9-2.2-2c0-1.2,0.9-2,2.2-2s2.2,0.9,2.2,2C11.6,10,10.8,10.9,9.4,10.9z M25.4,24.2h-3.9v-6.3 c0-1.6-0.6-2.7-2-2.7c-1.1,0-1.7,0.7-2,1.4c-0.1,0.3-0.1,0.6-0.1,1v6.5h-3.9c0,0,0.1-10.6,0-11.7h3.9v1.7c0.5-0.8,1.4-1.9,3.5-1.9 c2.6,0,4.5,1.7,4.5,5.3V24.2z"></path></g></svg>
                        </IconButton>
                        <IconButton sx={{ padding: 0, width: { xs: "18px", sm: "24px" } }}>
                            <svg fillRule="evenodd" clipRule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" role="img" class="InlineSvg-gigSlh hwPeQh"><title id="github">github</title><g><path fill="#ffffff" d="M16.3,2C8,2,1.3,8.7,1.3,17 c0,6.6,4.3,12.2,10.2,14.2c0.7,0.1,1-0.3,1-0.7c0-0.4,0-1.3,0-2.5c-4.2,0.9-5-2-5-2c-0.7-1.7-1.7-2.2-1.7-2.2 c-1.4-0.9,0.1-0.9,0.1-0.9c1.5,0.1,2.3,1.5,2.3,1.5c1.3,2.3,3.5,1.6,4.4,1.2c0.1-1,0.5-1.6,1-2c-3.3-0.4-6.8-1.7-6.8-7.4 c0-1.6,0.6-3,1.5-4c-0.2-0.4-0.7-1.9,0.1-4c0,0,1.3-0.4,4.1,1.5c1.2-0.3,2.5-0.5,3.7-0.5c1.3,0,2.6,0.2,3.7,0.5 c2.9-1.9,4.1-1.5,4.1-1.5c0.8,2.1,0.3,3.6,0.1,4c1,1,1.5,2.4,1.5,4c0,5.8-3.5,7-6.8,7.4c0.5,0.5,1,1.4,1,2.8c0,2,0,3.6,0,4.1 c0,0.4,0.3,0.9,1,0.7c5.9-2,10.2-7.6,10.2-14.2C31.2,8.7,24.5,2,16.3,2z"></path></g></svg>
                        </IconButton>
                        <IconButton sx={{ width: { xs: "18px", sm: "24px" }, padding: 0 }}>
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM27.1967 32.1967C28.6032 30.7902 30.5109 30 32.5 30H67.5C69.4891 30 71.3968 30.7902 72.8033 32.1967C74.2098 33.6032 75 35.5109 75 37.5V62.5C75 64.4891 74.2098 66.3968 72.8033 67.8033C71.3968 69.2098 69.4891 70 67.5 70H32.5C30.5109 70 28.6032 69.2098 27.1967 67.8033C25.7902 66.3968 25 64.4891 25 62.5V37.5C25 35.5109 25.7902 33.6032 27.1967 32.1967ZM51.775 49.7L66.475 35H33.525L48.225 49.7C48.4574 49.9343 48.7339 50.1203 49.0386 50.2472C49.3432 50.3741 49.67 50.4395 50 50.4395C50.33 50.4395 50.6568 50.3741 50.9614 50.2472C51.2661 50.1203 51.5426 49.9343 51.775 49.7ZM69.2678 64.2678C69.7366 63.7989 70 63.163 70 62.5V38.525L55.3 53.225C53.8937 54.6295 51.9875 55.4184 50 55.4184C48.0125 55.4184 46.1063 54.6295 44.7 53.225L30 38.525V62.5C30 63.163 30.2634 63.7989 30.7322 64.2678C31.2011 64.7366 31.837 65 32.5 65H67.5C68.163 65 68.7989 64.7366 69.2678 64.2678Z" fill="#ffffff" />
                            </svg>
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignSelf: "self-start", justifyContent: "flex-end" }}>
                    <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="black"
                        sx={{ padding: 0 }}
                    >
                        <MenuIcon color='primary' />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page, i) => (
                            <MenuItem key={i} onClick={handleCloseNavMenu}>
                                <Link to={page.link} style={{ color: 'black', display: 'block', textDecoration: "none", fontSize: { xs: '12px', md: '14px' } }}>{page.component}</Link>
                            </MenuItem>
                        ))}
                        <MenuItem>
                            <a href={Resume} style={{ color: 'black', display: 'block', textDecoration: "none", fontSize: { xs: '12px', md: '14px' } }}>Resume</a>
                        </MenuItem>
                    </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignSelf: 'flex-start' }}>
                    {pages.map((page, i) => (
                        <Button
                            key={i}
                            onClick={handleCloseNavMenu}
                        >
                            <Link to={page.link} style={{ color: 'black', display: 'block', textDecoration: "none", fontSize: { xs: '12px', md: '14px' } }}>{page.component}</Link>
                        </Button>
                    ))}
                    <Button

                        onClick={handleCloseNavMenu}
                    >
                        <a href={Resume} style={{ color: 'black', display: 'block', textDecoration: "none", fontSize: { xs: '12px', md: '14px' } }}>Resume</a>
                    </Button>
                </Box>
            </Container>

        </Box >
    )
}

export default Navbar


