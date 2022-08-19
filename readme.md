### TEAM 15 MEMBERS
    Jason (Jinseok) Ahn A01259569
    Johnson Lau A01239870
    Mazin Marwan A01242132
    Raymond Wong A01248576

# Overview

### Structure
root  
├  
├── client2  
├       ├── node_modules  
├       ├── public  
├       ├──  src  
├       ├──  components  
├       ├──  subcomponents  
├       ├──  contexts  
├       ├──  css  
├       ├──  html  
├       ├──  images  
├       ├──  package.json  
├  
├  
├── server  
├       ├──  models  
├       ├──  node_modules     
├       ├──  .gitignore  
├       ├──  cert.pem  
├       ├──  package-lock.json  
├       ├──  server.js  
├   
├──  .gitignore  
├──  package.json  


## REQUIREMENTS
- Languages: Javascript, HTML5, CSS
- Frameworks and Technologies in use: ReactJS version, Nodejs, Express, MaterialUI, Mongodb w/ Mongoose, Selenium
- Preferred IDE: VSCode
- Database being used: Mongodb with Mongoose
- Other software in use: Selenium for testing

## API VERSIONS
- @material-ui/core: ^4.11.4,
- @material-ui/icons: ^4.11.2,
- @testing-library/jest-dom: ^5.12.0,
- @testing-library/react: ^11.2.6,
- @testing-library/user-event: ^12.8.3,
- axios: ^0.21.1,
- bootstrap: ^5.0.1,
- chokidar: ^3.4.3,
- firebase: ^8.6.1,
- jquery: ^3.6.0,
- material-ui: ^0.20.2,
- react: ^17.0.2,
- react-bootstrap: ^1.6.0,
- react-dom: ^17.0.2,
- react-router-dom: ^5.2.0,
- react-scripts: "4.0.3,
- react-scroll: ^1.8.2,
- web-vitals: ^1.1.2"


## SETUP
1. Install all the frameworks and technologies in your directories of choice. Use the most recent stable versions for all of them, where versions are not specified.

2. Create a certificate in a file called "cert.pem" in the "server" folder of the project.

3. Copy firebase keys in a file called ".env.local" in the root folder of the project. These are used in firebase.js and kept in ".env.local" to ensure they aren't public.
```    
    REACT_APP_FIREBASE_API_KEY=KEY_CODE_HERE
    REACT_APP_FIREBASE_AUTH_DOMAIN=KEY_CODE_HERE
    REACT_APP_FIREBASE_PROJECT_ID=KEY_CODE_HERE
    REACT_APP_FIREBASE_STORAGE_BUCKET=KEY_CODE_HERE
    REACT_APP_FIREBASE_APP_ID=KEY_CODE_HERE
```

4. Open a terminal and navigate to the "client2" folder of the project. Type into it `npm install`. This will install all the necesary node packages.
5. Next run `npm run build`, this will create a production build for you to use.

6. Open a terminal and navigate to the "server" folder of the project. Type into it `npm install`. This will install all the necesary node packages.
7. Then, cd back to the root folder and run `npm start` 

## TESTING EXAMPLES
The following Google Sheets document has the Wecycle team's testing history for the initial tests.  
    https://docs.google.com/spreadsheets/d/1_LiLi6Cqp1RVW2F6e-NlEqhlYN5AZoNE_SrXIbej-zA/edit?usp=sharing

### CITATIONS  
- Material UI Drawer Component. Retrieved from https://material-ui.com/components/drawers/  
                                               https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/drawers/SwipeableTemporaryDrawer.js

- Material UI Card Component. Retrieved from https://material-ui.com/components/  

- Material UI Sign Up Component. Retrieved from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js  

- Easter Egg Challenge. Retrieved from https://www.youtube.com/watch?v=wMIARRCox9k  
                                       https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/cards/MediaCard.js

- Template of Copyright blurb. Retrieved from https://material-ui.com/getting-started/templates/  
                                              https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

- Images retrieved from https://unsplash.com/photos/RcqYLVcfNRo  
                        https://www.chalearning.ca/news/nutrition-month-2021-food-care/attachment/pnglot-com-twitter-bird-logo-png-139932/
                        https://kernel.sr/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art/

