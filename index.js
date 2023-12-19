const lines = document.querySelectorAll(".buttons .line"),
      btns = document.querySelectorAll("button"),
      search_input = document.getElementById("search-input"),
      cap = document.querySelector(".CAPS");
let caps = true;
let shift = true;


let upperCase = () => btns.forEach(v => v.innerHTML =  v.innerHTML.toString().toUpperCase());
let lowerCase = () => btns.forEach(v => v.innerHTML =  v.innerHTML.toString().toLowerCase());
let shiftFun  = () => {
   if(caps){
      
      shift ? upperCase() : lowerCase();
      
      shift = !shift;
   }
}

let capsFun = () => {

   caps ? upperCase() : lowerCase();

   caps = !caps;

   caps ? cap.classList.remove("active") :  cap.classList.add("active");

}



window.addEventListener("keydown" , e => {
   let d = e.keyCode;
   search_input.focus();

   for(let i = 0 ; i < 100 ; i++){
      if(btns[i].dataset.ascii == d){
         btns[i].classList.add("click");
         this.setTimeout(() =>{ 
            btns[i].classList.remove("click")
         }, 100);


         if(btns[i].dataset.ascii == 20 ){
            capsFun();
         }

                  
         if(btns[i].dataset.ascii == 16){
            shift ? upperCase() : lowerCase();
      
      shift = !shift;
         }
      }
   }
})
 
lines.forEach(x => {
      x.addEventListener('click' , event =>{
         search_input.focus();
         let key_action = event.target ;
         if(key_action.innerHTML.length < 2 ){
            search_input.value += event.target.innerHTML ;

            shift ? null : lowerCase();

            shift ? null : shift = !shift;
         }else if(key_action.value === "SHIFT"){
            shiftFun();
         }else if(key_action.value === "BACK"){
            search_input.value = search_input.value.substring(0 , search_input.value.length - 1 )
         }else if(key_action.value === "ENTER"){
            // write code to do ENTER function
         }else if(key_action.value === "TAB"){
            // write code to do TAB function
         }else if(key_action.value === "CAPS"){
            capsFun();
         }
      })

});



