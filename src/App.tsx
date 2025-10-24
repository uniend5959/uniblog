import { RouterProvider } from "react-router-dom";
import route from "./route/route";

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={route} />
      </div>
    </div>
  );
}

export default App;
