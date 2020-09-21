//adicioar os numeros quando precionados
function calcNum(num){
  if(typeof gtela == 'undefined'){
    document.calcf.tela.value = '';
  }
  document.calcf.tela.value = document.calcf.tela.value + num;
  gtela = 1
}

//limpar
function calcLimpar(){
  document.calcf.tela.value = '';
  delete gvalor;
  delete goper;
  delete gvisor;
}

//ações do usuário
function calcParse(oper){
  var valor = document.calcf.tela.value;
  delete gtela;

  if(typeof goper != 'undefined'&& oper == 'resultado') {
    gvalor = calcOper(goper,gvalor, valor);
    document.calcf.tela.value = gvalor;
    delete oper;
    delete gvalor;
    return(0);
  }
  if (typeof gvalor != 'undefined'){
    gvalor = calcOper(goper, gvalor, valor);
  }
  else{
    gvalor = valor;
    goper = oper;
  }
}

//operações
function calcOper(oper, valor1, valor2, valor){
  switch(oper){
    case "somar":
      valor = parseInt(valor1) + parseInt(valor2)
      break;

    case "subtrair":
      valor = parseInt(valor1) - parseInt(valor2)
      break;
    
    case "multiplicar":
      valor = parseInt(valor1) * parseInt(valor2)
      break;
    
    case "dividir":
      valor = parseInt(valor1) / parseInt(valor2)
      break;
  }
  return(valor)
}