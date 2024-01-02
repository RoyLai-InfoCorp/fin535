# Writing Javascript

## 1. Writing Javascript in Browser

Javascript is a web browser language therefore most modern browser supports writing Javascript in the browser(client-side). We will use Google Chrome or Microsoft Edge for doing this.

1. Open Chrome/Edge Built-In DevTools

    **For Windows Chrome/Edge browser**
    1. Open browser.
    2. Press F12

    **For macOS Chrome**
    1. Open browser.
    2. Press CTRL+SHIFT+J
2. Select `Console` tab at the top bar of the DevTools Console.
3. Change `Console` fontsize by holding `CTRL` key and use mouse to scroll up.
4. Write a simple javascript statement in the console.

    ```js
    > console.log('hello world')
      hello world
    ```

## 2. Writing Javascript in Node.JS console

Javascript can also be written without the browser on the Node.JS platform(server-side). Almost all Javascript code written for browser can be used on Node.JS and vice versa. The exception are for functionalities that are primarily environment specific (for example file system) - server environment vs browser environment.

The Node.JS platform is available on Windows and Linux, but for the purpose of this course, we will be using the running the version Linux-based environment.

1. Open your terminal

    **For Windows**
    Open Windows Terminal and click on the dropdown button. Select Linux.

    **For macOS**
    In the Finder, open /Applications/Utilities folder, then double-click Terminal.

2. Run node console.

```sh
$ node
#
```

    This will run Node in console mode and you should see a `>` prompt.

3. Write a simple Javascript

```js
> console.log('hello world');
// hello world
```

4. Exit node console.

```js
> .exit
```

## 3. Running Javascript file from Node.JS

Javascript files can be loaded and run in the Node.JS platform via the commandline. This will be the mode we will be using the most for this course.

To do this, you will need to use a text editor. The most prevalent text editor used for writing Javascript is currently Visual Studio Code (VS Code). There are instructions and tips given in this this course designed for VS Code but you are free to choose your own favourite text editor.

1. Create a file `index.js` in VS Code.

   ```js
   console.log('hello world');
   ```

2. Run the file using Node.JS in terminal

  ```sh
  $ node index.js
  # hello world
  ```
