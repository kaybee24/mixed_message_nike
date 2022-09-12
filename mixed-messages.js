let messages = [
    { author: "Chris", content: "You cannot learn everything" },
    { author: "Miguel", content: "Let the small potato cook" },
    { author: "Jens", content: "There is no content because I'm boring" },
    { author: "Chris", content: "The whole course is a lie – until the last day" },
    { author: "Malaiz", content: "I'm even more confused now, but that's OK" },
    { author: "Victor", content: "I think I fucked it up – like real good" },
    { author: "Fabian", content: "I'm sure Chris also goes 'add .'" },
    { author: "Victor", content: "I'm super lost in the world'" },
    { author: "Sima", content: "I'm really shutting down now'" },
    { author: "Luben", content: "Life is a list" },
    { author: "Sivak", content: "I do nothing except this course all day – and cook 1 meal" },
    { author: "Fabian", content: "I do 'git branch' now to see where the hell I am" },
]

let generate = Math.floor(Math.random() * messages.length)
let selectedMessage = messages[generate]

// console.log(selectedMessage)

document.getElementById("displayMessage").innerHTML = selectedMessage.content
document.getElementById("displayAuthor").innerHTML = selectedMessage.author



// document.querySelector('displayMessage').addEventListener((click) => {
//     window.location.reload(true);
// })

//.split(" – ")


// console.log(messages[generate])

// <a onclick="openPopUp()">Option 1</a>
// function openPopUp() {
//    alert("We will notify you!");
// }
