import { ThemeProvider } from "@mui/material";
import MaintenancePage from "./pages/MaintenancePage";
import theme from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <MaintenancePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
