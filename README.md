# m3g12-specjs

For this project I wanted to practice the basics of Javascript more, to help me get a better understanding of it. So I decided to build a simple to-do list.

I wanted the to-do list to be as minimalistic as possible, focusing only on the basic and essential aspects, which is an input field where you can type in a new task, and a button you can press to add the task to a list. You can then either mark a task as done, or completely remove it from the list.

I started the project by writing the HTML and CSS. These sheets are quite basic and self-explanatory (hopefully), so I haven't added any comments to them.

For the Javascript code I used the DOM API to manipulate HTML elements, and I also added a little bit of styling as well. The to-do list is essentially rendered by the DOM API.

In order to be able to save the list of to-do items, when the page is refreshed, I used the Web Storage API. More specifically I used Window.localStorage, which is a property of the Web Storage API.

I added comments in the JS file, trying to explain to my best ability what each line of code is doing.