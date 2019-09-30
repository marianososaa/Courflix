import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Carousel from './components/Carousel';

class App extends React.Component{

  constructor(props) {  	
    super(props);
    
    this.state = {
      result:[]
    };
  }
  async componentDidMount() {
      const url = "http://localhost:3001/api/carouseles";
      const result = await fetch(url);
      const resultJson = await result.json();

      this.setState({
        result : resultJson.assets
      })
  }
  render(){
    return (
      <React.Fragment>
        <Header/>
        <Banner
          title="ORIGINAL DE NETFLIX"
          subtitle="BLACK SUMMER"
          tdescription="Ve la temporada 1"
          idescription="Los muertos viven y cazan al predador de predadores.
          Sin refugios seguros ni personas confiables, solo queda sobrevivir."/>
          <Carousel products={this.state.result} />
      </React.Fragment>
    );
  }
}

export default App;
