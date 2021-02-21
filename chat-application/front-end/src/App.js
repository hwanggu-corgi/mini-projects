import './App.css';
import Chatbox from './components/ChatBox';
import { SubmitButton } from './components/Buttons';

function App() {
  return (
    <div className="App">
      <ChatBox/>
      <SubmitButton/>
    </div>
  );
}

export default App;
