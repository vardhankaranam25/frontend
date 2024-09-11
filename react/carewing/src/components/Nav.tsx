// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AccountCircle from '@mui/icons-material/AccountCircle'; // User icon
// import { useNavigate } from 'react-router-dom';

// const pages = ['Donate', 'Volunteer', 'NGORequirements', 'Fund', 'Login'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Nav() {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   const handleCloseNavMenu = (p: string) => {
//     navigate(p);
//     setAnchorElNav(null);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar sx={{ backgroundColor: 'darkred' }}>
//       <Toolbar disableGutters>
//         <Typography
//           variant="h6"
//           noWrap
//           component="a"
//           href="/UserHome"
//           sx={{
//             ml: 4, 
//             display: { xs: 'none', md: 'flex' },
//             fontFamily: 'Georgia, serif',
//             fontWeight: 'bold',
//             fontSize: '1.75rem',
//             letterSpacing: '.1rem',
//             color: 'white',
//             textDecoration: 'none',
//             userSelect: 'none',
//             textShadow: '1px 1px 2px black',
//             textTransform: 'capitalize' 
//           }}
//         >
//           CareWing
//         </Typography>

//         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//             }}
//           >
//             {pages.map((page) => (
//               <MenuItem key={page} onClick={() => handleCloseNavMenu(page.toLowerCase())}>
//                 <Typography textAlign="center" sx={{ textTransform: 'capitalize' }}>
//                   {page.toLowerCase()}
//                 </Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 12 }}>
//           {pages.map((page) => (
//             <Button
//               key={page}
//               onClick={() => handleCloseNavMenu(page.toLowerCase())}
//               sx={{ 
//                 my: 2, 
//                 color: 'white', 
//                 display: 'block', 
//                 textTransform: 'capitalize',
//                 fontSize: '1rem', 
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)', 
//                   color: '#fff' 
//                 }
//               }}
//             >
//               {page.toLowerCase()}
//             </Button>
//           ))}
//         </Box>

//         <Box sx={{ flexGrow: 0 }}>
//           <Tooltip title="Open settings">
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <AccountCircle sx={{ color: 'white', width: 40, height: 40 }} />  
//             </IconButton>
//           </Tooltip>
//           <Menu
//             sx={{ mt: '45px' }}
//             id="menu-appbar"
//             anchorEl={anchorElUser}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             {settings.map((setting) => (
//               <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center" sx={{ textTransform: 'capitalize' }}>
//                   {setting.toLowerCase()}
//                 </Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Nav;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle'; // User icon
import { useNavigate } from 'react-router-dom';

const pages = ['Donate', 'Volunteer', 'NGORequirements', 'Fund'];
const settings = ['Logout'];

function Nav() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = (p: string) => {
        navigate('/' + p);
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = (p:string) => {
        navigate('/' + p);
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ backgroundColor: 'darkred' }}>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/UserHome"
                    sx={{
                        ml: 4, 
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Georgia, serif',
                        fontWeight: 'bold',
                        fontSize: '1.75rem',
                        letterSpacing: '.1rem',
                        color: 'white',
                        textDecoration: 'none',
                        userSelect: 'none',
                        textShadow: '1px 1px 2px black',
                        textTransform: 'capitalize' 
                    }}
                >
                    CareWing
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
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
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={() => handleCloseNavMenu(page.toLowerCase())}>
                                <Typography textAlign="center" sx={{ textTransform: 'capitalize' }}>
                                    {page.toLowerCase()}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 12 }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleCloseNavMenu(page.toLowerCase())}
                            sx={{ 
                                my: 2, 
                                color: 'white', 
                                display: 'block', 
                                textTransform: 'capitalize',
                                fontSize: '1rem', 
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                                    color: '#fff' 
                                }
                            }}
                        >
                            {page.toLowerCase()}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0, mr: 2 }}>
                    <Tooltip title="">
                      
                        <IconButton sx={{ p: 0 ,marginRight: '10px ' }} onClick={handleOpenUserMenu} >
                            <AccountCircle sx={{ color: 'white', width: 40, height: 40 }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        TransitionProps={{ timeout: 350 }} 
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                                <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
                                    {setting.toLowerCase()}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Nav;
