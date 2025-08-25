
function enviarCadastro() {
    Swal.fire({
        
        text: "Cadastro realizado com sucesso!",
        icon: "success"
      });
}





function enviarFormulario() {
    console.log("Apertou o botão")

    //Capturar os valores do input e criar variavel para o objeto JSON
    let contaCliente = new Object();

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.sobrenome = document.getElementById("sobrenome").value;
    contaCliente.datadenascimento = document.getElementById("data_nascimento").value;
    contaCliente.rg = document.getElementById("rg").value;
    contaCliente.cpf = document.getElementById("cpf").value;
    contaCliente.nacionalidade = document.getElementById("nacionalidade").value;
    contaCliente.naturalidade = document.getElementById("naturalidade").value;
    



    //Converter para String JSON
    let meuJson = JSON.stringify(contaCliente)

    console.log(meuJson)
    //Mostrar o Array - Primitivo
    console.log(contaCliente.valueOf())


}
