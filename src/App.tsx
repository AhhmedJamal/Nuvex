import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    setStart(true);
    setTimeout(() => {
      setStart(false);
    }, 2000);
  }, []);
  return (
    <div className="bg-neutral-100 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      {start ? (
        <SplashScreen />
      ) : (
        <div
          className={`container m-auto overflow-y-scroll sm-h-[90vh] h-screen px-0 sm:px-8 pb-4 `}
        >
          <Outlet />
          <BottomBar />
        </div>
      )}
    </div>
  );
}

export default App;
