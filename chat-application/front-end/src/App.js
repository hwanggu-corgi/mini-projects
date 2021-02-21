import './App.css';
import { SubmitButton } from './components/Buttons';
import { ChatTextArea } from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <SubmitButton/>
      <ChatTextArea/>
    </div>
  );
}

export default App;
