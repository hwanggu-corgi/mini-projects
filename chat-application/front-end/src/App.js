import './App.css';
import { SubmitButton } from './components/Buttons';
import { ChatTextArea } from './components/ChatTextArea';
import { ChatBox } from './components/ChatBox';
import { MobileNavigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <SubmitButton/>
      <ChatTextArea/>
      <ChatBox/>
      <MobileNavigation/>
    </div>
  );
}

export default App;
