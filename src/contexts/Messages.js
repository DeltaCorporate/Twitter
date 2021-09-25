import React  from "react";


const messages = [
    {   id:1,
        nom:"Elon Musk",
        message:"Si vous ne pouvez pas battre la machine, le mieux est d’en devenir une. #avenir #elon"
    },
    {   
        id:2,
        nom:"Rhea McLaughlin",
        message:"Probably speaking about what this world will become in the future!"
    },
    {
        id:3,
        nom:"Brahim Sili",
        message:"Donald Trump won't stay in us president position"
    },
    {
        id:4,
        nom:"Fabien diop",
        message:"La France a besoin d'un renouveau pour son économie et sa culture. Il faut vivre à l'air de son temps!"
    },
    {
        id:5,
        nom:"Didier Dupont",
        message:"Je ne quotionne absolument pas toutes les bêtises qu'on dit à la télé. Les anti-vaccins sont stupides de penser que tout le monde n'a pas besoin de vaccin"
    },
    {
        id:6,
        nom:"Damien Durant",
        message:"Le vaccin est encore une fourberie de l'état pour nous faire avaler des puces et nous traquer. IL FAUT AGIR!!!"
    },
    {
        id:7,
        nom:"Amélie Carré",
        message:"Si vous ne pouvez pas battre la machine, le mieux est d’en devenir une. #avenir #elon"
    },
    {  
        id:8,
        nom:"Ilian Fabuleux",
        message:"La france n'est plus ce qu'elle était. Elle se diversifie et qui sait c'est peut être mieux."
    },
    {
        id:9,
        nom:"Jacob Siriane",
        message:"Le temps des discussions, il faudrait peut être commencer à agir"
    },
    {
        id:10,
        nom:"Lilian Faubourg",
        message:"Je trouve que le monde se porte à merveille moi :)"
    }
]
let MessagesContext = React.createContext(messages)
export default MessagesContext;