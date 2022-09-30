// If you haven't read my README.md file, start by doing that. Then get back to this.

// What I want to achieve with this code, is to output the value from the input field into a list below it, 
// by either clicking the add button, or by pressing Enter on the keyboard.
// Also you should be able to both click and double-click the to-do items (the value from the input field), to mark them as done and to remove them completely.

// I start by storing the input field, the add button and the list of tasks into variables, so I can easily access these later on
// (instead of having to type in 'document.getElementbyID...' everytime.)
let inputField = document.getElementById('inputField');
let addTaskButton = document.getElementById('addTaskButton');
let listOfTasks = document.getElementById('listOfTasks');

// Skip these lines of code for now. Continue on line 48. (I will tell you later when to come back to this)
// Once you come back to this, start from here: The next line of code picks up and displays anything that has been saved in the key/name "value" of the localStorage property.
// If I didn't have this code here, the list would not get displayed when the page is refreshed, because the function would need to be invoked.
// But now, since the list has been saved in the local storage, this line of code will get the data (the list) from the storage, and display it,
// without having to invoke the function.
listOfTasks.innerHTML = localStorage.getItem("value")

// In order to be able to delete items that have been stored, I target all the 'p' tags inside of the div with the listOfTasks ID.
// This data is stored inside a variable called 'tasks'.
const tasks = listOfTasks.querySelectorAll("p")

// Then I create the variable used on line 78 which then takes on the value from the paragraph value. Then I create a function which will add the line-through
// text decoration.
const lineThroughElement = (paragraph) => {
    paragraph.style.textDecoration = "line-through";
}

// Same thing here. Inside the function I remove the paragraph from the div with the listOfTasks ID (which will happen when I double click), but then I set the
// localStorage again, which updates the data. This ensure that when I remove an item and the refresh the page, the item doesn't pop back up 
// (because it gets removed with localStorage "update")
const removeElement = (paragraph) => {
    listOfTasks.removeChild(paragraph)
    localStorage.setItem('value', listOfTasks.innerHTML)
}

//Then finally, I create a for loop which loops through the 'tasks' variable I created earlier. Inside of it I create a function, which has 2 Event Listeners.
//These two Event Listeners have the actual Event Handlers of Click and Double Click.
for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];
    element.addEventListener ("click", () => lineThroughElement(element))
    element.addEventListener ("dblclick", () => removeElement(element))
}
// ...now you can read the final piece of code starting on line 84.


// Here I add an Event Listener to the add button, with a Click event handler. Then inside of it I create a function,
// which will be invoked whenever the add button gets clicked.
addTaskButton.addEventListener('click', function(){
// Inside the function I start by creating a variable called paragraph. Inside that variable I create and store an html paragraph element.
    var paragraph = document.createElement('p')
// Then I set the text of the paragraph to be the value of the input field. So when you click the add button, and the function is invoked,
// whatever you typed in the input field will be pasted inside the paragraph element.
    paragraph.innerText = inputField.value;
// Next I just add some styling to the paragraph element, by adding the 'paragraph-styling' class I created in the CSS sheet
    paragraph.classList.add('paragraph-styling')
// Then I append the paragraph element inside of a div, which has the 'listOfTasks' ID. If you look at the HTML, this div is just below the input field.
// So whenever I write and add a new task for my to-do list, it will show up in a list below my input field. 
    listOfTasks.appendChild(paragraph)
// This next line of code just clears the input field after I've added the task. If I didn't write this line I would have to manually
// delete the task from the input field before I could write a new one.
    inputField.value = ""
// So now if I create a new task, and add it by clicking the add button, the task will get pasted in a list below the input field.
// But if I refresh the page, the task will disappear. To solve this problem I will use Window.localStorage, which is a property of the Web Storage API.
// Honestly I'm not really sure about how it actually works, but it somehow saves data in a local storage / memory.
// So do to this I write the following line of code. The 'value' is just a name, it could be anything. By saving the listOfTasks.innerHTML
// to the local storage, I save all of the text inside of the div with the listOfTasks ID (which is everything that has been pasted into the paragraph element)
    localStorage.setItem('value', listOfTasks.innerHTML)
// The next thing I'll do is add two different Event Listeners to the paragraph variable, with Click and Double Click ("dblclick") event handlers.
// What these do is that when you click on one of the to-do items pasted into the paragraph element (which is the value of the paragraph variable), a "line-through"
// text decoration is added to it. The point of this is to give you the option of clicking on a to-do item once it's done, to mark it as done.
// By double clicking a to-do item you remove it completely.
// Now, because the data gets saved/stored (thanks to line 69), but the list of items wont get displayed without invoking this function,
// I have to make the paragraph element available outside of this function (since you can't access variables created inside a function from the global scope).
// I do this by adding a function inside the two Event Listeners. These functions pass the value of the paragraph as a dom element (instead of a variable)
// to the variables called lineThroughElement and removeElement on line 26 and 33.
    paragraph.addEventListener('click', () => lineThroughElement(paragraph))
    paragraph.addEventListener ("dblclick", () => removeElement(paragraph))
// ...now, before you continue , go to line 14.
})


// The purpose of this final piece of code is to provide the option of adding a task simply my pressing Enter on the keyboard,
// instead of having to click the add button with the mouse cursor.
inputField.addEventListener('keypress', function(addByEnterBtn) {
// So if I press the "Enter" key on the keyboard
    if (addByEnterBtn.key === "Enter") {
// The button element will get triggered with a click
      addTaskButton.click();
    }
});