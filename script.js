function consultaEndereco(){
    let cep = document.getElementById('cep').value;

    if(cep.length !== 8) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">*Cep Inválido! Por favor tente novamente inserindo 8 digitos!*'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(conteudo => {
        return conteudo.json()
    }).then(endereco => {
        document.getElementById('resultado').innerHTML = `<p>Rua: ${endereco.logradouro}</p>
                                                          <p>Bairro: ${endereco.bairro}</p>
                                                          <p>Cidade: ${endereco.localidade}</p>
                                                          <p>Cep: ${endereco.cep}</p>
                                                          <p>Estado: ${endereco.uf}</p>
                                                          <p>DDD: +55 0${endereco.ddd}</p>`
    })
}
