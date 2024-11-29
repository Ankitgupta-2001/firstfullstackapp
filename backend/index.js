require("dotenv").config()
import express from "express";
const app=express()

app.get("/",(req,res)=>{
    res.send("this is my  home pagr");
})

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id: 1,
            joke: "Why don't skeletons fight each other?",
            content: "Because they don't have the guts!"
        },
        {
            id: 2,
            joke: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 3,
            joke: "Why don’t oysters donate to charity?",
            content: "Because they are shellfish!"
        },
        {
            id: 4,
            joke: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        },
        {
            id: 5,
            joke: "Why can't you hear a pterodactyl in the bathroom?",
            content: "Because it has a silent P!"
        },
        {
            id: 6,
            joke: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 7,
            joke: "Why was the math book sad?",
            content: "Because it had too many problems."
        },
        {
            id: 8,
            joke: "Why don’t scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 9,
            joke: "Why did the golfer bring two pairs of pants?",
            content: "In case he got a hole in one!"
        },
        {
            id: 10,
            joke: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        }
    ];
    
    res.send(jokes)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})