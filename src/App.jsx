import './App.css'
import Slowcomponent from './assets/Slowcomponent';
import ButtonwithModal from './ButtonwithModal';
import RefactorComponent from './RefactorComponent';


function App() {
  
  
  return(
    <>
     <RefactorComponent>
      <>
      <div>
        Soemthing Done here
      </div>

      <div>
        <ButtonwithModal/>
        
      </div>

      <div>
        Something done here
      </div>

      <Slowcomponent/>
      </>
     
     </RefactorComponent>
      
    </>
  );
  
}

export default App





//Want to develop a modal , like ek button click hoga toh ek modal render/open hoga
