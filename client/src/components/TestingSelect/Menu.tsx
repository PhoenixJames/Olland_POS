import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

interface MenuProps {
 menu: string;
 setMenu:React.Dispatch<React.SetStateAction<string>>
 handleMenuSelectChange: (event:React.ChangeEvent<HTMLInputElement>)=> void;
}

export const Menu = ({menu,setMenu,handleMenuSelectChange}:MenuProps) => {
 
 return(
  <Box width='250px'>
   <TextField 
   label="Select Menu" 
   select value={menu} 
   onChange={handleMenuSelectChange}
   fullWidth
   >
    <MenuItem value="m1">menu1</MenuItem>
    <MenuItem value="m2">menu2</MenuItem>
    <MenuItem value="m3">menu3</MenuItem>
   </TextField>
  </Box>
 )
}