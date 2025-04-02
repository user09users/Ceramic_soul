const tabs = () => {

    try {
        const tabs = document.querySelectorAll(".catalog__tab");
        const contents = document.querySelectorAll(".catalog__content-item");

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                // Удаляем активный класс у всех табов и контента
                tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
                contents.forEach((c) => (c.style.display = "none"));

                // Добавляем активный класс к нажатому табу и показываем соответствующий контент
                tab.classList.add("catalog__tab_active");
                contents[index].style.display = "flex";
            });
        });

        // Показываем первый контент при загрузке
        contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
    } catch (e) { }
}

export default tabs;