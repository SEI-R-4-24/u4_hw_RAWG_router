# RAWG Router

<div>
  <img alt="RAWG" src="https://i0.wp.com/operationrainfall.com/wp-content/uploads/2019/06/RAWG-Featured.jpg?fit=1920%2C1080&ssl=1" />
</div>

## Overview

We will be building a frontend website with React, React Router, and the [RAWG API](https://rawg.io/apidocs). We'll be getting practice with routing dynamically with `react-router-dom` elements and with making API calls with `axios` inside of useEffect Hooks. Try to think of this lab like a puzzle, where you'll be adding in the pieces we need to create a functioning game website.

A deployed, final version of what we are building can be found [here](https://www.rawg-router.com/)


[RAWG API Docs](https://rawg.io/apidocs)


The endpoints (URL strings) we will be using with this API have been provided below. Starter code and component files have also been provided.

### Endpoints

```js
[GET] Search `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
[GET] Genres `https://api.rawg.io/api/genres?key=${API_KEY}`
[GET] Game Details `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
[GET] DLC `https://api.rawg.io/api/games/${gameId}/additions?key=${API_KEY}` (Bonus)
```

## Getting Started

- `Fork` and `clone` this repository
- `npm i` to install dependencies (axios and react-router-dom have already been added to the package.json for you)

## Instructions

## Generating an API Key

In order to complete this assignment, you'll need an API key from [here](https://rawg.io/login?forward=developer).

Store this key in a `.env` file at the root of this repo, (Same level as the package.json). Here's an example:

`.env`

```
VITE_RAWG_KEY=1A2B3C4D5E6F7G8H9I
```

Be sure and add your `.env` file to your `.gitignore` simply by typing ".env" on line 3 in the `.gitignore` file!

Restart your React dev server with `npm run dev` and you can now utilize the key like in the following example: `import.meta.env.VITE_RAWG_KEY`

Note: You can name your key *anything you want* as long as it starts with `VITE` and is in **SCREAMING_SNAKE_CASE** without any spaces.

### App Architecture

Let's take a look at the structure of the app we've just cloned. How are components nested in its file structure? What does this tell us about where we will be using React Router and which components will be called within it when building this app?

<p align="center" >
  <img alt="tree" src="public/assets/images/Component Hierarchy Diagram.png" />
</p>

Let's start with `main.jsx`, followed by `App.jsx`. In `main.jsx`, we'll need one additional import:

```js
import { BrowserRouter } from 'react-router-dom'
```

- `BrowserRouter` should then be wrapped around `App` to allow routing within our application.

```js
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

#### App.jsx

Let's move on to `App.jsx`. In `App.jsx` what we want is a `<Header/>` component that will be displayed at all times at the top of our website along with a section where our `<main>` content will be displayed.

- You will need to import **5 components** into `App.jsx`, the first of which should be our `<Header/>`, which we'll use to control navigation between all pages.
- Each one of these components should be accessible with a Route with a path for each.
- At least one `<Route/>` should have an _exact path_, so it is displayed when the app is first rendered. Here is the skeleton of how this app should be structured in `App.jsx`:

```js
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
// Other component imports here

//...

  <div>
    <Header />
    <main>
      <Routes>
        <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes>
    </main>
  </div>
  
//...
```

- Add the proper component and import for each `<Route/>` within the `<Routes/>` as you work through this lab. Each Route should have a path denoting specific URL patterns to render each component.

Once finished, we've set up the basic structure of the app! Congrats!

---

### Components

For this section, we will start by building the smallest reusable parts of our app, its components. We will be working in the `components` folder. For now, we are only concerned with the structure of each component, so their props will not be defined to begin with. However, these components will inform how we are going to build out our pages later on.

#### Header

Let's start with the Header, so we can have active navigation between pages. Our Header only requires one import:

```js
import { Link } from 'react-router-dom'
```

- Within it's `<nav>` tag, it will need 2 `<Link/>` components that are links _to_ our Home `'/'` Route and our `'/about'` Route.
- Once these 2 Links are finished, you are done with the Header component!

#### Search

Next, let's build out the Search component. This component will be used for searching our API later on. The Search component does not require any additional imports, but it does have access to props, which will be important later on. Its available props will be:

```js
props.onSubmit, props.onChange, props.value
```

- Notice that the Search component is a _form_
- To build out Search properly, we need an input and a submit button
- The input in Search should have these attributes:

```jsx
<input
  type="text"
  name="search"
  value={props.value}
  placeholder="Search Games"
  onChange={props.onChange}
>
```

- Its `<button>` should have a *type* of `"submit"`
- Its `<form>` should have access to `props.onSubmit` within its own `onSubmit` attribute

#### GameCard

Now, we will build out the structure for our GameCard. This component will be used to display and allow users to click on games on our Home and ViewGames pages. GameCard will have access to 4 props:

```js
props.onClick, props.image, props.name, props.rating
```

- Inside its `'info-wrapper' <div>`, it will need an `<h3>` tag displaying `props.name`, and a `<p>` tag displaying `props.rating`
- Within its `'img-wrapper' <div>`, it will need an `<img>` tag with a "src" of `props.image`. Don't forget to give it an "alt" property!
- Lastly, its `'game-card' <div>` should have an `onClick` with access to `props.onClick`

#### GenreCard

The GenreCard will be used to display a card for each genre _within_ our `Home` page. GenreCard will have access to 4 props:

```js
props.image, props.name, props.gamesCount, and props.onClick
```

- Its `'card' <div>` should have an `onClick` with access to `props.onClick`
- Its `'img-wrapper' <div>` should have an `<img>` with a "src" of `props.image`
- Its `'info-wrapper' <div>` should have an `<h3>` tag displaying `props.name` and a `<p>` tag displaying `props.gamesCount`

With that, we've finished the basic structure of our components!

---

### Home and About Pages and Methods

Now that we've finished the basic structure of our app's reusable components, let's build out the pages! Each page is unique, so we will look at each one individually. We will start with the least complex page structure and work our way up. In this section you will be working with the files inside of the `pages` folder in your app. To be clear, "pages" are still components, but these components are obviously playing a larger role in our app as they represent *entire views* for our user. But calling them "pages" doesn't change anything about how they work. They're still components!

#### About Page

The About page is typically the simplest page in an app. For our purposes, all we need with this page is an `<h1>` tag inside the main `<div>` in `About.jsx` denoting that it is in fact, the About page. More information can be added later on if you'd like. No imports are required with this page. The path for the `<Route/>` for this page in `App.jsx` should be `/about`.

#### Home Page

Let's move on to the Home page. It's route should be `'/'` in `App.jsx`

In `Home.jsx` we need 4 additional imports: `Search`, `axios`, `GameCard`, and `GenreCard`. Make sure you're importing properly with the relative paths. React will scream at you otherwise.

Notice the state variables within the `useState` Hooks in `Home`. What do these variables imply for our page?

- `Home.jsx` will need 3 methods and an instance of `useEffect` to fire one of its 3 methods, which will access our API when the component *is mounted*.
- The URLs we will be working with here are `https://api.rawg.io/api/genres` and `https://api.rawg.io/api/games?search=${searchQuery}`
- **Don't forget your API keys with both of these endpoints**. Reference the [RAWG API docs](https://rawg.io/apidocs) if needed.

The methods we'll be creating within our `Home` component above its return are:

```js
getGenres(), getSearchResults(), handleChange()
```

- `getGenres()` will *set the state* of our **genres**
- `getSearchResults()` will *set the state* of our **searchResults**, set **searched** to *true*, and set the **searchQuery** back to an *empty string*.
- `handleChange()` will *set the state* of our **searchQuery**

In the component, we will:

- Render the `<Search/>` component at the top of the page
- Conditionally render search results as GameCard components in the search-results `<div>`.
  > HINT: only render them if we get a response from our API call from a search
- Render all genres within the genres container-grid as GenreCards

---

### GameDetails and ViewGames Bonus Pages

GameDetails will display specific information for an individual game.

- GameDetails requires axios and this URL: `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
- It's Route path is: `/games/details/:gameId`

ViewGames will display a page with up to 40 games.

- ViewGames requires axios, GameCard, and this URL: `https://api.rawg.io/api/games?page_size=40&genres=${genreId}`
- Its Route path is: `/view/games/:genreId`

## Submission

- Pull request utilizing this template: [PR Guidelines](https://github.com/SEI-R-4-24/template_pull_request)
