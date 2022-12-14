import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CategoryProps {
 category: string;
 setCategory:React.Dispatch<React.SetStateAction<string>>
 handleCategorySelectChange: (event:React.ChangeEvent<HTMLInputElement>)=> void;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Categories = [
  {
    id:1,
    category:"c1",
    title:'c1cat1'

  },
  {
    id:2,
    category:"c1",
    title:'c1cat2'

  },
  {
    id:3,
    category:"c2",
    title:'c2cat1'

  },
  {
    id:4,
    category:"c2",
    title:'c2cat2'

  },
]

export const Category = ({category,setCategory,handleCategorySelectChange}:CategoryProps) => {
  const [open, setOpen] =  useState<boolean>(false);
  const [data,setData] =useState(Categories)
  const handleOpen = (catItem:any) => {
    setOpen(true)
    const result = Categories.filter((curDate)=>{
      return curDate.category === catItem
    })
    setData(result)
  }
  const handleClose = () => setOpen(false);
  return(
    <div>
  <TextField 
   label="Select Category" 
   placeholder='Select Category'
   size='small'
   select value={category} 
   onChange={handleCategorySelectChange}
   fullWidth
   required
   >
    <MenuItem value="c1" onClick={()=>handleOpen('c1')}>Category1</MenuItem>
    <MenuItem value="c2"onClick={()=>handleOpen('c2')}>Category2</MenuItem>
    <MenuItem value="c3" onClick={handleOpen}>Category3</MenuItem>
   </TextField>
   <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
   <Box sx={style}>
     
     {data.map((values)=>{ 
      const {id,category,title} = values
      return(
      <Typography key={id} id="modal-modal-title" variant="h6" component="h2">
       {title}
     </Typography>
      )
     })}
   </Box>
 </Modal>
 </div>
 )
}