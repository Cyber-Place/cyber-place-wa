import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
function Cart() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Carrito
          </h2>
        </header>
      <Divider></Divider>
      
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

      <ListItem>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={2}>
            <div align="center">
              <img src='https://m.media-amazon.com/images/I/41nAmdYZ+LL._AC_AA180_.jpg'/>
            </div>
          </Grid>

          <Grid item xs={12} sm={8} md={8} lg={10}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={10} md={10} lg={11}>
                <div>
                  <ListItemText primary="Product Name" secondary="Product description" />
                </div>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={1}>
                <h2>Price</h2>
              </Grid>

              <Grid item xs={5} sm={3} md={2} lg={1}>
                <div align="center">
                  <Box sx={{ minWidth: 80 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-quantity">Cantidad</InputLabel>
                        <Select
                          labelId="demo-quantity"
                          id="quantity-select"
                          value={age}
                          label="Cantidad"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                  </Box>
                </div>
              </Grid>

              <Grid item xs={5} sm={3} md={2} lg={1}>
                <div align="center">
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button>Eliminar</Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </ListItem>
      <Divider variant="middle" />
      </List>
      <div align="center">
      <Button variant="contained" align="center">Proceder al pago</Button>
      </div>
      
      </div>
    );
  }
  
  export default Cart;