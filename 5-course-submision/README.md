# JSFE | course submission

path: <https://github.com/Lars-S-Berg/js-fe-exercises/tree/main/5-course-submision>

## Course submission

An examining/grading submission for the course JavaScript Frontend. Program Webbutvecklare inom .NET.

EC Utbildning, Halmstad and Göteborg.

### Purpose/course objectives

"Be able to independently produce interactive web applications with JavaScript in a secure manner and according to good programming practice".

Which includes:

1. Introduction and deepening within JavaScript
2. Troubleshooting and error handling
3. Change web page content dynamically
4. Handle events from the user
5. Download and send data to the server
6. Manage data in the browser
7. Continuous versioning with Git
8. Cleaned code (unified, formatted, restructured)
9. Code free of obvious bugs
10. Tests have been used where appropriate

## Task description - A frontend app

The objective of the submission is, from an optional open api, to create a foundation for a dynamically controlled web page; similar to a web shop.

The application should display "products" in a gallery, taken from at selected api. The "web shop" does not necessarily have to sell anything, but the user **must** be able to add products to a shopping cart or a todo-list, from which the user can see the added items, the number, possibly the price, etc, as well as add and remove content from the shopping cart. Optional: the shopping cart should remain even if the page is refreshed.

The user **must** be able to trigger more web-api calls, to fill the page with more content from the api than what is showed at first visit. The page should not have to be reloaded, nor should you have to navigate to a new page.

At the end, there are som exampel of wireframes to help plan the site/task. Lastly: use fetch(), *not* XMLHttpRequest().

### Examples of API to be used

1. [SMHI](https://opendata.smhi.se/apidocs/)
2. [SR](https://sverigesradio.se/artikel/dokumentation-for-api-version-2) (byggt med xml, 2022-09-24)
3. [Pokémon Api](https://pokeapi.co/)
4. [Punk API](https://punkapi.com/) (BrewDog beers)
5. [Google Earth](https://developers.google.com/earth-engine/#api)

It is *your responsibility* to read and understand the API descriptions. Do not choose a API that feels to complicated.

## Workflow

You work in pairs, just as you do in pair programming. In some rare cases, a group may consist of three people. The group plans and divides the work according to its own judgment.

You have to pay attention so that approximately the same number of individual commits take place. All must have their own commits where you make web-api calls, and use incoming information to display dynamic content to the site's visitors.

Bootstrap is advantageously used for the interface (this is *not* a course where your knowledge of html/css is assessed), and it is allowed to take inspiration from others such as from [CSShint](https://csshint.com/bootstrap-shoping-carts/). Be aware that if you use CSS-frameworks like Bootstrap or others example, it is *most important* that you use it so that you yourself make a relevant impression on the design. Leftover junk code or misuse of a bootstrap example will *not* be accepted.

It is important that both team members have to individually code an element the fulfill the requirement in the task description. One person can for instance make a [Bootstrap Collapse](https://getbootstrap.com/docs/5.2/components/collapse/) or a [Bootstrap Modal](https://getbootstrap.com/docs/5.2/components/modal/) that shows more info about an object when you click read more/read comments, while the other can do a [Pagination](https://getbootstrap.com/docs/5.2/components/pagination/) or let a secondary navigation (not the main navigation, which is usually reserved for the site's architecture) be use to see a certain amount of articles at a time and to scroll back and forth.

### Can we do something else?

Yes, but it´s then up to the group to ensure that the goals of the course are carried out. The most important thing is to use an api, with fetch() and to build a dynamically controlled web page keeping the page up to date.

## Additional general instructions

1. This is a group effort, and as such uses github (and Live Share where appropriate).

2. The teacher must be invited to your repo

3. Your repo must include, in addition to all other files
    - a README.[md], where the website/project is described
    - a written account of who did what, lika a a file called logbook.[md], or a GitHub project where everyone's contributions are clearly shown

4. The group themselves decide what the website is aimed at, but it is recommended to focus on the business world or associations active in the business world. Examples can be various (fictitious) businesses, a trade association, or informative pages about a business concern.

5. Feel free to use earlier created pages from previous exercises as a starting point. Reference to responsive templates such as w3.css, or frameworks are recommended.

6. Each group must also be prepared to present their work to the rest of the class

> The entire task must be handing in at Omniway, by compressing the root folder (zip/rar). Note that all members of the group each must submit their own copy of the project! Also, any written tasks (except logbook and readme) and submission questions that belong to the task are answered in Omniway.

## Wireframes

The following wireframes are only suggestions to get you started on the task. Following them is optional.

### Start

![A wireframe for a web shop](../img/website.jpg)

### A closer look at a card

![A wireframe for a web shop](../img/website-closerlook.jpg)

### Checkout

![A wireframe for a web shop](../img/website-checkout.jpg)
