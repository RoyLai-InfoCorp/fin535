import React, { useState } from "react";
import { Container, Button, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AutoGraphOutlined } from "@mui/icons-material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import json from "./fin535-ethusd.json";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
                color: "rgb(132255, 132, 132)",
            },
        },
        title: {
            display: true,
            text: "ETHUSD Last 300 days",
        },
    },
};

const App = () => {
    const [data, setData] = useState();
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const handleClick = async () => {
        const totalDays = 300;
        try {
            let result = json.result["86400"];
            const dates = result
                .slice(0, totalDays)
                .reverse()
                .map((x) => x[0]);
            const dailySeries = {
                label: "daily",
                data: result
                    .slice(0, totalDays)
                    .reverse()
                    .map((x) => x[4]),
                borderColor: "rgb(132, 255, 99)",
            };
            if (dates) {
                setData({
                    labels: dates,
                    datasets: [dailySeries],
                });
            }
        } catch (error) {
            console.error("error encountered while loading JSON data", error);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5,
                        gap: 2,
                    }}
                >
                    <Typography
                        variant='h3'
                        sx={{ width: "100%", textAlign: "center" }}
                    >
                        Fin535 - Lab 10
                    </Typography>
                    <Button
                        size='large'
                        variant='outlined'
                        startIcon={<AutoGraphOutlined />}
                        onClick={handleClick}
                    >
                        Show Chart
                    </Button>
                    {data && <Line options={options} data={data} />}
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
