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

## Exercise description - A FAQ and a timer

The objective of the exercise is to use DOM to reach and manipulate content, and to investigate how JS contol structures can be used to dynamically change the content of a page.

We will use an accordian to show and hide content, when a user click on the plus-sign. In addition, you will also make the counter start, pause and stop on user interaction.

The timer is a little bigger task, and will have around 60-90 rows of code depending on the solution. Here the trick is to use functions and slektions. You also will need something that starts the timer, and to do that you can use the [setInterval() funtion](https://www.w3schools.com/jsref/met_win_setinterval.asp) together with [clearInterval()](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval).

... and no, you can´t actually start/stop html-content, so we have to switch the html-numbers of the clock with the use of JS-variables and innerHTML.

## Additional general instructions

1. This is a group effort, and as such uses github (and Live Share where appropriate) to collaborate with teammemebers.

2. The repo should include, in addition to all other files
    - a README.md, where the website/project is described
    - a github projekt, where every team-memeber can contribute and follow the progress

3. The group themselves decide what the website is aimed at, but it is recommended to focus on the business world or associations active in the business world. Examples can be various (fictitious) businesses, a trade association, or informative pages about a business concern.

4. Feel free to use earlier created pages from previous exercises as a starting point. Reference to responsive templates such as w3.css, or frameworks are recommended.

> This task is an exercise. The exercise is created with the starting point that it should be a significant and explanatory step for the student to pass the examination course submission. However strongly recommended the exercise is, it is optional. This means that it does not need to be submitted in Omniway, nor is it corrected or commented on by teachers.
