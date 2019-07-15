import React from 'react';
import TopNav from './TopNav.js';
import FrontPage from './FrontPage.js';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      user: null,
      groups: [{img:"/images/axeDouble.png", name:"test", summary: "here are some facts"}],
      page: "FrontPage"
    }
  }



  render(){
  return (
    <div className="App">
    <TopNav
    user={this.state.user}
    />
    {(()=>{
      switch (this.state.page) {

      default:
      return <FrontPage groups={this.state.groups}/>
    }
  })()
  }
    </div>
  );
}
}
export default App;
