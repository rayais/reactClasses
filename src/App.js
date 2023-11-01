import {Component} from 'react';


class  App extends Component {
  constructor()
    {
      super();
      this.state={
        fullName:"C.ronaldo",
        bio:"Cristiano Ronaldo is a professional soccer player who has set records while playing for the Manchester United, Real Madrid and Juventus clubs, as well as the Portuguese national team.", 
        imgSrc:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-971463110.jpg?resize=1200:*", 
        profession:"Professional coccer player",
        show:false
      }
    }
    updateshow ()
    {
      
      //console.log(this.state.show);
      this.state.show?this.setState({show:false}):this.setState({show:true})
    }
  render(){
  
    return (
      <div className="App">
        <button onClick={()=>this.updateshow()}>Show</button>
        {this.state.show && (
          <div className='card'>
            <h1>{this.state.fullName}</h1>
            <div className='incard'>
              <img src={this.state.imgSrc} alt={this.state.fullName}/>
              <p>{this.state.bio}</p>
            </div>
            <h3>{this.state.profession}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
