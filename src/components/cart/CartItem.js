import { FormControl, Grid, ListItem, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import './Cart.scss';

function IntToMoney(price) {
    let value = price || 0;
    value = value >= 0 ? value : 0;
    let currValue = new Intl.NumberFormat('de-DE',
        {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(value);
    currValue = '$ ' + currValue;
    return currValue;
}

function CartItem(props) {
    const product = props.product;
    const isSelect = product.quantity <= 10;
    const [quantity, setQuantity] = useState(product.quantity);

    function handleChangeQuantity(e) {
        e.preventDefault();
        props.changeQuantity(props.index, quantity);
    }

    function handleChangeDelete(e) {
        props.deleteProduct(product.product.id);
    }

    function handleChangeQuantitySelect(e) {
        setQuantity(e.target.value);
        props.changeQuantity(props.index, e.target.value);
    }

    function handleChangeQuantityInput(e) {
        setQuantity(e.target.value || 1);
        if (e.target.value <= 0) setQuantity(1);
        if (isNaN(parseInt(quantity))) setQuantity(1);
    }

    return (
        <div className='CartItem'>
            {parseInt(quantity)}
            <hr className='line-separator' />
            <ListItem >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div align="center">
                            <img src={product.product.img_url} alt="imagen" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={9} >
                        <Grid container spacing={2}>
                            <Grid item xs={10} sm={10} md={9} lg={9} >
                                <div className='product-name'>
                                    {product.product.name}
                                </div>
                                <div>
                                    {product.product.description}
                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className='price'>{IntToMoney(product.product.price)}</p>
                            </Grid>

                            <Grid item xs={5} sm={3} md={6} lg={8} >
                                <div className="number-container">
                                    <FormControl>
                                        {
                                            isSelect
                                                ?
                                                <div className='quantity-sel-input'>
                                                    <div className='text-sel-input'>Cantidad</div>
                                                    <Select
                                                        labelId="quantity"
                                                        value={quantity}
                                                        onChange={handleChangeQuantitySelect}
                                                        className='select-quantity'
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
                                                </div>

                                                :
                                                <form className='quantity-input' onSubmit={handleChangeQuantity}>
                                                    <div className='quantity-label'>Cantidad</div>
                                                    <input value={quantity} onChange={handleChangeQuantityInput}></input>
                                                    <button>Actualizar</button>
                                                </form>
                                        }

                                    </FormControl>
                                </div>
                            </Grid>
                            <Grid item xs={5} sm={3} md={6} lg={4} className='delete-container'>

                                <button onClick={handleChangeDelete}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                    <span className='ms-2'>Eliminar producto</span>
                                </button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </div>

    );
}

export default CartItem;
