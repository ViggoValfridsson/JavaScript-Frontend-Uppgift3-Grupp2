# 2) JSFE DOM | handling dom-elements and events

path: <https://github.com/Lars-S-Berg/js-fe-exercises/tree/main/2-dom-show-userevents>

## Purpose/course objectives

1. "Change web page content dynamically".
2. "Be able to explain how to dynamically change the content of a page".

Key concepts

- document.getElementsByClassName()
- document.querySelector()
- document.getElementById()
- addEventListener()
- iterations (loops)
- this
- toString()
- innerHTML
- classList.toggle()

## Exercise description - A menu and a FAQ-accordian

The objective of the exercise is to use DOM to reach and manipulate content, and to investigate how JS contol structures can be used to dynamically change the content of a page. The task involves creating two things

1. a dynamically inserted menu
2. an accordian that is supposed to be used for a frequently asked questions

The menu should only be inserted into the page through the link \<script src="scripts/blog.js"\>\<\/script\>. You should use a array where to place the content (text and links), and a loop to input the list-elements. Since we want the menu to show up on the page directly, we can use a recursive (a function that calls it self), like this: (function (){ code here }()); You can place and style the menu any way you like.

I have already styled the accordian, and it is now up to you to show and hide the content, when a user click on the plus-sign to the right. As you can see in the html-code there is a short lorem ipusm hidden, and your task is to make it visible. And then again hide it if the user wants that.

## Additional general instructions

1. This is a group effort, and as such uses github (and Live Share where appropriate) to collaborate with teammemebers.

2. The repo should include, in addition to all other files
    - a README.md, where the website/project is described
    - a github projekt, where every team-memeber can contribute and follow the progress

3. The group themselves decide what the website is aimed at, but it is recommended to focus on the business world or associations active in the business world. Examples can be various (fictitious) businesses, a trade association, or informative pages about a business concern.

4. Feel free to use earlier created pages from previous exercises as a starting point. Reference to responsive templates such as w3.css, or frameworks are recommended.

> This task is an exercise. The exercise is created with the starting point that it should be a significant and explanatory step for the student to pass the examination course submission. However strongly recommended the exercise is, it is optional. This means that it does not need to be submitted in Omniway, nor is it corrected or commented on by teachers.
