    const inputCep = document.querySelector('#cep');
		const inputRua = document.querySelector('#rua');
    const inputBairro = document.querySelector('#bairro')
		const inputCidade = document.querySelector('#cidade');
		const inputUf = document.querySelector('#uf');

		inputCep.addEventListener('blur', ()=>{
			const cep = inputCep.value.replace('-', '');
			const endPointAPI = `https://viacep.com.br/ws/${cep}/json/`;

			fetch(endPointAPI)
				.then(response => response.json())
				.then(data => {
					if(data.erro) {
						alert('CEP não encontrado');
					} else {
						inputRua.value = data.logradouro;
            inputBairro.value = data.bairro
						inputCidade.value = data.localidade;
						inputUf.value = data.uf;
					}
				})
				.catch(error => console.error(error));
		});