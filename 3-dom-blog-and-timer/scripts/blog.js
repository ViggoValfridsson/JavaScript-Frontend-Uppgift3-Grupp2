"use strict";

let blogInput = document.querySelector("#blog");

blogInput.addEventListener("input", () => {
  if (blogInput.value === "" || blogInput.value < 0) {
    blogInput.value = "";
    return;
  }
  addElements(blogInput.value);
});

function BlogPost(number) {
  this.number = number,
  this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis nesciunt deserunt expedita qui ex corporis cupiditate ipsum, nostrum nobis sunt nam fuga officiis asperiores voluptatum temporibus odit repellat quisquam ad dolore. Officiis hic accusamus magni iusto voluptatum doloribus, quam voluptates ratione molestias maxime ut maiores perferendis ipsa sint. Eos?";
}

function addElements(value) {
  let articles = document.querySelectorAll("article");

  for (let i = 0; i < articles.length; i++) {
    articles[i].remove();
  }

  for (let i = 1; i <= value; i++) {
    let post = new BlogPost(i);
    let article = document.createElement("article");
    let flex = document.querySelector(".flex-container");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    h2.textContent = "blog" + post.number;
    p.textContent = post.text;
    article.append(h2);
    article.append(p);
    flex.append(article);
  }
}
