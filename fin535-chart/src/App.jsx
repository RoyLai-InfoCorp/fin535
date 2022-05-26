import React, { useState } from "react";
import { Container, Button, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AutoGraphOutlined } from "@mui/icons-material";
import axios from "axios";
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
        let response;

        response = await axios.get(`http://localhost:5050/daily`);
        const dates = response.data
            .slice(0, totalDays)
            .reverse()
            .map((x) => x.date);
        const dailySeries = {
            label: "daily",
            data: response.data
                .slice(0, totalDays)
                .reverse()
                .map((x) => x.price),
            borderColor: "rgb(132, 255, 99)",
        };

        response = await axios.get(`http://localhost:5050/ma/10`);
        const ma10Series = {
            label: "ma10",
            data: response.data
                .slice(0, totalDays)
                .reverse()
                .map((x) => x.price),
            borderColor: "rgb(132, 99, 255)",
        };

        response = await axios.get(`http://localhost:5050/ma/30`);
        const ma30Series = {
            label: "ma30",
            data: response.data
                .slice(0, totalDays)
                .reverse()
                .map((x) => x.price),
            borderColor: "rgb(255, 99, 132)",
        };

        if (dates) {
            setData({
                labels: dates,
                datasets: [dailySeries, ma10Series, ma30Series],
            });
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
