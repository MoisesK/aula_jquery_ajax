function consulta_cep() {
    let cep = document.getElementById("cep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    //console.log(url)

    $.ajax({        //isso é o que vai ser executado!
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
        }
    });
}
