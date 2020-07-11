# React + NASA Application:
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) 
2. It uses the NASA Open API: Astronomy Picture of the Day (APOD)

<br />

## React:

### Available Scripts

In the project directory, you can run:<br />
* **`yarn start`** Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.<br />
* **`yarn test`** Launches the test runner in the interactive watch mode.<br />
* **`yarn build`** Builds the app for production to the `build` folder.<br />

## In the Application:
The information we will display is:
* The photo
* The photo's title
* Current date
* Information about the photo
<br />

The [Home.js](https://github.com/jendcruz22/NASA-APOD_ReactApp/blob/master/src/components/Home.js) component as the name suggests, is our main home page.<br /><br />

I visited the [NASA API page](https://api.nasa.gov/), entered my details and signed up after which I recieved a private API key (which is unique for every user and thus not mentioned in the above code)<br />
The API key which is provided by NASA is then used in the [NasaPhoto.js](https://github.com/jendcruz22/NASA-APOD_ReactApp/blob/master/src/components/NasaPhoto.js) component through which we display NASA's APOD<br /><br />

[NavBar.js](https://github.com/jendcruz22/NASA-APOD_ReactApp/blob/master/src/components/NavBar.js) component helps us go from the NasaPhoto.js page to the Homepage.<br /><br />

The styling of this application lies in [App.css](https://github.com/jendcruz22/NASA-APOD_ReactApp/blob/master/src/App.css)
