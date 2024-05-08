import AuthContextProvider from "./contexts/AuthContext";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
