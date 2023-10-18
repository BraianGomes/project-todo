let contador = 0;
let inputTask = document.getElementById("input-task");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("list");

function addTask() {
  let valorInput = inputTask.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let = novoItem = `<div id="${contador}" class="item checked">
        <div onclick="markTask(${contador})" class="item-icon">
            <span id=icon_${contador}"    class="material-symbols-outlined">radio_button_unchecked</span>
        </div>

        <div onclick="markTask(${contador})" class="item-name">
            ${valorInput}
        </div>

        <div class="item-btn">
            <button onclick = "del(${contador})"  class="delete">
<span class="material-symbols-outlined">delete<span> Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    inputTask.value = "";
    inputTask.focus();
  }
}

function del(id) {
  var task = document.getElementById(id);
  task.remove();
}

function markTask(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe="item"){
        item.classList.add('checked');

        var icon = 
        document.getElementById('icon_' + 
        icon.classList.remove('"material-symbols-outlined">radio_button_unchecked'));

        icon.classList.add('"material-symbols-outlined">check_circle');
        
        item.parentNode.appendChild(item);
        
    } else{

        item.classList.add('checked');

        var icon = 
        document.getElementById('icon_' + 
        icon.classList.remove('"material-symbols-outlined">check_circle'));

        icon.classList.add('"material-symbols-outlined">radio_button_unchecked');
    }

}

inputTask.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
