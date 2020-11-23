import React, { useState } from 'react';
import { Route, Switch as Wrapper, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Paper, Typography, Switch} from '@material-ui/core';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import DenseTable from './Table';
import Drawer from './Drawer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const history = useHistory()

  const theme = createMuiTheme({
    palette:{
      type: (darkMode) ? 'dark' : 'light',
     primary:lightBlue
    }
  })

  return (
  <ThemeProvider theme={theme}>
    <Paper  square>
      <div className="App">
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
        <Typography variant="h1">Lrn material UI pr </Typography>
        <Button color="primary" variant="contained" onClick={() => history.push('/admin')}>Click Me</Button>
      </div>
      <DenseTable />
    </Paper>
  </ThemeProvider>
  );
}

const Routes = () => {
  return ( 
   <Wrapper>
      <Route exact path="/" component={App} />
      <Route exact path="/admin" component={Drawer} />
   </Wrapper>
    )
}
export default Routes;
