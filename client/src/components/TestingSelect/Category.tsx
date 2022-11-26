import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

interface CategoryProps {
 category: string;
 setCategory:React.Dispatch<React.SetStateAction<string>>
 handleCategorySelectChange: (event:React.ChangeEvent<HTMLInputElement>)=> void;
}

export const Category = ({category,setCategory,handleCategorySelectChange}:CategoryProps) => {
 return(
  <TextField 
   label="Select Category" 
   placeholder='Select Category'
   size='small'
   select value={category} 
   onChange={handleCategorySelectChange}
   fullWidth
   required
   >
    <MenuItem value="c1">Category1</MenuItem>
    <MenuItem value="c2">Category2</MenuItem>
    <MenuItem value="c3">Category3</MenuItem>
   </TextField>
 )
}