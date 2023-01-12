import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button, form } from 'react-bootstrap';
import InfoForm from './Component.js/InfoForm';
import TaskTracker from './Component.js/TaskTracker';


function App() {

  return (
    <div className="container">
      <TaskTracker />
      {/* <InfoForm /> */}
        
    </div>
  );
}

export default App;
