// Задание 1. Регистрация нескольких обработчиков на одно событие

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Зарегистрируйте первый обработчик для события `event`.
emitter.on("event", () => {
  console.log("First event");
});

// Зарегистрируйте второй обработчик для того же события `event`.
emitter.on("event", () => {
  console.log("Second event");
});

// Сгенерируйте событие `event`.
emitter.emit("event");

// Запустите скрипт и убедитесь, что оба обработчика вызываются при генерации события.
