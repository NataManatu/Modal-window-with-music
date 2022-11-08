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
    backdrop.addEventListener("click", closeModal)

    const modalContainer = document.createElement('div');
    modalContainer.className = "modal";
    wrapper.appendChild(modalContainer);

    const cross = createModalButton("modalCross", "x", closeModal);
    const buttonOk = createModalButton("modalOkButton", "PLAY", myMuse);
    const buttonCansel = createModalButton("modalCanselButton", "PAUSE", myMuseStop);


    modalContainer.appendChild(cross);
    modalContainer.appendChild(buttonOk);
    modalContainer.appendChild(buttonCansel);

    document.body.appendChild(wrapper);


});

function createModalButton(className, text, func) {
    const button = document.createElement("button");
    button.setAttribute = ("type", "button");
    button.className = className;
    button.innerText = text;
    button.addEventListener("click", () => {
        func();
    });
    return button;

}

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





