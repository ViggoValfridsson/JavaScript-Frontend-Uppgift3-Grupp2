# 1) JSFE lang | a small role playing game

path: <https://github.com/Lars-S-Berg/js-fe-exercises/tree/main/1-lang-roleplay>

## Purpose/course objectives

1. "Be able to explain JavaScript and its syntax, how to debug and handle errors in the code".

The objective of the exercise is to investigate how variables, JS contol structures and objects can be used to dynamically change the content of a page. In addition, you will also get the chance to use some of Window Consoles functions, often used to debug and handle errors in the code.

### Key concepts

- variables
- functions
- if-statement
- creating objects
- predefined objects
- Window objects like
  - console.log()
  - .count()
  - .error()
  - .table()
  - .info()

## Exercise description - A mini role playing game (rpg)

You will create a small story, the protagonists of which are two heroes.

These heroes should at least be attacked by one monster. The heroes are then forced to defend themselves, and can get hurt. After the fight, the monster should have a potion that one hero can use to restore some health. The ones that survie should get a little stronger after the fight.

All characters are created from objects, with associated attributes that you choose yourself. Suggested attributes can be health and strength.

Use functions for some specific events, such as displaying the status of the characters, fighting, replenishing health, etc.

This time it is enough to show the history using console.log() in the terminal, but you are of course free to also try to make an html/css interface.

### Suggestion on how to start the the story

const percival = {
  health: 30,
  strenght: 15,
};

console.log(`Percival wants to perform great deeds in the kingdom, and has heard of a dragon terrorizing the area. He is in a great mode with ${percival.health} in health and ${percival.strength} in strenght`);

console.log(`Suddenly a monster with the name ${monster.name} appers, and seems to be in a terribly bad mood. He draws his nail club and goes on the attack!`);

attack(percival);
attack(monster);

console.log(`${monster.name} was so afraid of Percivals sword that he turned to stone. Percival was injured but happy and moved on.`);

A attack-function can look *something* like this:

function attack(target) {
  if (target.health > 0) {
    let hit = getRandomInt(3));
    if(hit == 0){
      target.health -= 2;
    }
    else if(hit == 1){
      target.health -= 7;
    }
    else {
      target.health -= 13;
    }
  }
  else if (target.health <= 0) {
    console-log(`The great $(target.name) has been brutally slain.`);
  }
  else {
    status(target); // another function to be created
  }
}

PS. To deepen the task: Creating a class (not the same ass CSS-classes) of characters is even better, making it super easy to create new characters. Even monsters are characters, and since the heroes likely encounter many of them on their journey, classes make it convenient to have a single place to create all kinds of characters.

### Math.random()

To get at random number (can be used to make things less predictible)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); // output: 0, 1 or 2
console.log(getRandomInt(1)); // output: 0
console.log(Math.random());   // output: a decimal number from 0 to < 1

## Additional general instructions

1. This is not an individual task, but that doesn´t exlude working with and take help from others.

2. It is highly recommende to use a personal GitHub reThe repository to store the progress

3. Feel free to use earlier created pages from previous exercises as a starting point. Reference to responsive templates such as w3.css, or frameworks are recommended, where so is desired.

> This task is an exercise. The exercise is created with the starting point that it should be a significant and explanatory step for the student to pass the examination course submission. However strongly recommended the exercise is, it is optional. This means that it does not need to be submitted in Omniway, nor is it corrected or commented on by teachers.
