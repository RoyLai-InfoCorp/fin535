# Display API data in Front-End

Most modern web applications are no longer developed using vanilla Javascript. Instead, they use web frameworks that can better capitalise on Javascript skills to develop powerful and aesthetic front-end UI.

This section will create a web-based front-end UI display the ETHUSD daily and moving average prices using the API service created in lesson 10.

## Create a barebone React App from Scratch

1. Create a lab directory.

    ```sh
    cd /lab
    ```

2. Create a React app and call it `fin535-react`

    ```sh
    npx create-react-app fin535-react
    ```

    This will create a directory fin535-gba-react in /dev which contains the boilerplate code for a standard react app.

3. Go into the `fin535-react` directory and run VS Code.

    ```sh
    cd fin535-react
    code .
    ```

4. You should see a directory structure similar to the ones below.

    ```txt
    /node_modules
    /public
    /src
    package.json
    README.md
    ```

5. Delete the directory `/public` and `/src`. We don't need these boilerplate code because we will be creating from scratch.

6. From `/fin535-react`, create the sub directory `/public` and from Visual Code create the file `index.html`

    ```txt
    /public
        index.html
    ```

7. From VS Code, type `!` and press ENTER. VS Code contains a short-cut called `emmet` that will generate the basic HTML boilerplate code for you.
   Change the title to `Fin535 React` and add `<div id='root' />` inside the HTML body.
   This will create an anchor in the web application called `root` which the React Application will render the application onto.

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Fin535 ChronAcle React</title>
        </head>
        <body>
            <div id="root" />
        </body>
    </html>
    ```

8. From `fin535-react`, create the sub directory `/src` and from Visual Code create the file `index.js`

    ```txt
    /public
        index.html
    /src
        index.js
    ```

    Add the following code into `index.js`

    ```js
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(<App />, document.getElementById("root"));
    ```

9. From VS Code, create another file `App.jsx` in the `/src` directory.

    ```txt
    /public
        index.html
    /src
        index.js
        App.jsx
    ```

    Add the following code into `App.jsx`

    ```js
    import React from "react";

    const App = () => {
        return <div>hello</div>;
    };

    export default App;
    ```

    - This creates a function App which is the starting point for your application.

    - Notice that this function contains not just Javascript but includes HTML syntax as well.

    - This is because React uses a modified Javascript syntax called JSX which allows you to use both Javascript and HTML at the same time to create front-end components.

    - React will then transpile(transform and compile) the code into the Javascript and HTML that the web browser understands and display the content.

    - When using this syntax, the resulting function is called a `Functional Component` in React terminology.

    - The App functional component from the code above does nothing more than replacing the `<div id='root' />` in `index.html` with `<div>hello</div>`

10. Run the react app and open your browser at http://localhost:3000

    ```sh
    npm start
    ```

    You should see `hello` from the browser. That is all that is to creating a barebone react project.

## Material UI library

There are a multitude of front-end UI libraries that can be used with React, in this section, we will show the basics of using Material UI library. This is not a course on front-end development and design but give you a starting point on front-end UI components. You are encouraged to read online references on UI library if you need more details.

1. Install material UI (MUI) and start react. If your react services is still running, you can exit it using CTRL+C.

    ```sh
    npm i @mui/material @mui/icons-material @emotion/react @emotion/styled
    npm start
    ```

### Create a Title

2. Open `App.js` and import a `Typography` component from MUI.
   A Typography is simply a component used for displaying text.

    ```js
    import { Typography } from "@mui/material";
    ```

3. Replace `<div>hello</div>` using Typography and save the file.

    ```js
    const App = () => {
        return <Typography>hello</Typography>;
    };
    ```

    NOTE: There is no need to restart react service because it will perform a hot reload and update the browser when you make any changes and saving the file.

4. It should still show hello.

5. Change the variant of Typography to h3 and change hello to `Fin535 Lab 11`.

    ```js
    const App = () => {
        return <Typography variant='h3'>Fin535 Lab 11</Typography>;
    };
    ```

### Create a fragment

1.  Create a fragment. Because the functional component must only return 1 high-level component, we cannot add more components directly to the code. In order to do that, we will create a single high-level component using a fragment, ie. empty tags then move the components into the fragment.

    ```js
    const App = () => {
        return (
            <>
                <Typography id='title' variant='h3'>
                    Token Balance
                </Typography>
            </>
        );
    };
    ```

### Create a Button

1. Import a Button component and an Icon.

    ```js
    import { Button } from "@mui/material";
    import { AutoGraphOutlined } from "@mui/icons-material";
    ```

2. Add Button component with the text `Show Tokens` and the icon.
   Reference: https://mui.com/material-ui/react-button/

    ```jsx
    <Button
        variant='outlined'
        size='large'
        startIcon={<AutoGraphOutlined />}
        onClick={handleClick}
    >
        Show Tokens
    </Button>
    ```

## 3. Basic Look and Feel

1. Import Grid, Container, CssBaseline, createTheme and ThemeProvider from MUI.

    ```js
    import { Container, CssBaseline } from "@mui/material";
    import { createTheme, ThemeProvider } from "@mui/material/styles";
    ```

2. Create a dark theme before the return statement.

    ```js
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    ```

3. Wrap all the components in the ThemeProvider with the dark theme and add the CssBaseline component which will provide the basic CSS styles. We will also wrap the components in a Container to give some padding to the sides of the page and add some margin to the top.

    ```js
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant='h3'>Token Balance</Typography>
            ...
        </ThemeProvider>
    </>
    ```

4. Wrap all the components under CssBaseline within the Container component for the layout by applying CSS flexbox style.

    ```js
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
        <Typography variant='h3'>Fin535 - Lab 10</Typography>
        <Button
            size='large'
            variant='outlined'
            startIcon={<AutoGraphOutlined />}
            onClick={handleClick}
        >
            Show Chart
        </Button>
    </Container>
    ```

## 4. Add Chart component

1. Add a chart component. We will use React ChartJS 2 (https://www.npmjs.com/package/react-chartjs-2)

    ```js
    npm i react-chartjs-2
    ```

2. Import and setup the chart component

    ```js
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
    ```

3. Add the component to the UI

    ```js
      return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container
                    ...
                    {data && <Line options={options} data={data} />}
                </Container>
            </ThemeProvider>
        </>
    );
    ```

## 5. Add OnClick Event Handler

1. Create onClick handler that will be called when button is clicked.

    ```js
    const handleClick = async () => {
        const totalDays = 300;
        let response;
    };
    ```

2. Get the dates and daily price for last 300 days from the API service

    ```js
    const handleClick = async () => {
        ...
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

    ```

3. Add the series to the data state which will be used by the chart component

    ```js
    const handleClick = async () => {
        ...

        if (dates) {
            setData({
                labels: dates,
                datasets: [dailySeries, ma10Series, ma30Series],
            });
        }
    }
    ```
