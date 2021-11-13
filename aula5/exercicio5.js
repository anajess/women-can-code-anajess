function validaMaioridade (anoNascimento){
    idade = 2021 - anoNascimento;
    return idade<18? "Liberação NÃO autorizada": idade>18? "Liberação autorizada": "Validar documento de identidade"; 
}
console.log(validaMaioridade(2003));