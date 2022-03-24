// Happy coding!

let circulosColores = document.querySelector(".canvas");
circulosColores.addEventListener("click", function(event){
    console.log(event.target.id);
   
    document.querySelector("body").style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;




    
})

