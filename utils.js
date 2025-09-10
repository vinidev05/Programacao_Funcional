export function validarCampos(nome, email) {
    return nome.trim() !== "" && email.trim() !== "";
}

export function criarElementoCliente(cliente, onDelete){
    const li= document.createElement("li");
    li.innerHTML = `${cliente.nome} - ${cliente.email}
    <button>Excluir</button> `;
    
    li.querySelector("button").addEventListener("click",() => onDelete(cliente.id));
    return li;
}
