const btn = document.querySelector('.btn-sesame');
const hiddenContent = document.querySelector('.hidden-content');

function ShowText() {
    // finns btn-sesame i samma klass som hidden-content?
    if (hiddenContent.classList.contains('btn-sesame'))
    {
        // om så, tag bort det (dölj texten, och ändra tillbaka knappen)
        hiddenContent.classList.remove('btn-sesame');
        btn.innerText = "Open, Sesame!";
        btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else {
        // om inte, lägg till det (visa texten, och ändra knappen)
        hiddenContent.classList.add('btn-sesame');
        btn.innerText = "Shut, Sesame!";
        btn.style.backgroundColor = "rgb(23, 94, 94)";
    }

}
btn.addEventListener('click', ShowText);