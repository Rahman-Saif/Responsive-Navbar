let sectionClass=document.querySelector(".section-class");
let liContainers=document.querySelector("#list-containers");
console.log(sectionClass);
// console.log(liContainers.classList);
// console.log(liContainers.classList.contains("display-none"))
sectionClass.addEventListener("click",function(){
    // if(liContainers.classList.contains("display-none")){
    //     liContainers.classList.add("display-show")
    // }else{
    //     liContainers.classList.add("display-none")
    // }
    liContainers.classList.toggle("display-show");
})