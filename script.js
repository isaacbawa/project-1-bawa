let number = 0;
function increment() {
    number += 1
    document.querySelector(".increment").innerHTML = `Counter is ${number}`
    document.querySelector(".issue").classList.add("issue-off")
}

function decrement() {

    number -= 1
    if (number < 0) {
        number = 0
        document.querySelector(".issue").innerHTML = "Sorry, you can't count bellow 0"
        document.querySelector(".issue").classList.remove("issue-off")
        document.querySelector(".increment").innerHTML = `Counter is ${number}`
    }
    else if (number >= 0) {

        document.querySelector(".increment").innerHTML = `Counter is ${number}`
    }
}


function reset() {
    number = 0
    document.querySelector(".increment").innerHTML = `Counter is ${number}`
    document.querySelector(".issue").classList.add("issue-off")
}
