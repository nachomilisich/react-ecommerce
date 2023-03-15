import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget ';

const Navbar = () => {
    return (
<React.Fragment>
    <AppBar sx={{ background: "#750754"}}>
        <Toolbar>
        <Typography>
            <h2>SOUR Company</h2>
        </Typography>
        <Tabs sx={{marginLeft: 'auto'}} textColor="inherit">
        <Tab label="Inicio" />
        <Tab label="Productos" />
        <Tab label="Contacto" />
        <Tab label="Sobre Nosotros" />
        </Tabs>
        <button>
        <CartWidget/>
        </button>
        </Toolbar>
    </AppBar>
</React.Fragment>
    )
}

export default Navbar