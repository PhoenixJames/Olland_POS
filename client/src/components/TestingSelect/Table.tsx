import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

interface TableProps {
 table: string;
 setTable:React.Dispatch<React.SetStateAction<string>>
 handleTableSelectChange: (event:React.ChangeEvent<HTMLInputElement>)=> void;
}

export const Table = ({table,setTable,handleTableSelectChange}:TableProps) => {
 
 return(
   <TextField 
   label="Select Table" 
   placeholder='Select Table'
   size='small'
   select value={table} 
   onChange={handleTableSelectChange}
   fullWidth
   required
   >
    <MenuItem value="t1">Table1</MenuItem>
    <MenuItem value="t2">Table2</MenuItem>
    <MenuItem value="t3">Table3</MenuItem>
   </TextField>
 )
}