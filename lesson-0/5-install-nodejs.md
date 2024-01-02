# Install Node.JS

## Video:

- Install Node.JS: https://youtu.be/rOu-XbY9abA

## Instructions

1. Open Windows Terminal.

2. Prepare packages.

   - The first command is to get the latest list of packages (`apt update`) and upgrade existing packages (`apt upgrade`). The commands has to be executed as a privileged user (`sudo`).

   - The second command is needed to install basic build tools for some node packages to be built during installation.

   ```sh
   $ sudo apt update && sudo apt upgrade -y
   $ sudo apt install build-essential
   ```

3. Install Node Version Manager

   - This command will download and install the Node Version Manager (NVM). NVM is used to allow the use of different versions of node in case of compatibility issues when running certain packages.

   ```sh
   $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

   **Note:** If encountered the output '\* (HEAD detached at FETCH_HEAD) master' just press 'q' to exit

4. Restart or open a new terminal session.

5. Install Node.js and npm

   - This command will install the latest version of Node.js. It will also install the latest version of Node Package Manager(npm) which is used to download Node packages.

   ```sh
   $ nvm install node --latest-npm
   ```

   NOTE:
   At the time of writing, the latest Node.js version is v17.0.1 and npm is 8.1.0. This version will break certain libraries, such as create-react-app@4.0.3. The following instructions show how to use NVM to switch Node.js to version 16.8.

   ```sh
   $ nvm install 16.8
   Now using node v16.8.0 (npm v7.21.0)
   $ node --version
   v16.8.0
   $ npm --version
   7.21.0
   $ nvm alias default 16.8
   default -> 16.8 (-> v16.8.0)
   ```

6. Install Standard Development Packages

   The command `npm i -g` is used to install the list of packages following it into the global directory in ~/.nvm.

   ```sh
   $ npm i -g typescript bower grunt gulp less sass yarn webpack
   ```

7. Install Hardhat Shorthand

   ```sh
   $ npm i -g hardhat-shorthand
   $ hardhat-completion install
   ```
