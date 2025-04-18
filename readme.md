# Тестовое задание для стажёра Frontend-направления (весенняя волна 2025)
Требования к заданию можно прочитать в [репозитории avito-tech](https://github.com/avito-tech/tech-internship/tree/main/Tech%20Internships/Frontend/Frontend-trainee-assignment-spring-2025)

#### Инструкция по запуску серверной части приложения находится в README файле /server директории.
#### Инструкция по запуску клиентской части приложения находится в README файле /client директории.

## Технологический стек:
### Обязательные технологии:
- Node.js v20
- React v19
- react-router-dom
### Необязательные технологии:
#### TypeScript
TypeScript был выбран для обеспечения строгой типизации, что помогает избежать ошибок на ранних этапах разработки, улучшает автодополнение в IDE и ускоряет разработку.

#### Tanstack Query и Axios
Эти технологии используются для работы с HTTP-запросами:  
- **Tanstack Query** предоставляет удобный API для управления состоянием серверных данных. Она снижает объём бойлерплейт-кода и упрощает реализацию кеширования, повторных запросов и обработки ошибок. Выбор сделан в пользу этой библиотеки вместо RTK Query из-за её лаконичности и гибкости.  
- **Axios** используется как стандартное решение для выполнения HTTP-запросов благодаря простому API и широкому сообществу.

#### hello-pangea/dnd
Библиотека выбрана для реализации drag-and-drop механики в карточке проекта. Она проста в использовании, хорошо документирована и имеет активное сообщество.

#### Styled Components
Для стилизации компонентов выбрана библиотека **Styled Components**, так как она позволяет удобно переопределять стили готовых компонентов из UI-библиотек. Это упрощает адаптацию дизайна без дублирования CSS.

#### Ant Design
Эта UI-библиотека используется для быстрого создания интерфейсов. Она предоставляет большое количество готовых компонентов с проработанным дизайном, что позволяет не тратить лишнее время на написание 

#### Vite
Для сборки проекта выбран **Vite** как современный инструмент, который обеспечивает высокую скорость разработки благодаря быстрому запуску.
