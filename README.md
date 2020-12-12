# The Watchlist

**App Deployed at**
[theWatchlist]()

## Description

This app is designed to allow users to save movies to a watchlist. It could be a new movie, an older movie or any movie the user would like to watch in the future. Save a movie list to your watchlist. It makes it easier to choose a movie for those “movie nights”. The app also allows users to view trailers (if available) for those movies they would like to add to their watchlist.

The app loads with the most popular movies (according to the TMDB API) with 20 results per page. Users can choose from the 'most popular' movies or search for a particular movie by using the search input. To load more results, click on the load more button. More details on the movie can be found by clicking on the movie image. The movie information page shows the title, a short decription, the director/s, release date and runtime. The users can then add the movie to the watchlist from there, as well as be able to view the trailer.

To save a movie to the watchlist, the user needs to register/login. Once the user is authenticated, The user will be able to save any movie title to the database. Users can access their watchlist list by clicking on the watchlist link on the header.

### Features

- Search for movies anonymously (searches can be made without signing up).
- Get movie information anonymously.
- Watch trailers anonymously (no login required).
- Add movies to a watchlist. (User must sign up for this feature).
- Create secure user accounts using the B-crypt hash.
- Users can add and remove movies from their watchlist.

### Demo

![theWatchlist Demo]()

### Data

The Watchlist app uses multiple endpoints from the TMDB api.

### Schema Design

![Schema Design](./images/WatchlistSchema.png)

### Technology Used

**Front End**

- ReactJS
- Redux
- React Router
- Formik
- Yup
- React Youtube
- Movie-Trailer
- React Styled Components
- React Material UI
- React FontAwesome
- Axios

**Backend**

- NodeJS
- PostgreSQL
- ExpressJS
- node-postgres
- BCrypt
- Axios

**Deployment**

- Deployed on Heroku Server
- Gunicorn server

### Local Environment

To get the code on your local machine, create a PostgreSQL database, and set up a virtual environment in Python, and get an API key from Spoonacular API.

```
> git clone https://github.com/mahdimq/Foodie.git
> python -m venv venv
> pip install -r requirements.txt
> source venv/bin/activate
```

### Improve or Contribute

Feel free to improve or contribute on this. Pull requests are always welcome!

### Author

- [Muhammad Qadir](https://github.com/mahdimq)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
