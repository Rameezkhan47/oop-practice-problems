const bookDetails = {
    JHTP: { title: "Java How to Program", year: "2015" },
    CHTP: { title: "C How to Program", year: "2013" },
    IW3HTP: { title: "Internet & World Wide Web How to Program", year: "2012" }
    };

let swapped = {}

for (let book in bookDetails) {
    swapped[JSON.stringify(bookDetails[book])] = book; //JSON.stringify is used because object cannot be keys 
}
for (let book in bookDetails){
console.log(`${book}: ${bookDetails[book].title} (${bookDetails[book].year})`);

}
console.log(swapped);