let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
}

/*
Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`; //${this.isRead == "true" ? "read" : "not read yet"}
}
*/

function addBookToLibrary() {
    let newBook = new Book($('#title').val(), $('#author').val(), $('#pages').val(), $('input[name=read]:checked').val());
    console.log("$('input[name=read]:checked').val()): " + $('input[name=read]:checked').val());
    $('input[type=text]').val('');

    console.log("OOOOO!!!: " + newBook);
    myLibrary.push(newBook);
    $("#newBook").hide();
    $("#newBookButton").show();
    displayBooks();
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    $('#bookTable').find('tbody').empty();
    if (myLibrary.length > 0)
    {
        $('#bookTable').show();
        myLibrary.forEach(function (book, index) {
            let title = `<td>${book.title}</td>`;
            let author = `<td>${book.author}</td>`;
            let pages = `<td>${book.pages}</td>`;
            let changeIfRead = `<td><select name="wasRead${index}" id="wasRead${index}" onchange="readChanged(${index})"><option value="true">Read</option><option value="false">Not read</option></select></td>`;
            let removeButton = `<td><button onclick="removeBookFromLibrary(${index})">Remove</button></td>`;
            let entry = `<tr>${title}${author}${pages}${changeIfRead}${removeButton}</tr>`; 
            $('#bookTable').find('tbody').append(entry);
            $('#wasRead'+index).val(book.isRead);
        });
    }
    else
        $('#bookTable').hide();
}

function showNewBookForm() {
    $("#newBook").show();
    $("#newBookButton").hide();
}

function readChanged(index) {
    myLibrary[index].read = $('#wasRead' + index).val();
}

$(function () {
    displayBooks();
});