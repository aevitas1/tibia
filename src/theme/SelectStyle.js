// Custom styling for the Select component
export const SelectMenuStyles = {
    sx: {
        "& .MuiMenu-paper": {
            backgroundColor: "transparent",
            color: "text.light",
        },
        "& .MuiMenuItem-root:hover": {
            backgroundColor: "rgba(0,0,0,0.45)",
            color: "text.white",
        },
        "& .Mui-selected": {
            backgroundColor: "rgba(0,0,0,0.45)",
            color: "text.white",
        },
    },
}

export const SelectStyles = {
    color: "#fff",
    width: "210px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
    },
    ".MuiSvgIcon-root": {
        color: "#fff",
    },
    "&:before": {
        borderBottom: `1px solid black`,
    },
    "&:hover": {
        ":before": {
            borderBottom: `1px solid black`,
        },
    },
    "& .MuiMenuItem-root": {
        backgroundColor: "dark.primary",
    },
    "& .MuiMenu-paper": {
        backgroundColor: "dark.primary",
    },
}