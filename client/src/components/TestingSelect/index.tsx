import Grid from '@mui/material/Grid'
import {Table} from './Table'
import {Menu} from './Menu'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import {Test} from '../../module'

export const AllSelect = () => {
 const [table,setTable] = useState<string>("");
 const [menu,setMenu] = useState<string>("");
 const [saveSelect,setSaveSelect]= useState<Test[]>([]);


 const handleTableSelectChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
  setTable(event.target.value as string)
 }

 const handleMenuSelectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setMenu(event.target.value as string)
 }

 const handleSave = () =>{
 setSaveSelect([...saveSelect,{table:table,menu:menu}])
 }
 console.log({saveSelect})

 return(
  <Grid>
   <Table table={table} setTable={setTable} handleTableSelectChange={handleTableSelectChange} />
   <Menu menu={menu} setMenu={setMenu} handleMenuSelectChange={handleMenuSelectChange}/>
   <Button onClick={handleSave}>Save</Button>
  </Grid>
 )
}