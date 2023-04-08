const MuiCheckbox = {
    styleOverrides: {
        root: {
            ".MuiSvgIcon-root": {
                "&[data-testid='CheckBoxIcon']": {
                    position: "relative",
                    path: {
                        fill: "#151515",
                        color: "#fafafa",
                    },
                },
            },
            zIndex: "1",
            "&::after": {
                content: "''",
                position: "absolute",
                width: "40%",
                height: "40%",
                left: "50%",
                top: "50%",
                zIndex: "-1",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fafafa",
                opacity: "1",
            },
        }
    }
}

export default MuiCheckbox;