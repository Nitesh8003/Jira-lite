let addcardbtn=document.querySelector("#addCard");
let todolist=document.querySelector("#todo");

addcardbtn.addEventListener("click",addtask)

function addtask(){
    //creating a div for writing task

    let card=document.createElement("div");
    card.className="card";
    card.innerText="Test card"
    // to make task inner text editable

    card.setAttribute("contenteditable","true")
    todolist.append(card);
    
    //Focus to directly to div wich we made
    card.focus();

    // Problem 1(empty card should remove automatically)
    // foucs lost => blur event
    card.addEventListener("blur",(eventDetails)=>{
        //selecting the target card which is blurred or clicked
        let blurredcard=eventDetails.target;
        if(blurredcard.innerText.trim()==""){
            blurredcard.remove();
        }

    })

    // problem 2 => make default text empty when we click on that

    card.addEventListener("click",(eventDetails)=>{
        let clickedcard=eventDetails.target;

        if(clickedcard.innerText.trim()=="Test card"){
            clickedcard.innerText="";
        }
    })


    let selector=document.createElement("select")
    selector.innerHTML=`
    //id are same so not that much isue

    <option value="todo">Todo</option>
    <option value="progress">Progress</option>
    <option value="done">Done</option>
    
    `
    card.append(selector);


    // When id are not same 
    // let selectedIdMapping={
    //     todo1 : "todo",
    //      progress1 : "progress",
    //      done1 : "done"
    // }

    selector.addEventListener("change",(eventDetails)=>{
        //selecting the option value
        let selectedOption=eventDetails.target.value;//todo progress done
        //on which container we have to add the card
        let selectedContainer=document.querySelector(`#${selectedOption}`)
        selectedContainer.append(card);
    })










}