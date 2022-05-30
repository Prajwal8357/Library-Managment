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
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
  tableBody.innerHTML += uiString;
};

// Reseting when the form when submitted
// Implement the clear function
Display.prototype.clear = function () {
  const libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// Implement the validate Function  function

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// Implement the SHOW Function  function
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  if (type === "Success") {
    message.innerHTML = `<div class="alert alert-${type} alert-success" role="alert">
                <strong>Success:</strong> ${displayMessage}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 3000);
  } else {
             message.innerHTML = `<div class="alert alert-${type} alert-danger" role="alert">
             <strong>Error:</strong> ${displayMessage}
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">×</span>
            </button>
        </div>`;
        setTimeout(function () {
      message.innerHTML = "";
    }, 3000);
  }
};

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

    // validate  book object
    if (display.validate(book)) {
      display.add(book);
      display.clear();
      display.show("Success", "Book added Succesfully");
    } else {
      display.show("Error", "You cannot add this book");
    }
    e.preventDefault();
  })
);
