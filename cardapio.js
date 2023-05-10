let dayOFWeek = "Terça";// O valor que sera atribuido para ser mostrado

switch(dayOFWeek) {// O Switch passa a variavel para todos os cases.
    case "segunda":
        console.log("Segunda é dia de Virado a paulista");
        break;// Interrempo  e passa para o proximo case.
    case "Terça":
        console.log("Terca é o dia de picadinho com batata");
        break;
    case "Quarta":
        console.log("Quarta é dia de feijoada");
        break;
    case "Quinta":
        console.log("Quinta é dia de macarronada");
        break;
    case "Sexta":
        console.log("Sexta é dia de peixe com pure");
        break;
    default:
        console.log("Não abrimos nos de mais dias.");//Resposta conttraria,ou seja,fora dos cases ánteriores.                
}