import React from "react";
import './App.css';
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFirstModalOpen: false,
            isSecondModalOpen: false,
        }
    }
    handleFirstModalOpen() {
        this.setState((state) =>({...state, isFirstModalOpen: !state.isFirstModalOpen}))
    }
    handleSecondModalOpen() {
        this.setState((state) => ({...state, isSecondModalOpen: !state.isSecondModalOpen}))
    }
    render() {
        return (
            <div className="App">
                <Modal isOpen={this.state.isFirstModalOpen} children='first modal window' onCancel={() => this.handleFirstModalOpen()} title='Modal Window'/>
                <Modal isOpen={this.state.isSecondModalOpen} children='second modal window' onCancel={() => this.handleSecondModalOpen()} title='Modal Window'/>
                <Button name='Open first modal' onClick={this.handleFirstModalOpen.bind(this)} className='btn btnFirstModal'/>
                <Button name='Open second modal' onClick={this.handleSecondModalOpen.bind(this)} className='btn btnSecondModal'/>
            </div>
        );
    }
//     handleFirstModalOpen(){
//         this.setState((state)=>({
//             ...state,
//             isFirstModalOpen: !state.isFirstModalOpen
//         }))
//     }
//     handleSecondModalOpen(){
//         this.setState((state)=>({
//             ...state,
//             isSecondModalOpen: !state.isSecondModalOpen
//         }))
//     }
//   render(){
//       return (
//           <div className="App">
//               {/*<div className="btn-wrapper">*/}
//                   <Button name="Open first modal" onClick={this.handleFirstModalOpen.bind(this)}></Button>
//                   <Button name="Open second modal" onClick={this.handleSecondModalOpen.bind(this)}></Button>
//               {/*</div>*/}
//               <Modal isOpen={this.state.isFirstModalOpen} onCancel={()=>this.handleFirstModalOpen()}/>
//               <Modal isOpen={this.state.isSecondModalOpen} onCancel={()=>this.handleSecondModalOpen()}/>
//           </div>
//       );
//   }
}

export default App;
