# Геокодирование адресов с использованием API Яндекс.Карт

Минималистичное веб-приложение для массового геокодирования адресов с использованием API Яндекс.Карт (версия 2.1). Проект создан для решения рабочей задачи, где требовалось быстро и удобно получать географические координаты (широту и долготу) для большого списка адресов.

---

## 🚀 Как это работает

1. **Ввод API-ключа**:
   - На главной странице пользователь вводит API-ключ от Яндекс.Карт.
   - Ключ сохраняется в `localStorage`, и пользователь перенаправляется на страницу геокодирования.

2. **Массовое геокодирование**:
   - На странице геокодирования пользователь вставляет список адресов (один адрес на строку).
   - Приложение отправляет запросы к API Яндекс.Карт для получения координат.

3. **Результаты**:
   - Результаты отображаются в таблице с колонками: "№", "Адрес", "Широта", "Долгота".
   - Если геокодирование не удалось, в таблице указывается "none".

4. **Выход**:
   - Пользователь может выйти, удалив API-ключ из `localStorage` и вернувшись на страницу ввода.

---

## 🛠 Технические детали

- **API Яндекс.Карт 2.1**: Используется для геокодирования адресов. [Документация](https://yandex.ru/dev/jsapi-v2-1/doc/ru/).
- **Динамическая загрузка API**: API загружается только после ввода ключа.
- **Обработка ошибок**:
  - Если API не загрузилось, пользователь возвращается на страницу ввода ключа.
  - Если геокодирование не удалось, в таблице указывается "none".
- **Минималистичный интерфейс**: Простой и понятный дизайн, адаптированный для быстрой работы.

---

## 📦 Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/Levshin-ArtQ/bundle-geocoder-yamaps.git
   cd bundle-geocoder-yamaps
   ```

2. **Откройте проект**:
   - Запустите файл `index.html` в браузере.

3. **Введите API-ключ**:
   - Получите/посмотрите API-ключ на [странице разработчика Яндекс.Карт](https://developer.tech.yandex.ru/services/).

4. **Введите адреса**:
   - Вставьте список адресов (один адрес на строку) и нажмите "Обработать адреса".

---

## 🖥 Пример использования

1. Введите API-ключ на главной странице.
2. Перейдите на страницу геокодирования.
3. Вставьте список адресов:
   ```
   Москва, Красная площадь
   Санкт-Петербург, Невский проспект
   Екатеринбург, проспект Ленина
   ```
4. Нажмите "Обработать адреса".
5. Результаты появятся в таблице:
   | №  | Адрес                     | Широта     | Долгота     |
   |----|---------------------------|------------|-------------|
   | 1  | Москва, Красная площадь    | 55.7539    | 37.6208     |
   | 2  | Санкт-Петербург, Невский пр.| 59.9343   | 30.3351     |
   | 3  | Екатеринбург, пр. Ленина   | 56.8389    | 60.6057     |

---

## 🧩 Особенности реализации

- **Динамическая загрузка API**: API Яндекс.Карт загружается только после ввода ключа, что позволяет избежать ошибок при отсутствии ключа.
- **Очистка адресов**: Удаление специальных символов из адресов перед отправкой в API.
- **Сохранение порядка**: Результаты выводятся в том же порядке, в котором были введены адреса.
- **Минимализм**: Простой интерфейс без лишних элементов, ориентированный на выполнение одной задачи.

---

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробности см. в файле [LICENSE](LICENSE).

---

## 🤝 Контакты

Если у вас есть вопросы или предложения, свяжитесь со мной:

- **GitHub**: [Levshin-ArtQ](https://github.com/Levshin-ArtQ)
- **Email**: [artqptr@gmail.com](mailto:artqptr@gmail.com)

---

## 🔗 Ссылки

- [Демонстрационная версия](https://vercel.com/levshinartqs-projects/bundle-geocoder-yamaps)
- [Документация API Яндекс.Карт 2.1](https://yandex.ru/dev/jsapi-v2-1/doc/ru/)
- [Получение API-ключа](https://developer.tech.yandex.ru/services/)

---

Проект создан для решения конкретной задачи, но может быть полезен и в других сценариях. Если вам нужно что-то доработать или адаптировать, дайте знать! 🚀