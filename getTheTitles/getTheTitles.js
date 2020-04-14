const getTheTitles = function(books) {
    return books.map(book=>{
        return book.title
    })
}

module.exports = getTheTitles;
