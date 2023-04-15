import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ModeContext from './context/ModeContext'
import ActiveMenuContext from './context/ActiveMenuContext'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TREADING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class App extends Component {
  state = {isDark: false, activeMenu: activeMenuConstants.home}

  changeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeMenu = activeMenu => {
    this.setState({activeMenu})
  }

  render() {
    const {isDark, activeMenu} = this.state
    return (
      <ModeContext.Provider value={{isDark, changeMode: this.changeMode}}>
        <ActiveMenuContext.Provider
          value={{activeMenu, changeMenu: this.changeMenu}}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ActiveMenuContext.Provider>
      </ModeContext.Provider>
    )
  }
}

export default App
