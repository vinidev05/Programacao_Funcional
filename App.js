import { Cliente, ClienteService } from "./classes.js";
import { validarCampos, criarElementoCliente } from "./utils.js";

const baseUrl =
"https://crudcrud.com/api/08a1b9b996ee4ef9b1a34d3f1aa42abd/clientes";
const clienteService = new ClienteService(baseUrl);

const form = document.getElementById("formCliente");
const lista = document.getElementById("listaClientes");

//Carregar lista de clientes cadastrados
document.addEventListener ("DOMContentLoaded", carregarClientes);

//Cadastrar Cliente
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (!nome || !email) {
        alert("Preencha todos os campos");
        return;
    }
    
    const cliente = new Cliente(nome,email);
    await clienteService.cadastrar(cliente);
    
    form.reset();
    carregarClientes();
})

//Renderizar na tela
async function carregarClientes() {
    const clientes = await clienteService.listar();
    lista.innerHTML = "";
    
    clientes.forEach(c =>{
        const cliente = new Cliente(c.nome, c.email, c._id);
        const li = criarElementoCliente(cliente, remover);
        lista.appendChild(li);
    });
}

//Wrapper para chamar a exclusão e recarregar a lista
async function remover(id) {
    await clienteService.excluir(id);
    carregarClientes();
}

