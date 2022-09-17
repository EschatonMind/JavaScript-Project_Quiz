const CorrectAnswers = ["B", "B", "B", "B"];
const Form = document.querySelector(".quiz-form");
const Result = document.querySelector(".result");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [Form.q1.value, Form.q2.value, Form.q3.value, Form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === CorrectAnswers[index]) {
      score += 10;
    }else{
        console.log("Dame");
    }
  });

  // show the result
  scrollTo(0, 0);
  Result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    Result.querySelector("span").textContent = `${output}`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
