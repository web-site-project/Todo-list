const textIn = document.getElementById("textInput"),
      addBtn  = document.getElementById("addBtn"),
      list   = document.querySelector(".list-unstyled"),
      listTodo = document.querySelectorAll(".listTodo");

let datas = [];
let ch ;

localStorage.getItem("datas") ? datas = JSON.parse(localStorage.getItem("datas")) : null ;

addToLocal = () => localStorage.setItem("datas" , JSON.stringify(datas));

let elements = (Checks , Id , Values) => {
     return `<li class=" bg-light ">
                <div class="toDoSection">
                    <p class="h-auto " id="${Id}" onclick="completed(event)" data-check="${Checks}">${Values}</p>
                </div> 
                <div class="remove" >
                    <i class="fa-solid fa-trash-can" onclick="delte(event)" id="${Id}"></i>
                </div>
            </li>
        `
} 

let showData = () => list.innerHTML = datas.map((x) => elements(x.Checks , x.Id , x.Values)).join("")

let showPiece = () =>{
    if(ch == null){
        showData();
    }else if(ch == false){
        list.innerHTML = datas.map(x => x.Checks == false ? elements(x.Checks , x.Id , x.Values) : null ).join("")
    }else{
        list.innerHTML = datas.map(x => x.Checks == true ? elements(x.Checks , x.Id , x.Values) : null).join("")
    }

    addToLocal();
}

addBtn.onclick = () => {
    if(textIn.value === ""){
        alert("the input should not be empty");
    }else{

        datas.push({
            Values: textIn.value ,
             Checks : false ,
              Id : Date.now()
            });
        showPiece();
    }
    
    textIn.value = "";
}

completed = (e) =>{

    let ev = e.target;

    datas.map((x) => x.Id == ev.id ? x.Checks = !x.Checks: null )

    showPiece();   
}


delte = (e) => {

    let ev = e.target;

    datas = datas.filter((x) => x.Id != ev.id)

    showPiece();  
}

listTodo.forEach(x => {
    x.addEventListener("click" , event =>{
        let ev = event.target;
        if(ev.dataset.targets == "All"){
            showData();
            ch = null;
        }else if(ev.dataset.targets == "Activ"){
            list.innerHTML = datas.map(x => x.Checks == false ? elements(x.Checks , x.Id , x.Values) : null ).join("")
            ch = false;
        }else{
            list.innerHTML = datas.map(x => x.Checks == true ? elements(x.Checks , x.Id , x.Values) : null).join("")
            ch = true;
        }
    })

})


showData();