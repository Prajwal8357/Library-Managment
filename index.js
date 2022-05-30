// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor

function Display() {}

// Adding methods to display prototype  

// Adding Books to Your Books Section
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
}

// Resets the form
Display.prototype.clear = function (){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();


}

// Reseting when the form when submitted
Display.prototype.clear = function (){
    const libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}




//Add SUBMIT EVENT LISTNER TO FORM

const libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener(
  "submit",
  (libraryFormSubmit = (e) => {
    // Taking the value i.e what we write in the text filed
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    // Fiction Programming Cooking
    // Radio Buttons

    //    cant do because we need all radio buttons //let type = document.getElementById("");//
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
      type = fiction.value;
    } else if (programming.checked) {
      type = programming.value;
    } else if (cooking.checked) {
      type = cooking.value;
    }
    //<----------------book object----------------------> 
    let book = new Book(name, author, type);
    console.log(book);

    // <----------------Display Object  -------------------->

    let display = new Display();
    display.add(book);
    display.clear(book);

    e.preventDefault();
  })
);
