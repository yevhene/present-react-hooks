import React, { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  let a;
  let b;
  if (toggle) {
    a = useState(8);
    b = useState("Hello");
  } else {
    b = useState(true);
    a = useState(28);
  }

  return (
    <section>
      <h1>{a}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h3>{b}</h3>
    </section>
  );
}

export default App;
