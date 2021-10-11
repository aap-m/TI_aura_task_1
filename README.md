 # ТЗ.<br>
**1.** Создать таблицу контактов, используя стандартный объект CONTACTS со следующими столбцами: FIRST NAME, LAST NAME, EMAIL, ACCOUNT, MOBILE PHONE, CREATED DATE;<br>
***1.1.*** Заголовки таблицы должны находиться в parent component, а данные таблицы в child component;<br>
***1.2.*** CREATED DATE в формате 6/23/2017, 08:05 PM;<br>
**2.** Сверху от таблицы создать форму поиска SEARCH BY NAME с полем ввода и кнопкой FILTER;<br>
***2.1.*** необходимо реализовать фильтр контактов по имени контакта;<br>
**3.** При нажатии на имя аккаунта в таблице, данные аккаунта должны редиректиться на детайл педж данного аккаунта;<br>

**1** Создал контроллер компонента:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/1.png)<br>
Создал компонент contactDatatable со столбцами:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/2.png)<br>
***1.1.*** Создал компонент contactDataForTable с данными для таблицы:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/3.png)<br>
***1.2.*** Указал в атрибутах формат отображения даты:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/4.png)<br>
**2.** Сверху от таблицы в contactDatatable создал инпут строку с именем SEARCH BY NAME с полем ввода и кнопкой FILTER:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/5.png)<br>
***2.1.*** Реализовал фильтор контактов по имени контакта в contactDataForTable:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/6.png)<br>
**3.** Реализовал ссылки в имени сонтакта и аккаунта:<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/7.png)<br>

Работа между компонентами:<br>
1. Отправка атрибута строки инпут parent to child<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/8.png)<br>

2. Запуск метода по кнопке фильтр в parent <br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/9.png)<br>

3. Передача данных child to parent<br>
![html](https://github.com/aap-m/TI_aura_task_1/blob/main/img/10.png)<br>
