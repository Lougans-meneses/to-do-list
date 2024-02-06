// Este bloco de código é executado quando o DOM (Document Object Model) está totalmente carregado.
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addButton = document.getElementById("addButton");

  // Função para criar uma nova tarefa
  function createTask() {
    const trimmedValue = taskInput.value.trim();

    // Verifica se o valor está vazio
    if (trimmedValue === "") {
      alert("Por favor, adicione uma tarefa!");
      taskInput.style.border = "2px solid red";
      taskInput.placeholder = "Campo obrigatório";
      return;
    } else {
      // Obtém o valor da entrada do usuário, removendo espaços em branco no início e no final
      taskInput.style.border = "";
      taskInput.placeholder = "Digite uma nova tarefa";
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      // Adiciona ou remove o estilo de texto riscado quando a caixa de seleção é alterada
      span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const span = document.createElement("span");
    span.appendChild(document.createTextNode(trimmedValue));

    const removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remover"));
    removeButton.classList.add("remove-button");
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Adiciona os elementos criados à lista de tarefas
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Limpa o valor da entrada após adicionar a tarefa
    taskInput.value = "";
  }

   // Adiciona um ouvinte de evento para a tecla "Enter" na entrada do usuário
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Chama a função createTask() quando a tecla "Enter" é pressionada
      createTask();
    }
  });

  // Adiciona um ouvinte de evento para o clique no botão "Adicionar"
  addButton.addEventListener("click", createTask);
});