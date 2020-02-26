document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.click_menu');
    let divInfo = document.querySelector('.block_1 > div.content > div');

    button.addEventListener('click', () => {
        if (button.classList.contains("close")) {
            let nav = document.createElement('nav');
            nav.innerHTML = `<a href="#" class="navlink">Главная</a>
                             <a href="#" class="navlink">прп.Савва сторожевский</a>
                             <a href="#" class="navlink">Жизнь прихода</a>
                             <a href="#" class="navlink">Фотоальбом</a>
                             <a href="#" class="navlink">Контакты</a>
                             <a href="#" class="navlink">Пожертвования</a>`;
            button.after(nav);
            button.classList.replace("close", "open");
        }
        else {
            let nav = document.querySelector('.burger_menu nav');
            button.classList.replace("open", "close");
            nav.remove();
        }

    });

});

