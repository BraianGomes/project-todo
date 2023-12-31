let contador = 0;
let inputTask = document.getElementById("input-task");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("list");

function addTask() {
  let valorInput = inputTask.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let = novoItem = `
    <div id="${contador}" class="item checked">
            <div onclick="markTask(${contador})" class="item-icon">
                <input type="checkbox" name="checked" onclick="adicionarSeletor()">
            </div>

            <div onclick="markTask(${contador})" class="item-add">
                ${valorInput}
            </div>

            <div class="item-btn">
<button onclick="del(${contador})" class="delete"><i class='bx bx-trash'></i>Deletar</button>
            </div>
        </div>
        `;

    main.innerHTML += novoItem;

    inputTask.value = "";
    inputTask.focus();
  }
}

function del(id) {
  var task = document.getElementById(id);
  task.remove();
}

inputTask.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

////////////////////Checked itens//////////////////////////
function adicionarSeletor() {
  var adicionar = document.getElementById("item-add");
  adicionar.classList.add("personalizacao");
};



/////////////////////////////////////////////////////////////
