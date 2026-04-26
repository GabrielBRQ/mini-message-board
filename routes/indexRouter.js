const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const messageAuthor = req.body.author;
  const messageText = req.body.messageText;

  messages.push({ 
    text: messageText, 
    user: messageAuthor, 
    added: new Date() 
  });

  res.redirect("/");
});

module.exports = indexRouter;