This project was developed to demonstrate React functionality and how React Components interact with themselves.

Some practices adopted was:

- Every React Component was developed using Functional Language rather than inheritance.
- The folders and components was separated by most reasonable meaning.
- I used Material-UI React Library to build most responsive, beautiful and cleaning components.
- React routes with *path param* was made.
- Default 404 Page was implemented.

# Goal

This apllication consists in a React Application to search GitHub information based on username.

The main screen has just only an input field to type a GitHub username. Whether you type and submit the request you will see a page with the user information or a *NOT FOUND Page* if the user doesn't exist.

When you see the user information you may click to see either the user repositories or starred repositories and it will show some repositories information including an option to open the Github URL.

# How to install

## Developer Environment

1. `git clone https://github.com/ekiametis/react-github-application.git react-application` - Clone this repository
2. `cd react-application` - Enter in the project folder
3. `npm install` - Install dependencies
4. `npm start` - Start application
5. Now the react-scripts will open for you a new TAB in your default browser to see the application running at `http://localhost:3000`

## Production Environment

1. `git clone https://github.com/ekiametis/react-github-application.git react-application` - Clone this repository
2. `cd react-application` - Enter in the project folder
3. `npm install` - Install dependencies
4. `npm install -g serve` - Install this global dependency
5. `npm run build` - Build this react application
6. `serve -s build` - Run the built application and probably you can start the application in your browser at `http://localhost:5000`