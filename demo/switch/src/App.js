import React, { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  let a;
  let b;
  if (toggle) {
    a = useState(8);
    b = useState("Hello");
  } else {
    b = useState();
    a = useState();
  }

  return (
    <section>
      <div>{a}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div>{b}</div>
    </section>
  );
}

export default App;
