import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

//Esto es solo para ejemplo
const top100Films = [
{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 }];

function SearchBar() {
    return (
        <div className='search-bar' >
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => 
                <TextField {...params} label="" variant="outlined" InputLabelProps={{shrink: false}}
                sx={{
                    backgroundColor:'white',
                    borderRadius:'4px',
                }}
                
                />}
            />
        </div>
    )
}

export default SearchBar
