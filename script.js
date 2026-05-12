var formulario = document.getElementById('formularioContato');

formulario.addEventListener('submit', function(evento) {
    
    evento.preventDefault();

    var campoNome= document.getElementById('nome');
    var campoEmail = document.getElementById('email');
    var campoMensagem = document.getElementById('mensagem');
    var sucessoCaixa= document.getElementById('mensagemSucesso');

    // Retira a mensagem de inválidez

    campoNome.classList.remove('invalido');
    campoEmail.classList.remove('invalido');
    campoMensagem.classList.remove('invalido');

    // Variável para ter certeza de que esta tudo certo

    var formularioValido = true;

    //Metodo de validação do nome: 

    if(campoNome.value.trim() === '') {
        campoNome.classList.add('invalido');
        formularioValido = false;
    }

    // validação do email:

    if(campoEmail.value.trim() === '') {
        campoEmail.classList.add('invalido');
        formularioValido = false;
    } else {
        // Verifica "@" e o "."

        var emailTexto = campoEmail.value.trim();
        var arroba = emailTexto.includes('@');
        var pontoCerto = false;

        if(arroba) {
            var partedopontoCerto = emailTexto.split('@')[1];
            if (partedopontoCerto.includes('.')) {
                pontoCerto = true;
            }
        }

        if (!arroba || !pontoCerto) {
            campoEmail.classList.add('invalido');
            formularioValido = false;
        }
    }

    // Verificação de mensagem esta vazia

    if (campoMensagem.value.trim() === '') {
        campoMensagem.classList.add('invalido');
        formularioValido = false;
    }

    // Quebra do ciclo caso tenha um erro

    if (!formularioValido) {
        alert('Preencha todos os campos corretamente e verifique o e-mail.');
        return; 
    }



    // Envio:

    // Limpeza dos campos anteriores:
    campoNome.value = '';
    campoEmail.value = '';
    campoMensagem.value = '';

    sucessoCaixa.classList.remove('oculto');

    // Esconde a mensagem pontoCerto de 4 segundos
    setTimeout(function() {
        sucessoCaixa.classList.add('oculto');
    }, 4000);
});