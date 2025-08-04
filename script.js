// Script criado com 💚 por Pamella Fraga

function adicionarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  if (tarefa === "") return;
  const li = document.createElement("li");
  li.textContent = tarefa;
  document.getElementById("lista").appendChild(li);
  document.getElementById("tarefa").value = "";
}
