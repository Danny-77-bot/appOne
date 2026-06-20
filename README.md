# Pokémon Explorer App

## 📱 Description

A React Native application that fetches Pokémon data from the PokeAPI and displays each Pokémon's name and image. The app uses asynchronous API requests to retrieve detailed Pokémon information and renders the results in a scrollable list.

## 🚀 Features

* Fetch Pokémon data from PokeAPI
* Fetch detailed information for each Pokémon
* Display Pokémon names and images
* Use React Hooks (`useState` and `useEffect`)
* Use TypeScript interfaces for type safety
* Render dynamic content using `ScrollView`
* Handle asynchronous requests with `async/await`
* Use `Promise.all()` to fetch multiple Pokémon details in parallel
* Log state updates for debugging

## 🛠 Technologies Used

* React Native
* TypeScript
* JavaScript Fetch API
* PokeAPI

## 📚 What I Learned

### React Native

* Creating functional components
* Using `View`, `Text`, `Image`, and `ScrollView`
* Styling React Native components

### React Hooks

* Managing state with `useState`
* Running side effects with `useEffect`
* Tracking state updates

### API Integration

* Making HTTP requests using `fetch`
* Parsing JSON responses
* Working with nested API data

### Asynchronous JavaScript

* Using `async/await`
* Error handling with `try/catch`
* Fetching multiple resources using `Promise.all`

### TypeScript

* Creating interfaces
* Typing component state
* Improving code readability and safety

## 📡 API

PokeAPI

https://pokeapi.co/

Endpoint used:

https://pokeapi.co/api/v2/pokemon

## 🔄 Application Flow

1. Component mounts.
2. `useEffect` calls `fetchPokemon()`.
3. Pokémon list is fetched from PokeAPI.
4. Additional details for each Pokémon are fetched in parallel.
5. Pokémon names and images are stored in state.
6. The UI re-renders and displays the data.

## 🎯 Future Improvements

* Add loading indicator
* Add search functionality
* Add pagination
* Display Pokémon abilities and types
* Replace `ScrollView` with `FlatList`
* Add navigation to a Pokémon details screen
* Improve UI design

## 📸 Output

The application displays a scrollable list of Pokémon cards containing:

* Pokémon Name
* Pokémon Image
