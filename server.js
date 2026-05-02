import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Nigerian Joke API is running 🤪");
});

const jokes = [
  "NEPA took light during my online exam... I submitted faith.",
  "Nigerian parents: 'I'm not shouting' - but neighbors heard everything.",
  "You said you're depressed… Nigerian parents say go and wash plates.",
  "In Nigeria, if your mum calls your full name… start praying.",
  "I went to borrow salt… they gave me life advice instead.",
  "I told my mum I'm stressed, she said 'drink water' like I'm a generator.",
  "In Nigeria, 'I'm coming' means wait 2 hours.",
  "In Nigeria, rain will fall exactly when you wash clothes.",
  "Nigerian parents will wake you up just to ask if you're sleeping.",
  "You say you're full… but there's space for small chops.",
  "You want to rest… Nigerian electricity says 'not today'.",
  "You check your account balance… now you're humble again.",
   "You say 'last episode'… next thing it's 3am.",
   "You open your book… sleep opens you.",
  "You say you'll save money… shawarma says hello.",
  "You go to gym for 2 days… now you're checking mirror every hour.",
  "You dress well… nobody important sees you that day.",
];

// endpoint
let lastIndex = -1;

app.get("/joke", (req, res) => {
  let random;
  do {
    random = Math.floor(Math.random() * jokes.length);
  } while (random === lastIndex);

  lastIndex = random;

  res.json({ joke: jokes[random] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});