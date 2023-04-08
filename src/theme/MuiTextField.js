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
                color: "#fff",
                '.MuiOutlinedInput-notchedOutline': {
                    border: "1px solid rgba(255, 255, 255, 0.85)",
                },
            },
            '.MuiFormLabel-root.MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.85)',
            },
        },
    }
}

export default TextField;