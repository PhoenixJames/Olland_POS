import Grid from '@mui/material/Grid'
import {Table} from './Table'
import {Menu} from './Menu'
import { Button, CardContent, TextField, Typography,Box } from '@mui/material'
import {Card} from '@mui/material'
import React, { useState } from 'react'
import {Test} from '../../module'
import { Category } from './Category'

export const AllSelect = () => {
 const [table,setTable] = useState<string>("");
 const [menu,setMenu] = useState<string>("");
 const [category,setCategory] = useState<string>("");
 const [saveSelect,setSaveSelect]= useState<Test[]>([]);


 const handleTableSelectChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
  setTable(event.target.value as string)
 }

 const handleMenuSelectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setMenu(event.target.value as string)
 }

 const handleCategorySelectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setCategory(event.target.value as string)
 }

 const handleSave = () =>{
 setSaveSelect([...saveSelect,{table:table,menu:menu}])
 }
 console.log({saveSelect})

 return(
  <Grid>
   <Typography
   gutterBottom
   variant='h5'
   align='center'
   >
    SelectForm
   </Typography>
   <Box style={{maxWidth:600,margin:"0 auto",padding:"20px 5px"}}>
     <form>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
        <Table table={table} setTable={setTable} handleTableSelectChange={handleTableSelectChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Menu menu={menu} setMenu={setMenu} handleMenuSelectChange={handleMenuSelectChange}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <Category category={category} setCategory={setCategory} handleCategorySelectChange={handleCategorySelectChange}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <Button fullWidth variant="outlined" onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
     </form>
   </Box>
   
   
   
  </Grid>
 )
}