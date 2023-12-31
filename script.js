function fun(){
    let inputs=document.getElementById("inp");
    let text=document.querySelector(".text");
    if(inputs.value==""){
       alert("ENTER SOMETHING")
    }
   else{ 
    let newEle=document.createElement("li");
    newEle.innerHTML=`${inputs.value}<i><i id="delete" class="fa fa-trash-o" style="font-size:25px;color:black;margin-left:50px;">
    </i><i id="done" class="fa fa-check" style="font-size:25px "></i></i>`;
    text.appendChild(newEle);
    inputs.value="";
    newEle.querySelector("#delete").addEventListener("click",remove);
    function remove(){
        newEle.remove()
    }
    newEle.querySelector("#done").addEventListener("click",DONE);
    function DONE(){
        newEle.style.textDecoration="line-through";
    }
}
 
}