let openSidebarEl = document.getElementById("open-sidebar")
const sidebarEl = document.getElementById("sidebar")
const closeSidebarEl = document.getElementById("close-sidebar")

openSidebarEl.addEventListener("click",()=>{
    sidebarEl.style.transform = "translate(0px)";
})
closeSidebarEl.addEventListener("click",()=>{
    sidebarEl.style.transform = "translate(-260px)";
})