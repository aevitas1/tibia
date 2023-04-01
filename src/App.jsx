import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./theme/Theme";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
