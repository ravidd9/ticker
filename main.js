const manager = new Manager()
const renderer = new Renderer()

const loadPage = function () {
    console.log(manager.messages)
    renderer.render(manager.messages)
}

loadPage()




// const loadPage = function () {
//     renderer.render(manager.threeMessages)
//     manager.getNextThree()

//     setInterval(function () {
//         renderer.render(manager.threeMessages)
//         manager.getNextThree()
//     }, 2000);
// }

// loadPage()
