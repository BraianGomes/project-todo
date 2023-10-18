let inputTask = document.getElementById('input-task');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('list');

function addTask(){
    let valorInput = inputTask.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
     
        let = novoItem = `<div class="item">
        <div class="item-icon">
            <span class="material-symbols-outlined">radio_button_unchecked</span>
        </div>

        <div class="item-name">
            ${valorInput}
        </div>

        <div class="item-btn">
            <button id="delete">
<span class="material-symbols-outlined">delete<span> Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();

    }
}

input.addEventListener("keyup", function(event){
    
    if(event.keycode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})
