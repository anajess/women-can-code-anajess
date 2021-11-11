const meuCachorro = {
    "nome": "Nina",
    "patas": 4,
    "caudas":1,
    "principalAmigo": "Ana"
}
console.log(meuCachorro);

meuCachorro.brinquedoFavorito= "bolinha";
console.log(meuCachorro);
delete meuCachorro.patas;
console.log(meuCachorro);
meuCachorro.nome = "Pluto";
console.log(meuCachorro);