import "./tailwind.css";

function App() {
  return (
    <div className="App min-h-screen bg-green flex h-screen ">
      <div className="font-main text-primary m-auto">
        <p class="text-2xl">Hello!</p>
        <p class="italic">
          I'm <span class="text-5xl font-semibold">Nancy Wu</span>
        </p>
        <p className="font-code">
          I’m a penultimate year Computer Science and Commerce student at the
          University of Auckland. Learn more about my experience and passion
          projects below!
        </p>
      </div>
    </div>
  );
}

export default App;
