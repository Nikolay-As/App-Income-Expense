class CategoryIncome {
  // Категория дохода
  // Инициализация приватных полей

  #id; // Номер
  #name; // Наименование категории
  #date_add; // Дата добавления категории

  // Конструктор
  constructor(id, name, date_add) {
    this.#id = id;
    this.#name = name;
    this.#date_add = date_add;
  }

  // Метода GET
  get_id() {
    // Возвращает id категории
    return this.#id;
  }
  get_name() {
    // Возвращает name категории
    return this.#name;
  }
  get_date_add() {
    // Возвращает date_add категории
    return this.#date_add;
  }

  // Методы SET
  set_id(id) {
    // Изменяет id категории
    this.#id = id;
  }
  set_name(name) {
    // Изменяет name категории
    this.#name = name;
  }
  set_date_add(date_add) {
    // Изменяет date_add категории
    this.#date_add = date_add;
  }

  // Методы другие
  print_info_category() {
    console.log(
      "id: " +
        this.#id +
        " name: " +
        this.#name +
        " date_add: " +
        this.#date_add
    );
  }
}

module.exports = CategoryIncome; // Делаем класс экспортируемым
