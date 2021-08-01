### Тестовое задание на React и Typescript

Сверстать страничку по макету Figma (без прелоадера) с использованием фреймворка React и языка TypeScript: 
- Макет: https://www.figma.com/file/YGXq1mzXTTc4Rfwt5vxgUo
- Презентация макета: https://www.figma.com/proto/YGXq1mzXTTc4Rfwt5vxgUo
- Адаптивная вёрстка для desktop и mobile устройств [**done**]
- Fuzzy and Live Search (живой фильтр): debounce c окончательной фильтрацией на клиенте. Сервер может вернуть “неподходящие” элементы, которые не попадают в фильтр. Их надо будет выкинуть и запросить еще пакет данных взамен выкинутых. [**done**]
- Постраничный вывод (по мере скроллинга) [**done, с анимированным лоадером**]
- Обработка серверных ошибок (вывод в область сообщений) [**done**]
- Обработка ошибок скачивания картинок [**done, заменяются на картинку по умолчанию**]
- Состояние интерфейса сохранить в LocalStorage (installed/not installed) [**done**]
- Drag & drop для сортировки элементов списка [**done**]
- Привязать бэкенд https://dapplets-hiring-api.herokuapp.com/ [**done**]


Live demo can be found here: [https://sikera4.github.io/dapplets-testing/](https://sikera4.github.io/dapplets-testing/)
### Built With
* [Typescript](https://www.typescriptlang.org)
* [React](https://reactjs.org/)

## Getting Started
To run the project you should go through the following steps
### Installation
* Clone the repository:
   ```sh
   git clone https://github.com/sikera4/dapplets-testing
   ```
* Open the project folder and install the required dependencies via the following command:
   ```sh
   npm install
   ```
### Usage
* To run the project in development mode use:
   ```sh
   npm start
   ```
* To run the project in production mode use:
   ```sh
   npm run build
   ```
## Contact
Sikera Andrey - sikera0812@mail.ru
Telegram: @sikera
Project Link: [https://github.com/sikera4/dapplets-testing](https://github.com/sikera4/dapplets-testing)
