// Задание 2
// Создайте новый файл с именем `remove_handler.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Определите функцию-обработчик, которая будет регистрироваться для события `event`.
const handler = () => {
  console.log("Event log");
};

// Зарегистрируйте этот обработчик для события `event`.
emitter.on("event", handler);

// Сгенерируйте событие `event` и убедитесь, что обработчик вызывается.
emitter.emit("event");

// Удалите зарегистрированный обработчик для события `event`.
emitter.removeListener("event", handler);

// Снова сгенерируйте событие `event` и убедитесь, что обработчик больше не вызывается.
emitter.emit("event");
