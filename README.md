# Full-Stack-Weather-API-Web-App
In this repo, I have built a full stack web app using Node.js and Express that displays the weather for user requested city using the open weather map api.


## Weather App Demo
![Alt Text](https://github.com/drdataSpp/Full-Stack-Weather-API-Web-App/blob/master/Web%20App%20Demo.gif)


## What is this app about?

- This is a full-stack web app built using:
  - Front-End: HTML, CSS & Javascript
  - Back-End: Node.js & Express
  - Open Weather Map API 
 
- Input for the app: City Name from the web app user.
- Output from the app: Displays the current temperature and the weather description of the user entered city using the **Open Weather Map API**.


## Steps to set-up web development environment using command prompt
1. Make a new directory: `mkdir DIRECTORY_PATH`
2. Change the current directory to the newly created directory: `cd NEW_DIRECTORY_PATH`
3. Create a new javascript file: `touch app.js`
4. Create a new HTML file: `touch index.html`
5. Create a new CSS file: `touch style.css`
6. initialize the npm: `npm init`
8. Install Express.js: `npm install express`
9. Install body parser: `npm install body-parser`
10. Install request: `npm install request`


## Steps to set-up Node.js and Express
`const express = require('express');` <br>
`const app = express();`

### To bind and listen the connections on the specified host and port.
`app.listen(PREFERRED_PORT_NUMBER);`

### To run the website
After performing the above steps and editing the contents in HTML, CSS and Javascript files: <br>
- Type in command prompt:
  - `node app.js` or
  - `nodemon app.js` 
  
- Open your preferred browser:
  - search for `localhost:PORT_NUMBER`
