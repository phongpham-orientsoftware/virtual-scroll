import { useEffect, useState } from "react";

import Viewport from "./components/Viewport";

import { getData } from "./utils/generateUsers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = getData(1000000);

    setUsers(data);
  }, []);

  return <Viewport height={window.innerHeight} data={users} nodePadding={2} />;
}

export default App;
