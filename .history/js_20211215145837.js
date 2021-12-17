const open_search = document.querySelector(".search__btn")

function active(){
   
    this.parentElement.classList.toggle("open")
}

open_search.addEventListener("click",active)