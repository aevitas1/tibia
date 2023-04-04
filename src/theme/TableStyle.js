const TableStyle = {
    '.MuiTable-root': {
        backgroundColor: "#303030",
        '.MuiTableHead-root': {
            backgroundColor: "#151515",
            '.MuiTableCell-root': {
                textAlign: "center"
            }
        },
        '.MuiTableBody-root': {
            '.MuiTableRow-root': {
                '&:nth-of-type(odd)': { backgroundColor: "#505050" },
                '.MuiTableCell-root': {
                    textAlign: "center"
                }
            }
        }

    }

}

export default TableStyle;