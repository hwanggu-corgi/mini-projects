import './App.css';
import { SubmitButton } from './components/Buttons';
import { ChatTextArea } from './components/ChatTextArea';
import { ChatBox } from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <SubmitButton/>
      <ChatTextArea/>
      <ChatBox/>
    </div>
  );
}

export default App;
