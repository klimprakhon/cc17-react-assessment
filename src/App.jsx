import AuthContextProvider from "./contexts/AuthContext";
import TodoContextProvider from "./contexts/TodoContext";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <TodoContextProvider>
          <Router />
        </TodoContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
