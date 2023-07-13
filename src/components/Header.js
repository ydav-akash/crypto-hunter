import { AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme } from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { useCryptoState } from "../CryptoContext"; // Assuming useCryptoState is a hook that replaces CryptoState

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
            mode: "dark", // Material-UI v5 uses mode instead of type for theme mode
        },
    }
});

function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = useCryptoState(); // Updated to use useCryptoState instead of CryptoState

    const history = useHistory();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => history.push(`/`)}
                            variant="h6"
                            className={classes.title}
                        >
                            Crypto Hunter
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                        <Select
                            variant="outlined"
                            label="Currency" // Updated label prop for Select component
                            id="demo-simple-select"
                            value={currency}
                            sx={{ width: 100, height: 40, marginLeft: 0 }} // Updated style prop to sx prop
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
