import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <header id="header">
        <div id="logo">
          <h1>Leave a message!</h1>
        </div>
        <nav>
          <ul id="head-ul">
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <div id="message-board">
          <h2> Messages:</h2>
          <div id="messages-display">
            <ul>
              <li>message</li>
              <li>message</li>
              <li>message</li>
              <li>message</li>
              <li>message</li>
              <li>message</li>
            </ul>
          </div>
          <div id="add-message">
            <h3>Post a message!</h3>
            <form>
              <input type="text" required id="new-meesage-input"/>
              <input type="submit" required value="post" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
