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

2. Copy the following certificate into a file called "cert.pem" in the "server" folder of the project. This key allows us to connect to the Mongodb database for CRUD operations.  
```
    -----BEGIN CERTIFICATE-----
    MIIFDDCCAvSgAwIBAgIIS2tv+E2Zoq0wDQYJKoZIhvcNAQELBQAwSTEhMB8GA1UE
    AxMYNjA5MTg0ZTM3MzgwOWY3ZDIzNjgxNTNkMQ4wDAYDVQQLEwVBdGxhczEUMBIG
    A1UEChMLTW9uZ29EQiBJbmMwHhcNMjEwNTA0MTYzMzQ3WhcNMjEwODA0MTczMzQ3
    WjAXMRUwEwYDVQQDEwxXZWN5Y2xlIE1haW4wggIiMA0GCSqGSIb3DQEBAQUAA4IC
    DwAwggIKAoICAQCGogHReOQGZqWCLE+b8DisT6xtIWaAt4TMudpniNfWmI3OG8ao
    gKaswBb6Gy0fH7cdZczi2/joUB27ipkJCsaUl2rAANW2lrJOQ2LyVw1BERAhQX5j
    mUn1qtYWzhaaDMqZQJr3hd4O91tcJWGeT56Ma9ubV2JDg7Uh2TmDM2V8p0e8akQc
    dKqS6CSpd2ug1/64siprnc6XU2Zz+rqtZUOY1Ov5mhwBC2T4bp/UdOhkDFETcnEk
    VdZI0hbq4Q4moKK6/0KEMEM/gn5naVLzuWwN7Y40BhrGSJqdsHaBNwWVBzCI8Evu
    P1cu6nnbFWVgzccxZQF83IrjcbaU9mfAT+ONgJBpQnC1PgbEuoKtcbcrt3tizZEq
    gHsOvYINN77+puz+wK7ZUaT/k6KqJw7LL83KCD9I4r/w0SuNdEAkYDtNptCZVSTJ
    HMVKTvVVnRrZtDLHbZBGh+R0TWXsMHuG72mBY1dVAmf67t2ax3NQ627HSSw4GxIL
    XZMSFngFcW3SzFNaOj1Ls5ZeME7oJWEHEZXhBDXr73l1euCdM479WNePjZ3IuJYq
    7z1dq7vL9cBmlHW2OFTDp8Pm4ib+5cg+93pBoSnIwdp9Rqh0PYz9iTLg+TVWcu4W
    gf/a/AkHksS+IBUjNZGfvoyJIlh50n74oJTYj94enM/6LwnjVWUJ4fFlDQIDAQAB
    oyowKDAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ
    KoZIhvcNAQELBQADggIBAGVaXdxA44Cv3caaa8pLZ+jeLWsdjQqaQo5OtnUPtLi0
    THi1pDdDvNTJ4NT3JfkL+dpFLUh/NJNqrOqYpnJXJ4PQac2Rpt97L70hlL3QWUZZ
    ELUJh5mZKHXoM6uHZXCwEK2ni8FddWWb8ZnwWPZd0sn2yTs2QYoAU8ls7hLK7GIr
    FoxH+wV6aU1A9ngAT8XewkgIUbeY0MeRb/KTLRzI8p1iHSEA7W9haF3GoUk5JLlQ
    SZlF8Uj31LYByYNNm+ZQfPi2piUI+sc8caDQnW3RPlCn2ySYK1J9LZsC+TS0g6RV
    BiYVqCSCbjiyt6nR+btsnY/2ZIIH5WJWYShxb/WfPGkovddZbZb9FpcFkpZ/E/02
    FsjBuu/UNlwTCgJ3r4gD9PqggUa5BgKj6AGidi40BjA/Yc+kM5EbpsL8fqRlgoa8
    cszKQuZX0+Mvk9BPKI1UJCFDjAkq4Hja0ZyugHNB3hxm4+FTMik2iKhIhfZKruD3
    mk/jjeu9RFi8OeM8B9TEqJteReT+abtHdTR9LZWx6rHUappFXq+pXR1ocumIC3Ua
    Bm6ubWADzBHr/TVq+ltMRCkmNi8xQ7sYS2jRapsOFXQeFRG6BvwyJH12eim3ANga
    1VM72Oj7V5q6WNzdLBAUD1u8PBfTTgn/LjXLzUXNVP4mYpb9gPDfmkmTNymg+WEK
    -----END CERTIFICATE-----
    -----BEGIN PRIVATE KEY-----
    MIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQCGogHReOQGZqWC
    LE+b8DisT6xtIWaAt4TMudpniNfWmI3OG8aogKaswBb6Gy0fH7cdZczi2/joUB27
    ipkJCsaUl2rAANW2lrJOQ2LyVw1BERAhQX5jmUn1qtYWzhaaDMqZQJr3hd4O91tc
    JWGeT56Ma9ubV2JDg7Uh2TmDM2V8p0e8akQcdKqS6CSpd2ug1/64siprnc6XU2Zz
    +rqtZUOY1Ov5mhwBC2T4bp/UdOhkDFETcnEkVdZI0hbq4Q4moKK6/0KEMEM/gn5n
    aVLzuWwN7Y40BhrGSJqdsHaBNwWVBzCI8EvuP1cu6nnbFWVgzccxZQF83IrjcbaU
    9mfAT+ONgJBpQnC1PgbEuoKtcbcrt3tizZEqgHsOvYINN77+puz+wK7ZUaT/k6Kq
    Jw7LL83KCD9I4r/w0SuNdEAkYDtNptCZVSTJHMVKTvVVnRrZtDLHbZBGh+R0TWXs
    MHuG72mBY1dVAmf67t2ax3NQ627HSSw4GxILXZMSFngFcW3SzFNaOj1Ls5ZeME7o
    JWEHEZXhBDXr73l1euCdM479WNePjZ3IuJYq7z1dq7vL9cBmlHW2OFTDp8Pm4ib+
    5cg+93pBoSnIwdp9Rqh0PYz9iTLg+TVWcu4Wgf/a/AkHksS+IBUjNZGfvoyJIlh5
    0n74oJTYj94enM/6LwnjVWUJ4fFlDQIDAQABAoICAE78Yxay1wyOUhGhz37MG2O0
    RpOr4cgoYsf9TY4qcX6b963xC8a125NECvbm1L0KzVJ49BAwP8KDpj3t3US5xrFM
    eDt3AeriVG+oBzfoLIV87jqkgvMJ7qMre/jbJdVxJbdteL05E4MySa4w3CmVyo3V
    hXyIcsTrU2wtVhmMIMFWHrcCnT0YkS4o9cFap5Ewx2cyV8LVTWvoaRYoBjdOTq8u
    U9cXO9C9D5rUw/5QLDruIu7G2GwZ0+LbJsjcCoJNAcu1kB+fdQSgmWowF5OXuDYf
    pasN3c1wsQ1MhuneDu9UzXu5hsKa9Jo4xA7taZG2iGOJP6sydGVlxFl2in4AIJ58
    mudDfsei3rtN4wlV8uaR7Xv8poVGxUWlX+ij4YJwdMS4IbcZIv71IfRRkXO3iSO5
    phR2T2FBuu8NgMmiraZemUVOtbJhHjMrVdHGA0TcQlzQSa870e23Dq6TII+yawOf
    jLaiRrTx2YULI0Iu01xSmMsLwSRTmGi4tXo/BGwuFf2Bol942r2xaKEEE1h+hKFA
    zxY/cC+NLf0r2C4enRNhbWHJbCL0l6eCy1UuMV8jBjDU6t1+EPwiyLXBkFEy8OH/
    usHXI253FUYO/MOmwQtVcOQO60JDZKQfq4EP+9Q4Nfuq6EzC+JpNMcfxGythNtxh
    vQ00LjadFzfQWXBeKSQBAoIBAQDEi2t+a9xGlnNMC8fpvuZeuRq+aYRA8zuJRhiN
    5x7tLxy5DXGhZ81a4Qnqo5OYTx0581++fU51BaDSQoqHpAo73ZygG/V0T6qtJ+gi
    8V7NdUQYNrSlYtlGkXOqSW7OJOM1fgj4bnJK3TeqkVsD8a7sBolMaWeoXPGuggU4
    pcr8Vc0zeFsKx0UtfbRzDbINz2O3G/bD3sPE59XSVERdkIV/csen80CHgrCN9rL0
    0tdAJrmlRMk/0RXbG9mX/QryFNUu/4hwM0z1+3U3C5xU6njKCyCGqtUelrQ8HsVL
    3T24SFzZW4I5sCRtOeIAdfiRjGbqGOVLZh7RfjwWwURkKHMBAoIBAQCvXBZx495l
    Mjx0Qu2YIl+q6DT9QtCy34Dx14YWARX7s+2EDIALhZ3RH10BRpvPhjeM2stX/s28
    uUBKLwl15RjYAXgi7yiw1pdb6WXcgnQ9WSkcYRcSTCuRqdqzQChQ7Cg7hb/Dwxai
    vyavgA6DJXq0j8GsQTX/C69vpll28bq1HDpQgmQVfSbmIbP7RSBc4zHBMOUMIocQ
    FHKmJwVzt0GRXLZvUp9L0hzAN41CKTpr9Mhd9XggRtrG0C1nsY0E5XKDniO6vmv2
    VuYAlK8kLcKorMz4r0vdK1p7SP49k7GfVZgqooadzMxSw7OSjHuILUJ4bOWhQx1H
    fqnxsjwhGY4NAoIBAQCJypzQAtppemzWsaO0Eiv72JYRTHR1/JCOyt/IDHK4IkFm
    0zAI0nc78W08XPXK4BxDVoaXS85HaGy5PAFW2wB5vAJklXVd18R2pPWwGbw3GrFk
    sGWxVT2ypaKLjfPq/h10kSnE0dm69qBiKom+mB/kRSjYs0UC2jZt+6Whc0p94cF9
    BjH9unqbS/fIeZ+M4wqrgyVbaL+jOk3DqWRMnFebZGLpMjbZShxxSrVnwrE5vmyE
    m1bkMLe75yiDz9luooBa9Lc4wh6AjYw9zRwKxF9udqKVBwtm6IzvYTs81pzAp6rA
    j9EalIzVLrFtVUew8tfr4wxN8ghFItUJtvE1rs4BAoIBADTQ/KWi50n9fn3Z5qvq
    tnvIYqVhKXCmprSwoF8iRpfAEqqyBSLzRJxG4QFQXf98QmD3SUWgpiDQfw+Y6TWM
    IhZ1ItUKyWuxxnbVbmujExWjNCGrEILfVEQUL53LlhkBeACtgRuaN8ge4Kz9WeGg
    OTwHDGMwZO4De/yZ0tpjZkPEU8AJ9dEPF9c6kXX91QiFGWhBrMsh3yI1tm5a1GaM
    7H+2t/ABp57zkttGIBKsTj9Tw8Gg/GRkUuKMsxBHRt0RqpL/320Qi33voGjOX437
    BmU9XqMMUUI1G5SEYKb1RAtkgWdd+kOu+l93OC/Mhix2zU1uJx+SElCFUvRMJZYm
    l0UCggEATmkhyZfRRpzl6o+Kc/u2k6TBhM+tkbSjlz1HT90Au/08wecCKXcgo/XV
    p7/o0Zw2bSa2aJAXMiroQ68JEbUKXSsltgmyPMKaz9TypS1pb7GqLoP3+wIzIfiX
    EUHyaWalCxA+j4QXZW4faod9ciBXWpt+CfFmLFhiBVT5uvNhya8FQthIjOU1VYAp
    /Hp980cmbV+HcXjrCDq919QoOqVSYvzqp5T2flxkTcyM2EhbRFc0KXQ+9y1mB4Id
    2LKzlaxGmag8GA5C1YfDMTSiC1n8uB4U7jyq23pU2dk7PcXgKZr7P0LWjQfyQtrC
    Y/Av9ylzvY/o+1m4naUy5T030JTu/g==
    -----END PRIVATE KEY-----
```

3. Copy and paste the following keys into a file called ".env.local" in the root folder of the project. These are used in firebase.js and kept in ".env.local" to ensure they aren't public.   
```    
    REACT_APP_FIREBASE_API_KEY=AIzaSyCzjBu1efbHHhBr2j1SDC_302gajRKj-Hw
    REACT_APP_FIREBASE_AUTH_DOMAIN=wecycle-99372.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=wecycle-99372
    REACT_APP_FIREBASE_STORAGE_BUCKET=wecycle-99372.appspot.com
    =71874795237
    REACT_APP_FIREBASE_APP_ID=1:71874795237:web:99bccb2f70f22b368de60c
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

