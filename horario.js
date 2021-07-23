function carregar() {
    var msg = window.document.getElementById('msg');
    var manha = window.document.getElementById('manha');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    msg.innerHTML = `<strong>Agora são ${hora}:${min}:${seg}.</strong>`;

    if (hora<12) {
        window.document.body.style.background = '#A4D5DD';
        manha.src = 'img/manha.png';
    }else if (hora<18) {
        window.document.body.style.background = '#F6CB43';
        manha.src = 'img/tarde.png';
    }else {
        window.document.body.style.background = '#3E4EB7'
        manha.src = 'img/noite.png';
    }
}

