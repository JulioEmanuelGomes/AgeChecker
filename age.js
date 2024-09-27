function Verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById("idade");
    const res = document.getElementById("res");
    var sex = document.getElementsByName("sex");
    var idade = ano - fano.value;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");



    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Vareficar os dados e tente novamente!");
    }
    else {

        if (sex[0].checked) {
            gen = "Masculino";

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "img/bebehomem.jpg");
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "img/homenjovem.jpg");

            }
            else if (idade < 50) {
                //Aduto
                img.setAttribute("src", "img/homemadulto.jpg");

            }
            else {
                //Idoso
                img.setAttribute("src", "img/homemvelho.jpg");

            }

        }
        else if (sex[1].checked) {
            gen = "Feminino";

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "img/bebemulher.jpg");
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "img/mulherjovem.jpg");

            }
            else if (idade < 50) {
                //Aduto
                img.setAttribute("src", "img/mulheradulta.jpg");

            }
            else {
                //Idoso
                img.setAttribute("src", "img/mulherveia.jpg");

            }
        }
    }

    res.innerHTML = `Identificamos que é uma pessoa com ${idade} anos de idade do genêro ${gen}.`
    res.appendChild(img);
    console.log("Ok!");
}