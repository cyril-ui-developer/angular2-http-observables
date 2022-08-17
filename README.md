---
type: Blog
title: Simple Toggle View in React
desc: This tutorial demonstrates how to create a simple toggle in React using HTML Radio buttons control. Let's imagine we want to display two categories of items to users but we would like to show a category at a time. We can use radio buttons to implement a toggle to switch between the views. 
date: 08-17-2022
tags: [react, webdev]
---




This tutorial demonstrates how to create a simple toggle in React using HTML Radio buttons control. Let's imagine we want to display two categories of items to users but we would like to show a category at a time. We can use radio buttons to implement a toggle to switch between the views. 

Pre-requisite:
---
- Basic knowledge of Javascript and React is required
- Proficient in the use of any modern code editors i.e. VS Code

Step 1:
---
- Scaffold a React application. One quick and easy way to do this is to use the  Create React App tool. See Create React App site for details

- Create a React app project and give it the name - toggle-view
```
npx create-react-app toggle-view
```

Step 2:
---
- Open the toggle-view project in any code editor of your choice
- Open the App.js file and delete the content in the return statement.

Step 3:
---
- import `useState` in the first line
```
import React, { useState } from "react";
```
- Declare a state property and a setter
```
const [isToggle, setIsToggle] = useState(true);`
```

Step 4:
---
Create a change method and use the setter method - `setIsToggle` to set the `isToggle` value
```
 const toggleChange = ()=>{
   setIsToggle(!isToggle)
  }

```
FYI: The exclamation mark `!` is a logical “not” operator. It inverts a boolean expression in JavaScript. For example, if a value is `true` it will invert to a `false` vice visa.

Step 5:
---
Add two Radio buttons, and set the attribute as shown below. 
```
 <div>`
`      <input`
  `      type="radio"`
   `     value={true}
   `     name="toggle"`
`        checked={isToggle}`
    `    onChange={toggleChange}`
`      />`
`  Unanswered`
 `     <input`
  `      type="radio"`
     `   value={false}`
    `    name="toggle"`
`        onChange={toggleChange}`
`      />`
`   Answered`
`    </div>`
```


Step 6:
---
Create the two views and use `isToggle ` as the ternary operator condition to determine what would be displayed. See below:
```
 `    {`
`       isToggle ? (<h1> Yes Items</h1>):`
  `     (<h1> No Items</h1>)`
  `   }`
```
Complete code for the toggle view implementation
```
`  const [isToggle, setIsToggle] = useState(true);`
`  console.log(isToggle);`

`  const toggleChange = ()=>{`
`    setIsToggle(!isToggle)`
`  }`

 ` return (`
    <>
 `   <div>`
`      <input`
  `      type="radio"`
   `     value={true}
   `     name="toggle"`
`        checked={isToggle}`
    `    onChange={toggleChange}`
`      />`
`  Unanswered`
 `     <input`
  `      type="radio"`
     `   value={false}`
    `    name="toggle"`
`        onChange={toggleChange}`
`      />`
`   Answered`
`    </div>`
 `    {`
`       isToggle ? (<h1> Unanswered Questions</h1>):`
  `     (<h1> Answered Questions</h1>)`
  `   }`
  `  </>`
`  );`
```

That’s it!

# MyAngular2HttpApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## JSON-SERVER
To setup the RESTFUL JSON-SERVER use for this demo project, please check my tutorial at medium.com or go to json-server github repository at
https://github.com/typicode/json-server


