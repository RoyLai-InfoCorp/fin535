## Optional: Hot reload and execute

To avoid the hassle of constantly changing your JS file and re-running node again, you can use a hot reload package that monitor file changes and execute a node JS file during the course of your lab.

### Install `nodemon`

```sh
npm i --save-dev nodemon
```

### Add nodemon configuration to `package.json`

Watch the dir `src` and execute `npm run index.js`

```package.json
    "nodemonConfig": {
        "exec": "node src/index.js",
        "watch": "src/*.js"
    },
```

### Add script command to `package.json`

```package.json
    "scripts": {
        "watch": "nodemon",
    },
```

### Using nodemon

1. Start nodemon

    ```sh
    npm run watch
    ```

2. Write your code in `index.js` and save the changes.

---