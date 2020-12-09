const input = document.querySelector('input[type="checkbox"]');
function handleInput() {
    const { checked } = this;
    document.querySelector('body').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('p1').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('p2').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('p3').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('p4').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('p5').style.background = checked ? 'url("./asset/img/dark.jpg")' : 'url("./asset/img/jungle.jpg")';
    document.getElementById('resumeOwner').src = checked ? './asset/img/alireza3.jpg' : './asset/img/programmer.jpg';
}
input.addEventListener('input', handleInput);
let cont = 0;
function menu(){

    if(cont % 2 == 0){ document.querySelector('.cont_menu_bottom').className = "cont_menu_bottom cont_menu_active";
        cont++;
    }else{
        document.querySelector('.cont_menu_bottom').className = "cont_menu_bottom";
        cont++;
    }

}