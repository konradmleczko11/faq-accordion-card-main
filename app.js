const btn = document.querySelector(".btn");
const answers = document.querySelectorAll(".answer");
const img = document.querySelector(".icon");
const questions = document.querySelectorAll(".question");
const question = document.querySelector(".question");


questions.forEach((question) => question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
        question.classList.toggle("active")
    } else {
        questions.forEach(question => question.classList.remove("active"))
        question.classList.add("active")
    }
}))
