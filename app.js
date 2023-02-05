const arr = [
  "If you fall asleep now, you will dream. If you study now, you will live your dream.",
  "When you think it’s too late, the truth is, it’s still early.",
  "The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.",
  "Studying is not about time. It’s about effort.",
  "Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?",
  "Success only comes with self-management and determination.",
  "If you don’t walk today, you’ll have to run tomorrow.",
  "The level of education is in direct correlation with your salary.",
  "When today is over, it will never come back.",
  "Even now, your enemies are eagerly flipping through books.",
];

const quote = document.querySelector(".center p");
let flag = false;

const generateQuote = (arr) => {
  try {
    let rand = Math.round(Math.random() * 9);

    if (!arr[rand]) throw new Error("No quote");

    quote.textContent = arr[rand - 1];

    if (!flag) {
      quote.style = 'color: white';
      flag = true;
    } else {
      quote.style = 'color: red';
      flag = false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

setInterval(generateQuote, 3000, arr);
