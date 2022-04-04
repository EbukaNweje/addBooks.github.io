const Author = document.querySelector("#Author")
const Title = document.querySelector("#Title")

let addBook = JSON.parse(localStorage.getItem("BookInfo")) || []
submit.addEventListener("click", () => {
      let myInput = Author.value
      let myInput2 = Title.value
      let myInputs = {myInput, myInput2}

      addBook.push(myInputs)
      localStorage.setItem("BookInfo", JSON.stringify(addBook))
      window.location.reload()
})
let Dates = new Date().toISOString().slice(0, 10)
const showInfo = document.querySelector(".ShowInfo")
addBook.forEach((text, index) => {
      const render = `<div>
                  <div>${text.myInput} br ${text.myInput2}</div>
                  <div>${Dates}</div>
                  <div><button id=${index} class="Delete">Del</button></div>
      </div>`

      showInfo.innerHTML += render
});


const deletes = document.querySelectorAll(".Delete")
deletes.forEach((Deletes, index)=>{
      Deletes.addEventListener("click", ()=>{
            addBook = addBook.filter((book, i)=> index !== i)
            localStorage.setItem("BookInfo", JSON.stringify(addBook))
            window.location.reload()
            console.log(deletes);
      })       
})

