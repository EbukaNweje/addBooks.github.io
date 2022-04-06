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

const InputDis = document.querySelector("#input") 
const Dis = document.querySelector("#Dis") 
const Info = document.querySelector("#Info") 

InputDis.addEventListener("click", ()=>{
      const InputDisk = document.querySelector(".InputDis")
      const OutPutDis = document.querySelector(".OutPutDis")
      const InfoDis = document.querySelector(".InfoDis")

      OutPutDis.style.display=  "none"
      InfoDis.style.display=  "none"
      InputDisk.style.display=  "block"
})

Dis.addEventListener("click", ()=>{
      const InputDisk = document.querySelector(".InputDis")
      const OutPutDis = document.querySelector(".OutPutDis")
      const InfoDis = document.querySelector(".InfoDis")

      InputDisk.style.display=  "none"
      InfoDis.style.display=  "none"
      OutPutDis.style.display=  "block"

})

Info.addEventListener("click", ()=>{
      const InputDisk = document.querySelector(".InputDis")
      const OutPutDis = document.querySelector(".OutPutDis")
      const InfoDis = document.querySelector(".InfoDis")

      InputDisk.style.display=  "none"
      OutPutDis.style.display=  "none"
      InfoDis.style.display=  "block"

})

