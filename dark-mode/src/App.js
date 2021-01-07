import './App.css';

function App() {
  return (
    <main>
      <h1>Dark mode</h1>
      <p>Dark mode can be set by changing to dark mode on Windows/Mac</p>
      <ul>
          <li>Windows: https://www.pcmag.com/how-to/how-to-enable-dark-mode-in-windows-10</li>
          <li>Mac: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/</li>
      </ul>
      <p>Or by toggling the button below</p>
      <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
      </label>
    </main>
  );
}

export default App;
