const TextField = {
    styleOverrides: {
        root: {
            '.MuiFormHelperText-root': {
                color: 'red',
                fontSize: '12px',
                marginLeft: '0',
                textAlign: 'center',
            },
            '.MuiInputBase-root': {
                borderRadius: '0',
                fontSize: '1rem',
                color: "#fafafa",
                '.MuiOutlinedInput-notchedOutline': {
                    border: "1px solid rgb(190, 190, 190)",
                },
            },
            '.MuiFormLabel-root.MuiInputLabel-root': {
                color: 'rgb(190, 190, 190)',
            },
        },
    }
}

export default TextField;