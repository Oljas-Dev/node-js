// Задание 4 Создайте новый файл с именем `countdown_timer.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Напишите функцию `countdown`, которая принимает количество секунд и объект `EventEmitter`.

// Внутри функции `countdown` используйте `setInterval`, чтобы каждую секунду генерировать событие `tick` с текущим оставшимся временем.
const countdown = (sec, emitter) => {
  let remainedSec = sec;

  const interval = setInterval(() => {
    emitter.emit("tick", remainedSec);

    remainedSec--;

    // Когда таймер достигнет нуля, генерируйте событие `end` и остановите интервал.
    if (remainedSec <= 0) {
      emitter.emit("end", interval);
    }
  }, 1000);
};

// Зарегистрируйте обработчики для событий `tick` и `end`, чтобы выводить сообщения в консоль.
emitter.on("tick", (sec) => {
  console.log(sec);
});

emitter.on("end", (interval) => {
  console.log("Timer stopped");
  clearInterval(interval);
});

// Вызовите функцию `countdown` с начальным временем и вашим объектом `EventEmitter`.
countdown(10, emitter);
