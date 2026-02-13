# React Native TMDB App

A mobile application built with **React Native** and **Redux** that lets you browse popular movies, TV series, and actors using [The Movie Database (TMDB)](https://www.themoviedb.org/) API.

## Features

- Browse popular movies, TV series, and actors on the home screen
- View detailed movie information including overview, genres, rating, runtime, and cast
- View detailed TV series information including seasons, episodes, and cast
- Bottom tab navigation with Home, Search, and Settings screens
- Clean and modern UI with horizontal scrollable lists

## Tech Stack

| Category           | Technology                                  |
| ------------------ | ------------------------------------------- |
| Framework          | React Native 0.63                           |
| State Management   | Redux + Redux Thunk                         |
| Navigation         | React Navigation 5 (Stack + Bottom Tabs)    |
| HTTP Client        | Axios                                       |
| Icons              | react-native-vector-icons (MaterialCommunity) |
| Environment Config | react-native-dotenv                         |
| Linting            | ESLint (@react-native-community config)     |
| Testing            | Jest + React Test Renderer                  |

## Project Structure

```
src/
├── App.js                      # Root component with Redux Provider
├── config/
│   └── index.js                # App configuration constants
├── libs/
│   └── axios.js                # Axios instance with TMDB API config
├── navigation/
│   ├── AppNavigator.js         # NavigationContainer wrapper
│   ├── TabNavigator.js         # Bottom tab navigation
│   └── StackNavigator.js       # Stack navigators for each tab
├── screens/
│   ├── home/Home.js            # Home screen – popular lists
│   ├── movie/Movie.js          # Movie detail screen
│   ├── series/Series.js        # TV series detail screen
│   ├── search/Search.js        # Search screen
│   └── settings/Settings.js    # Settings screen
├── components/
│   ├── Box/Box.js              # Movie/Series card component
│   ├── RoundBox/RoundBox.js    # Person profile card component
│   └── Loading/Loading.js      # Loading indicator
└── redux/
    ├── store.js                # Redux store configuration
    ├── actions/
    │   ├── popularMovies.js    # Fetch popular movies
    │   ├── movie.js            # Fetch movie details + credits
    │   ├── popularSeries.js    # Fetch popular TV series
    │   ├── series.js           # Fetch series details + credits
    │   └── popularPersons.js   # Fetch popular persons
    └── reducers/
        ├── combinedReducer.js  # Root reducer
        ├── popularMovies.js
        ├── movie.js
        ├── popularSeries.js
        ├── series.js
        └── popularPersons.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) (>= 12)
- [Yarn](https://yarnpkg.com/) or npm
- React Native CLI (`react-native-cli`)
- Xcode (for iOS) / Android Studio (for Android)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

## Getting Started

### 1. Install dependencies

```bash
yarn install
# or
npm install
```

### 2. Install iOS pods

```bash
cd ios && pod install && cd ..
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```
API_TOKEN=YOUR_TMDB_API_KEY
```

You can obtain a free API key by creating an account at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

### 4. Run the app

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

### 5. Start Metro bundler (if not started automatically)

```bash
npm start
```

## Available Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| `npm start`         | Start Metro dev server     |
| `npm test`          | Run Jest tests             |
| `npm run lint`      | Run ESLint                 |
| `npm run ios`       | Build and run on iOS       |
| `npm run android`   | Build and run on Android   |

## Architecture

### State Management

The app uses **Redux** with **Redux Thunk** for async operations. Each domain (movies, series, persons) has its own action and reducer pair following a standard `LOAD → LOAD_SUCCESS | LOAD_FAIL` pattern. Action types are defined as `Symbol` values to guarantee uniqueness.

### Navigation

```
NavigationContainer
└── BottomTabNavigator
    ├── Home Tab → StackNavigator
    │   ├── Home Screen
    │   ├── Movie Detail Screen
    │   └── Series Detail Screen
    ├── Search Tab → StackNavigator
    │   └── Search Screen
    └── Settings Tab
        └── Settings Screen
```

### API Integration

All HTTP requests go through a configured **Axios** instance that automatically appends the TMDB API key. The app consumes the following TMDB endpoints:

- `GET /movie/popular` – Popular movies
- `GET /tv/popular` – Popular TV series
- `GET /person/popular` – Popular persons
- `GET /movie/{id}?append_to_response=credits` – Movie details with cast
- `GET /tv/{id}?append_to_response=credits` – Series details with cast

## License

This project is open source and available for educational purposes.
