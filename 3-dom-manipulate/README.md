# 3) JSFE DOM | change dom-content dynamically

path: <https://github.com/Lars-S-Berg/js-fe-exercises/tree/main/3-dom-manipulate>

The objective of the exercise is to further investigate how JS contol structures can be used to dynamically change the content of a page. And taking care of user events.

## Purpose/course objectives:

1. "Change web page content dynamically".
2. "Be able to explain how to dynamically change the content of a page".
3. "Be able to account for how events are handled by the user".

Key concepts

## Exercise description - a blog-starter and a timer

The objective of the exercise is again to use DOM to reach and manipulate content, and to investigate how JS contol structures can be used to dynamically change the content of a page. But it also includes a more traditionally small programming part. The task involves creating two things

1. dynamically inserted and deleted blog post, depending on users choice
2. a timer

Your job is to let the user have the ability to read blog posts, and delete them after reading is done, see the video for an example. It is appropriate to use the onload event <https://www.w3schools.com/jsref/event_onload.asp> and inside the function onPageLoad call
other necessary functions. And why not the attribute contenteditable="true" on the entries <https://www.w3schools.com/Tags/att_global_contenteditable.asp>? Optional: try to make the blogposts stay, even if the pages is refreshed (localStorage)

The timer is a little bigger task, and will have around 60-90 rows (depending on how you solve it) of code depending on the solution. The probably easist way would be to only use functions and selections; if/else or switch/case if thats prefered. You also will need something that starts the timer, and to do that you can use the [setInterval() funtion](https://www.w3schools.com/jsref/met_win_setinterval.asp) together with [clearInterval()](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval). In my solution icons from <https://fontawesome.com/> will be used (a Bootstrap look-alike for icons).

... and no, you can´t actually start/stop html-content, so we have to switch the html-numbers of the clock with the use of JS-variables and innerHTML.

## Additional general instructions

1. This is a group effort, and as such uses github (and Live Share where appropriate) to collaborate with teammemebers.

2. The repo should include, in addition to all other files
    - a README.md, where the website/project is described
    - a github projekt, where every team-memeber can contribute and follow the progress

3. The group themselves decide what the website is aimed at, but it is recommended to focus on the business world or associations active in the business world. Examples can be various (fictitious) businesses, a trade association, or informative pages about a business concern.

4. Feel free to use earlier created pages from previous exercises as a starting point. Reference to responsive templates such as w3.css, or frameworks are recommended.

> This task is an exercise. The exercise is created with the starting point that it should be a significant and explanatory step for the student to pass the examination course submission. However strongly recommended the exercise is, it is optional. This means that it does not need to be submitted in Omniway, nor is it corrected or commented on by teachers.
