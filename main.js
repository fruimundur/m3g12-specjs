// If you haven't read my README.md file, start by doing that. Then get back to this.

// What I want to achieve with this code, is to output the value from the input field into a list below it, 
// by either clicking the add button, or by pressing Enter on the keyboard.

// I start by storing the input field, the add button and the list of tasks into variables, so I can easily access these later on
// (instead of having to type in 'document.getElementbyID...' everytime.)
let inputField = document.getElementById('inputField');
let addTaskButton = document.getElementById('addTaskButton');
let listOfTasks = document.getElementById('listOfTasks');

// Skip this line of code for now. I will explain later what this does.
listOfTasks.innerHTML = localStorage.getItem("value")


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
// Honestly I'm not really sure about how it actually works, but it somehow save data in a local storage / memory.
// So do to this is write the following line of code. The 'value' is just a name, it could be anything. By saving the listOfTasks.innerHTML
// to the local storage, I save all of the text inside of the div with the listOfTasks ID (which is everything that has been pasted into the paragraph element)
    localStorage.setItem('value', listOfTasks.innerHTML)
// The next thing I'll do is add an Event Listener to the paragraph variable, also with a Click event handler. What this does, is that whenever
// you click on one of the to-do items pasted into the paragraph element (which is the value of the paragraph variable), as "line-through"
// text decoration is added to it. The point of this is to give you the option of clicking on a to-do item once it's done, to mark it as done.
    paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = "line-through";
   })
// Then I add a similar line of code but only with the Dblclick (double click) event handler instead of the Click one.
// This gives you the option removing the to-do item completely, by double clicking it.
   paragraph.addEventListener('dblclick', function(){
       listOfTasks.removeChild(paragraph)
       localStorage.removeItem('value')
   })
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