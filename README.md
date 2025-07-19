
<body>
  <h1>CRA + MUI + React Router + Redux Toolkit + Axios</h1>

  <h2>О проекте</h2>
  <p>
    Это шаблон React-приложения, созданный с помощью <code>Create React App (CRA)</code> с интеграцией популярных библиотек:
  </p>
  <ul>
    <li><strong>Material UI (MUI)</strong> — современная библиотека компонентов для React с реализацией Material Design.</li>
    <li><strong>React Router</strong> — для маршрутизации и навигации по страницам.</li>
    <li><strong>Redux Toolkit (RTK)</strong> — упрощённый и мощный инструмент для управления состоянием приложения.</li>
    <li><strong>Axios</strong> — удобная библиотека для HTTP-запросов к API.</li>
  </ul>
  <p>
    Этот шаблон предназначен для быстрого старта новых проектов на React с готовой базовой структурой и настройками.
  </p>

  <hr />

  <h2>Что внутри</h2>
  <ul>
    <li><code>/public</code> — публичные статические файлы (index.html, favicon и т.д.).</li>
    <li><code>/src</code> — исходный код приложения:
      <ul>
        <li><code>/app/store.js</code> — конфигурация Redux store.</li>
        <li><code>/redux/</code> — слайсы Redux Toolkit (например, exampleSlice.js).</li>
        <li><code>/Pages/</code> — компоненты страниц для маршрутизации.</li>
        <li><code>/Components/</code> — переиспользуемые компоненты UI.</li>
          <li><code>routes.js/</code> — роуты для маршрутизации.</li>
        <li><code>App.js</code> — главный компонент с настройкой роутов.</li>
        <li><code>theme.js</code> — главный конфиг с настройкой кастомных стилей и контейнера.</li>
        <li><code>index.js</code> — точка входа, подключение Redux Provider и React Router.</li>
      </ul>
    </li>
  </ul>

  <hr />

  <h2>Как запустить</h2>
  <ol>
    <li>Клонируйте репозиторий:
      <pre>git clone https://github.com/AlexProkopev/cra-router-mui.git</pre>
    </li>
    <li>Перейдите в папку проекта:
      <pre>cd cra-router-mui</pre>
    </li>
    <li>Установите зависимости:
      <pre>npm install</pre>
    </li>
    <li>Запустите локальный сервер разработки:
      <pre>npm start</pre>
    </li>
  </ol>
  <p>Приложение откроется в браузере по адресу <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a></p>

  <hr />

  <h2>Как использовать</h2>
  <ul>
    <li>Добавляйте страницы в папку <code>/src/pages</code> и подключайте их в <code>App.js</code> через React Router.</li>
    <li>Создавайте Redux-слайсы в <code>/src/features</code> для управления состоянием.</li>
    <li>Используйте MUI компоненты и стили для UI.</li>
    <li>Делайте HTTP-запросы через Axios (например, в <code>useEffect</code> или Redux-thunk).</li>
  </ul>

  <hr />

  <h2>Как собрать на продакшен</h2>
  <pre>npm run build</pre>
  <p>После сборки папка <code>/build</code> будет содержать готовые файлы для деплоя.</p>

  <hr />

  <footer>
    <p>Лицензия MIT © <a href="https://github.com/AlexProkopev" target="_blank" rel="noopener">AlexProkopev</a></p>
    <p>Если нужны доработки или помощь — открывайте <a href="https://github.com/AlexProkopev/cra-router-mui/issues" target="_blank" rel="noopener">Issues</a> в репозитории.</p>
  </footer>
</body>
</html>
