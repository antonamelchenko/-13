window.onload = function() {
    setInterval(() => {
        let now = new Date(); // определяем текующее время
        let h = now.getHours(); // Берем из него часы
        let m = now.getMinutes(); // Минуты
        let s = now.getSeconds(); // Секунды
        h = (h < 10) ? "0" + h : h; // Добавляем 0 перед числом, если оно меньше 10 (чтобы было не 1:32:32, а 01:32:32)
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        let item = document.getElementById('clock'); // Находим элемент по id
        item.innerHTML = `${h}:${m}:${s}`; // Вставляем дату
    }, 1000); // Повторяем это каждуюю секунду
};