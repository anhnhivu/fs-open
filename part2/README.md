# Part 2

> Tip: Use `console.log()` more.
>
> Protip: Use Visual Studio Code snippets

*Map*

```Javascript
const result = notes.map(note => note.id)
console.log(result)

const result = notes.map(note =>
                    <li key={note.id}>
                        {note.content}
                    </li>
                )
```
