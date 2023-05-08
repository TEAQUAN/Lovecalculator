let yourNames = prompt("What is your name");
let yourPartnersName = prompt("what is your partners name")
let loveScore = Math.random();
document.querySelector("h2").innerHTML = ""
loveScore = loveScore * 100 + 1;
loveScore = Math.floor(loveScore)
document.querySelector("h1").innerHTML = yourNames + " and " + yourPartnersName + "'s  love score is" + " " + loveScore + "%";

var loversGreater = [
    "Good enough. Might as well check love off your list of things society believes you should've accomplished by now.",
    " You rather spend a lifetime with each other than face all the ages of this world alone.",
    "Yall are 4 lifres",
    "SOULMATES",
    "Yall could be together forever and still feel like you haven’t had enough of eachother.",
    "Good enough. Might as well check love off your list of things society believes you should've accomplished by now."
];
var randomItem = loversGreater[Math.floor(Math.random() * loversGreater.length)];

var betweenGreater = [
    "Your love is comparable to rush hour traffic. Slow and frustrating, but possible to navigate through persistence and sheer force of will.",
    " I’m not telling you it is going to be easy- I am telling you it is going to be worth it.",
    "There's probably something there. Just make sure your presence is known so your feelings don't get hurt",
    "Dr. Love thinks that a relationship between " + "  " + yourNames + " and" + " " + yourPartnersName + " has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other.",
    "The chance of a relationship working out between " + yourNames + " " + "and" + " " + yourPartnersName + " is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it."
];
var randomItems = betweenGreater[Math.floor(Math.random() * betweenGreater.length)];

var belowGreat = [
    "Omo this one is leading to igbo and shayooooo",
    " The bond you share is not enough for a relationship he/she doesnt love you.",
    "Sorry, but your love is as likely to bear fruit as a mango tree planted on an Antarctic glacier.",
    "This relationship wont last is best to stop",
    "Your Partner is cheating"
];
var randomItemss = belowGreat[Math.floor(Math.random() * belowGreat.length)];


if (loveScore > 70) {
    document.querySelector("h2").innerHTML = randomItem;
}
else if (loveScore > 30 && loveScore <= 70) {
    document.querySelector("h2").innerHTML = randomItems;
}
else if (loveScore <= 30) {
    document.querySelector("h2").innerHTML = randomItemss;
}
