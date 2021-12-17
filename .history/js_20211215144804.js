const open_search = document.querySelector(".search__btn")
const wrapper = document.querySelector(".wrapper")
function active(){
    console.log(12);
    wrapper.classList.toggle("open")
}

open_search.addEventListener("click",active)