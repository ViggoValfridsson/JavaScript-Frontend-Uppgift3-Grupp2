/*  Hide and show content
    -----------------------
    1.
    2.
    3.
*/

let btn = document.querySelector('btn-sesame');
let text = document.querySelector('.hidden-content');

console.log(btn)

function ShowText()
{
    if (text.classList.contains('btn'))
    {
        text.classList.remove('btn');
    }
    else
    {
        text.classList.add('btn');
    }
}

btn.addEventListener('click', ShowText);
