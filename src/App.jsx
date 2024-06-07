import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log(`Mouse position: ${clientX}, ${clientY}`);
      setPositionCursor({ x: clientX, y: clientY });
    };

    if (isEnabled) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
    }
  }, [isEnabled]);

  return (
    <main>
      <div className="circle" style={{transform: `translate(${positionCursor.x}px, ${positionCursor.y}px)`}}></div>
      <button
        className={`${isEnabled ? "active" : ""}`}
        onClick={() => setIsEnabled(!isEnabled)}
      >{`${isEnabled ? "Disable" : "Enable"} mouse tracking`}</button>
    </main>
  );
}

export default App;
