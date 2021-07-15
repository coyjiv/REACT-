import React from "react";
import './App.css';
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFirstModalOpen:false,
            isSecondModalOpen:false,
        }
    }
    handleFirstModalOpen=()=>{
        this.setState((state)=>({
            ...state,
            isFirstModalOpen: !state.isFirstModalOpen
        }))
    }
    handleSecondModalOpen=()=>{
        this.setState((state)=>({
            ...state,
            isSecondModalOpen: !state.isSecondModalOpen
        }))
    }
  render(){
      return (
          <div className="App">
              <div className="btn-wrapper">
                  <Button text="Open first modal" onClick={this.handleFirstModalOpen} backgroundColor="#B7F564" className="btn-open-modal"/>
                  <Button text="Open second modal" onClick={this.handleSecondModalOpen} backgroundColor="#F52F15" className="btn-open-modal"/>
                  <Modal isOpen={this.state.isFirstModalOpen} onCancel={()=>this.handleFirstModalOpen} header="Do you want to delete this file?" closeButton={false} text="Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?" actions={
                  <>
                      <h2>!!!!!!</h2>
                      <Button text="Ok" className="btn-ok" onClick={this.handleFirstModalOpen}/>
                      <Button text="Cancel" className="btn-cancel" onClick={this.handleFirstModalOpen}/>
                      </>
                  }/>
                  <Modal isOpen={this.state.isSecondModalOpen} onCancel={()=>this.handleSecondModalOpen} header="Do you want to upload this file?" closeButton={true} text="something else" actions={
                      <>
                      <h2>Ogo</h2>
                      <Button text="Ok" className="btn-ok" onClick={this.handleSecondModalOpen}/>
                      <Button text="Cancel" className="btn-cancel" onClick={this.handleSecondModalOpen}/>
                      </>
                  }/>
              </div>
          </div>
      );
  }
}

export default App;
