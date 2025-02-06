import Button from '@mui/material/Button'
import  { Home as HomeIcon } from '@mui/icons-material';
import { pink } from '@mui/material/colors';



function App() {
  return (
    <>
      <div>trandangkhoa</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br></br>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
