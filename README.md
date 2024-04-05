# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

This is the first challenge in the **Javascript Fundamentals Frontend Mentor Roadmap**. it was fun to get my first practice with Javascript on Frontend Mentor. The challenge required Javascript to implement form handling for Email validation.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

#### Mobile ScreenShot

![Mobile ScreenShot](./screenshot_mobile.png)

#### Desktop ScreenShot

![Desktop ScreenShot](./screenshot_desktop.png)


### Links

- Solution URL: [Solution Url](https://www.frontendmentor.io/solutions/interactive-ping-coming-soon-page-Dk0VFERMAl)
- Live Site URL: [Live Site Url](https://frontendmentor-ilyesab.github.io/ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JavaScript & Regex

### What I learned

How to access the forms available in the DOM using the collection `document.forms` and access form controls using the collection `form["name of control"]`.

Also learned about Events and the `addEventListener` method to listen for the **submit** event on the form element.

I used a simple regex to validate if the email is correct.

## Author

- Frontend Mentor - [@ilyesab](https://www.frontendmentor.io/profile/ilyesab)