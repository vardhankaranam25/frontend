
// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';
// // import { colors } from '@mui/material';
// // import { useNavigate } from 'react-router-dom'





// // const pages = ['CheckDonations', 'CheckVolunteer', 'RequestVolunteer', 'RaiseFund', 'FundStatus'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// // function NavNgo() {


// //     const navigate = useNavigate();
    

// //   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  

// //   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = (p: string) => {
// //     navigate('/' + p);
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };

// //   return (
// //     <AppBar sx={{backgroundColor: 'blue'}}>
     
// //         <Toolbar disableGutters>
          
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             component="a"
// //             href="/NgoHome"
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'none', md: 'flex' },
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'white',
// //               textDecoration: 'none',
// //             }}
// //           >
// //             CareWing
// //           </Typography>

// //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //             <IconButton
// //               size="large"
// //               aria-label="account of current user"
// //               aria-controls="menu-appbar"
// //               aria-haspopup="true"
// //               onClick={handleOpenNavMenu}
// //               color="inherit"
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               id="menu-appbar"
// //               anchorEl={anchorElNav}
// //               anchorOrigin={{
// //                 vertical: 'bottom',
// //                 horizontal: 'left',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'left',
// //               }}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu}
// //               sx={{
// //                 display: { xs: 'block', md: 'none' },
// //               }}
// //             >
// //               {pages.map((page) => (
// //                 <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
// //                   <Typography textAlign="center">{page}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu>
// //           </Box>
// //           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
// //           <Typography
// //             variant="h5"
// //             noWrap
// //             component="a"
// //             href="#app-bar-with-responsive-menu"
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'flex', md: 'none' },
// //               flexGrow: 1,
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //             }}
// //           >
// //             LOGO
// //           </Typography>
// //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
// //             {pages.map((page) => (
// //               <Button
// //                 key={page}
// //                 onClick={() => handleCloseNavMenu(page)}
                
// //                 sx={{ my: 2, color: 'white', display: 'block' }}
// //               >
// //                 {page}
// //               </Button>
// //             ))}
// //           </Box>

// //           <Box sx={{ flexGrow: 0 }}>
// //             <Tooltip title="Open settings">
// //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
// //               </IconButton>
// //             </Tooltip>
// //             <Menu
// //               sx={{ mt: '45px' }}
// //               id="menu-appbar"
// //               anchorEl={anchorElUser}
// //               anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               open={Boolean(anchorElUser)}
// //               onClose={handleCloseUserMenu}
// //             >
// //               {settings.map((setting) => (
// //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// //                   <Typography textAlign="center">{setting}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu>
// //           </Box>
// //         </Toolbar>
     
// //     </AppBar>
// //   );
// // }
// // export default NavNgo;

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
// import Avatar from '@mui/material/Avatar';
// import { useNavigate } from 'react-router-dom';

// const pages = ['CheckDonations', 'CheckVolunteer', 'RequestVolunteer', 'RaiseFund', 'FundStatus'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function NavNgo() {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = (page: string) => {
//     navigate('/' + page);
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar sx={{ backgroundColor: 'blue' }}>
//       <Toolbar disableGutters>
//         <Typography
//           variant="h6"
//           noWrap
//           component="a"
//           href="/NgoHome"
//           sx={{
//             ml: 4,
//             mr: 2,
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
//               <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
//                 <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
//                   {page}
//                 </Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 12 }}>
//           {pages.map((page) => (
//             <Button
//               key={page}
//               onClick={() => handleCloseNavMenu(page)}
//               sx={{
//                 my: 2,
//                 color: 'white',
//                 display: 'block',
//                 textTransform: 'capitalize',
//                 fontSize: '1rem',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                 }
//               }}
//             >
//               {page}
//             </Button>
//           ))}
//         </Box>

//         <Box sx={{ flexGrow: 0 }}>
//           <Tooltip title="Open settings">
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
//                 <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
//                   {setting}
//                 </Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default NavNgo;
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
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import for user icon
import { useNavigate } from 'react-router-dom';

const pages = ['CheckDonations', 'CheckVolunteer', 'RequestVolunteer', 'RaiseFund', 'FundStatus'];
const settings = ['Logout'];

function NavNgo() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    navigate('/' + page);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (p:string) => {
    navigate('/' + p);
    setAnchorElUser(null);
};
  return (
    <AppBar sx={{ backgroundColor: 'rgb(15, 3, 70)' }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/NgoHome"
          sx={{
            ml: 4,
            mr: 2,
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
              <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 12 }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleCloseNavMenu(page)}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="">
            <IconButton  sx={{ p: 0, marginRight: '10px ' }} onClick={handleOpenUserMenu}>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
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
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
      
export default NavNgo;
