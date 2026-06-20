# Pokémon List App (React Native)

## 📱 Project Description

This is a simple React Native application that fetches Pokémon data from the public PokeAPI and displays the list of Pokémon names using a FlatList.

---

## 🚀 Features

- Fetch data from a public API (PokeAPI)
- Display data using React Native FlatList
- Use of React Hooks (useState, useEffect)
- Render dynamic list of Pokémon names
- Console logging to track state changes

---

## 🛠️ Tech Stack

- React Native
- JavaScript (ES6+)
- Fetch API

---

## 🧠 What I Learned

- How to fetch data from an external API in React Native
- How to manage state using `useState`
- How to use `useEffect` for side effects
- How to render lists using `FlatList`
- How React re-renders when state changes
- How to debug state using `console.log`

---

## 📦 API Used

- PokeAPI: https://pokeapi.co/api/v2/pokemon/?limit=20

This API returns a list of Pokémon with their names and URLs.

---

## 📋 Project Structure



---
Index.js (Main Screen)
## ▶️ How It Works

1. When the app starts, `useEffect` runs once.
2. It calls `fetchPokemon()` function.
3. Data is fetched from PokeAPI.
4. Only `results` (Pokémon list) is saved in state.
5. FlatList renders each Pokémon name.
6. State changes are logged in the console.

---

## 🔮 Future Improvements

- Add Pokémon images
- Add loading indicator
- Add search functionality
- Add error handling for API failures

---

## 📸 Output

A simple list of Pokémon names displayed on the screen.



