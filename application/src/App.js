import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/appBar.jsx';
import Menu from './components/menu.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: pink,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {menuClass: ""};

    this.menuHandler = this.menuHandler.bind(this); 
  }
  menuHandler() {
    var newClass = this.state.menuClass === "active" ? "" : "active";

    this.setState({menuClass: newClass});
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Menu activeClass={this.state.menuClass} />
          <ButtonAppBar clickHandler={this.menuHandler} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
