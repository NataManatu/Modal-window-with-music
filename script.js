// 1.Кнопка
// 2.Отслеживаем клик
// 3.Затемняем экран
// 4.Поверх темного экрана рисуем модальное окно
// 5.В модальном окне отрисовываем разные кнопки
// 6.Вешаем клик на каждую кнорку модального окна
// 7.Отслеживаем клик на затемненную область


const openModalButton = document.getElementById("open_modal");
console.log(openModalButton)

openModalButton.addEventListener("click", () => {
    // const backdrop = document.querySelector(".backdrop");
    // backdrop.style.display = "initial";

    const wrapper = document.createElement('div');
    wrapper.className = "modalWrapper";


    const backdrop = document.createElement('div');
    backdrop.className = "backdrop";
    wrapper.appendChild(backdrop);



    const modalContainer = document.createElement('div');
    modalContainer.className = "modal";
    wrapper.appendChild(modalContainer);


    const cross = document.createElement('button');
    cross.setAttribute = ("type", "button");
    cross.className = "modalCross";
    cross.innerText = "x"



    const buttonOk = document.createElement('button');
    buttonOk.setAttribute = ("type", "button");
    buttonOk.className = "modalOkButton";
    buttonOk.innerText = "PLAY";



    const buttonCansel = document.createElement('button');
    buttonCansel.setAttribute = ("type", "button");
    buttonCansel.className = "modalCanselButton";
    buttonCansel.innerText = "PAUSE";



    backdrop.addEventListener("click", closeModal)
    cross.addEventListener("click", closeModal)
    buttonOk.addEventListener("click", myMuse)
    buttonCansel.addEventListener("click", myMuseStop)



    modalContainer.appendChild(cross);
    modalContainer.appendChild(buttonOk);
    modalContainer.appendChild(buttonCansel);



    document.body.appendChild(wrapper);

  
});

function closeModal() {
    const modal = document.querySelector('.modalWrapper');

    if (!modal) {
        console.error('hh');
        return;
    }
    else {
        modal.remove();
        myMuseStop()
        
    }
}


const audio = new Audio();
audio.src = "Z.mp3";
audio.autoplay = false;


function myMuse() {
   audio.play()
   audio.autoplay = !audio.autoplay
}

function myMuseStop() {
    audio.pause()
    audio.autoplay = !audio.autoplay
 }







