window.addEventListener("DOMContentLoaded", () => {

    function req() {//функция, которая посылает запросы на сервер
        const request = new XMLHttpRequest();//объект, который позволяет асинхронно общаться с севревром(AJAX)

        request.open("GET", "http://localhost:3000/people");//настройка запроса(получение данных из заданного url адреса)
        request.setRequestHeader("Content-type", "application/json", "charset=utf-8");//определение данных с которыми мы будем работать
        request.send();//отправка запроса
        request.addEventListener("load", function () {/*обработчик событий, который отслеживает стадии запроса*/
            if (request.status === 200) {/*возвращает текущее состояние объекта XMLHttpRequest*/
                let data = JSON.parse(request.response);// разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.
                console.log(data);

                data.forEach(item => {
                    let card = document.createElement("div");

                    card.classList.add("card");

                    let icon;
                    if (item.sex === "male") {
                        icon = "icons/mars.png";
                    } else {
                        icon = "icons/female.png";
                    }

                    card.innerHTML = `
                        <img src="${item.photo}" alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    document.querySelector(".app").appendChild(card);
                });

            } else {
                console.error("Что-то пошло не так");
            };

        });
        this.remove();
    }

    document.querySelector("button").addEventListener("click", req, { "once": true });//устанавливаем, что обработчик событий сработает только один раз
});