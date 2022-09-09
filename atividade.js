let data = new Date();
let nome = prompt("Digite o seu nome: ");
//let h1 = document.getElementById("tagh1");
let hora = data.getHours()+3;
let msg = "";
let imagem = "";

if (hora < 12) {
    msg = "Bom Dia!";
    imagem = "https://1.bp.blogspot.com/--EK_owinxSI/X6rw1ayKFmI/AAAAAAAAaTQ/3FDu39vwFR8d8ZydETA7qBI-gbEbIS6LQCLcBGAsYHQ/s320/Untitled%2B%25281%2529.jpg";
}
else if (hora < 18) {
    msg = "Boa Tarde!";
    imagem = "https://img.ahazou.com/tr:iodpr-2.0,oh-440,ow-440,oiar-1-1,w-440,oi-full-watermark-1x_SpmxT34_Q.png,oit-true/ahz-posts/67010e2c-ba48-45b3-b134-f1fe1f3f6928/midia/post-6f8501ee-b448-475c-b2cc-eef2eab4931c.png";
}
else {
    msg = "Boa Noite!";
    imagem = "https://www.frasesparawhats.com.br/images/blog/webp-images/2021/08/24/calma-necessaria-para-refletir-sobre-o-dia_52484d997153d400068739fc4d88fcd1.jpg";
}

//let x = "";

/*for (let i = 0; i < hora; i++) {
    x += msg + "<br/>"; //x = x + msg
}*/

//h1.innerText = x;
document.body.innerHTML = "<h1>" + msg + " Sr " + nome + "</h1><br/>"
 + "<img src = '" + imagem + "'/>";
 
