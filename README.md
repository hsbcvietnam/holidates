# Assignment: Javascript on the web - Fetch APIs

## Introduction

This is an assignment for CoderSchool Fullstack Web Development Bootcamp, code name Virgil

Outcome :

- Able to use JS to access and manipulate dom to create/edit/render elements to the UI
- Able to read the API documentation and configure appropriate HTTP requests.
- Able to understand and consume HTTP response's data into the project

## Tutorial

- Holiday API Documentation
- Exercise walkthrough: "Rendering a list of countries code"

## Story

As the covid situation is subsiding, more and more countries are open their border for travelers. There is no better time to travel away from work and even home during your holidays.
There is! When it is also holidaying time in your getaway destination.

John Doe is an office worker who loves to travel. For this year (2020) he is planning to visit England to visit his family and friends. He wants to know what are holidays will occur during his visit so that he could also enjoy those special occasions.
So John went on `all holidays` - our website - to find out about what holidays will be happening in England during his journey.

As a new front-end developer, you are given a back-end API![Holiday](https://holidayapi.com/) and required to build a front-end web application. To help users like John to :

- See all holidays in any chosen country. _Hint: you need to help user to choose the correct country code first because users like John will have no idea what is the code for ENGLAND_
- See all country's code to use for searching holidays.
- Can enhance the search by choosing the exact day, month, year.
- Can translate the name of the country's holiday to their preferred languages. _Hint: you need to help the user to choose the correct languages code in prior_
- See all languages code to use for translation.
- Can use holiday name, country, and year to find the exact day that holiday occurred.

! Please read the API documentation carefully before implementing any features. Pay attention to **REQUIRED PARAMETER/QUERIES** in your API documentation.

## Requirement

1. Make the function for the `Render Languages List` button so that :

   - When click, showing a full list of languages code list that is available
   - The list items are properly placed inside the `Languages List` container.

2. Make the function for the `Render Holiday` button so that when clicking:

   - If all **input boxes** are empty, render a list of holidays of `VietNam` _hint: country code needed_ for the year `2020`
   - If ONLY **Country box** is input with correct _country code_, render a list of holidays of that country for the year `2020`
   - The title `Holiday of a Country` must be changed to the actual country requested. eg Holiday of Viet Nam; USA; China ...
   - The list items are properly placed inside the `Holiday of a Country` container.

3. Improve your `Render Holiday` function so that :

   - When adding `Day, Year, Month` then clicking the button, the user sees a list of holidays of the chosen country (default is Viet Nam) for that exact day.
   - When other inputs (Country, Languages) are present, the result is combined with all the queries.

4. Improve your `Render Holiday` function so that :

   - When adding `Holiday name`, the user sees a list of matching holidays of all countries (**Carefully read the API documentation for request's required parameters** )

### Hint

- For clarity, for request all holidays of a country we must specify A country. Thus requesting such endpoint REQUIRED a country code.
- However, when requesting a list of 1 specific holiday across all countries, we should remove the country query out.
