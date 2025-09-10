export class Cliente{
    constructor(nome, email, id = null) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
}

export class ClienteService {
    #baseUrl;
    
    constructor(baseUrl){
    this.#baseUrl = baseUrl;
}
    
    async listar() {
    const resp = await fetch(this.#baseUrl);
    return resp.json();
}
    
   async cadastrar(cliente) {
    await fetch(this.#baseUrl, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(cliente),
    });
}
    async excluir(id){
        await fetch(`${this.#baseUrl}/${id}`, {method: "DELETE"});
        
    }
}    