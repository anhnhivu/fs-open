# Part 2

> Tip: Use `console.log()` more.
>
> Protip: Use Visual Studio Code snippets

Rendering a collection using *Map*

```Javascript
const result = notes.map(note => note.id)
console.log(result)

const result = notes.map(note =>
                    <li key={note.id}>
                        {note.content}
                    </li>
                )
```

2.1. Use map function and add key value.

2.2. Calculate the total number of exercises.

2.3*. Calculate sum in a JS array using `reduce`.

2.4. Adding more courses to ensure the program works in with many courses.

2.5. Seperate `Course` to another module.