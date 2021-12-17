const open_search = document.querySelector(".search__button")
const wrapper = document.querySelector(".wrapper")
function active(){
    wrapper.classList.add("open")
}

open_search.addEventListener("click",active)