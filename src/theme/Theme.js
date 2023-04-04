import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import MuiTextField from './MuiTextField'
import MuiTableCell from './TableStyle'
import MuiCheckbox from "./MuiCheckbox";

export const Theme = createTheme({
    palette,
    typography,
    components: {
        MuiTextField,
        MuiTableCell,
        MuiCheckbox
    },
});