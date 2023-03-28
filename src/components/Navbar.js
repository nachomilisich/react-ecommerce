import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to= "/">Inicio</Link>
        <Link to= "/">Productos</Link>
        <Link to= "/">Contacto</Link>
        <Link to= "/">Sobre Nosotros</Link>
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