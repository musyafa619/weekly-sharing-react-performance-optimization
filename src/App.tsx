import React, { useCallback, useMemo, useState } from "react";
import "./App.css";

type UserType = {
  name: string;
};

function App() {
  const [count, setCount] = useState(0);

  // eslint-disable-next-line
  const [user, setUser] = useState<UserType>({
    name: "john",
  });
  const updateCount = () => setCount((current) => current + 1);
  const memorizedFunction = useCallback(updateCount, []);

  const heavyProcess = (user: UserType) => {
    sleep(1000);
    return user;
  };

  const userProps = useMemo(() => heavyProcess(user), [user]);

  console.log("Parent component render");
  return (
    <div className="App">
      <h2>Parent Component</h2>
      <p>{user.name}</p>
      <button onClick={updateCount}>Click {count}</button>
      <MemorizeComponent
        title="Parent"
        user={userProps}
        updateCount={memorizedFunction}
      />
    </div>
  );
}

// function compare(
//   prevState: { title: string; user: { name: string } },
//   nextState: { title: string; user: { name: string } }
// ) {
//   return JSON.stringify(prevState) === JSON.stringify(nextState);
// }

const ChildComponent: React.FC<{
  title: string;
  user: UserType;
  updateCount: () => void;
}> = ({ title, user, updateCount }) => {
  // sleep(1000);
  console.log("Child component render");
  return (
    <div>
      <h3>Child Component {title}</h3>
      <h5>Hello child Component of {user.name}</h5>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
};

const MemorizeComponent = React.memo(ChildComponent);

const sleep = (millisecond: number) => {
  const time = Date.now();
  let currentTime = 0;

  do {
    currentTime = Date.now();
  } while (currentTime - time < millisecond);
};

export default App;
