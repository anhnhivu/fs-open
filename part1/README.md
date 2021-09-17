# Part 1

Completed exercises: **14**/14

---

- Create the application

``` shell
$ npx create-react-app courseinfo
$ cd courseinfo
$ npm start
```

- Modify `index.js` and `App.js`.

- `App.js` defines a React component within *App*, the root component.

- The layout of React components is written in **JSX**. Although it looks like HTML, it will be compiled into Javascript.

- Compose applications from many specialized reusable components. 

- Props: passing data to components

- The component name must be capitalized.

- The latest version in June 2021 is ES12.

----

**Array**

```javascript
const t = [1,-1,3] // the contents can be modified despite defined as 'const'
t.forEach(value => {
  console.log(value)
})
const m1 = t.map(value => value*2) // new array
```

**Objects**: defined using object literals

```javascript
const student = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
// Access by student.name OR student['name']
```

**Functions**

```javascript
const square = p => {  // (p1, p2) if there are multiple definitions
  console.log(p)
  return p * p
}
const square = p => p * p // shortened form
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```

---

## Javascript Materials

https://developer.mozilla.org/en-US/docs/Web/JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

https://javascript.info/

https://github.com/getify/You-Dont-Know-JS

https://egghead.io/

----

