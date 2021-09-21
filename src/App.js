import { useEffect, useState } from "react";

import Viewport from "./components/Viewport";

import { getData } from "./utils/generateUsers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = getData(1000000);

    setUsers(data);
  }, []);

  if (users.length === 0) return <div>Loading...</div>;

  return <Viewport height={window.innerHeight} data={users} nodePadding={4} />;
}

export default App;
