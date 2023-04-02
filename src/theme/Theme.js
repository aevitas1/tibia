import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import MuiTextField from './MuiTextField'

export const Theme = createTheme({
    palette,
    typography,
    components: {
        MuiTextField,
    },
});