# GitHub User App

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). 

This is a simple React application that allows users to search for GitHub profiles and view user details. The app includes a dark/light theme toggle that respects the user's system preferences.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
-  Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./src/assets/images/github-user-search-app-dark-mode%20.png)
![](./src/assets/images/github-user-search-app-light-mode%20.png)

### Links

- Solution URL: [https://github.com/Kiunga1/github-user-search-app.git]
- Live Site URL: [https://kiunga1.github.io/github-user-search-app/](on github)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

During the development phase, I honed my skills in leveraging React and Styled Components to construct a dynamic and responsive web application. Additionally, I incorporated Tailwind CSS for styling, and in order to enhance the user experience, I implemented the prefers-color-scheme media query, enabling automatic theme switching based on the user's system preferences.



```js
 const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme || (userPrefersDark ? 'dark' : 'light');
  };
```

### Continued development

In future projects, my goal is to deepen my expertise in React and explore additional libraries or frameworks that can streamline the development process. I also plan to focus on mastering the skill of fetching APIs to seamlessly integrate external data into my applications.

## Author
- Frontend Mentor - [@Kiunga1](https://www.frontendmentor.io/profile/Kiunga1)
- Twitter - [@AnnKiungaa](https://twitter.com/AnnKiungaa)
