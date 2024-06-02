# Entry 6
##### 06/23/2024
## Context:
* I decided to use Kaboom.js to make a platformer game
* It lets me make something of my interest.

## Product:
* I will use Kaboom.js because it seemed to let me make something that I was interested in. I am going to make a platformer game that is a bean that jumps up like Mario and collects coins. I could also add sprites that look like spikes and make it so that when the bean sprite lands on the spike sprite, it would destroy the bean and makes you restart to the beginning.

## Resources:
* https://kaboomjs.com/

## Learning along the way:
* From the last blog till now, I figured out why my code was wrong and I finally finished it.
* I used

```js
http-server
```

to find my code and it worked finally, but I had a problem while trying to bring my code into my website.

## Challenge #1:

* I was changed my github pages to the public and it worked, but there was a problem. It said that my images weren't there, so I asked Mr.Mueller for help. He told me to check Slack, so I checked slack and realized what I had wrong. My code used to be this

```js
loadSprite("bean", "/image/bean.png")
loadSprite("coin", "/image/coin.png")
loadSprite("spike", "/image/spike.png")
loadSprite("grass", "/image/grass.png")
loadSprite("portal", "/image/portal.png")
```

The people on Slack told them to delete the slash in front of the image, so I did. My code now looked like this

```js
loadSprite("bean", "image/bean.png")
loadSprite("coin", "image/coin.png")
loadSprite("spike", "image/spike.png")
loadSprite("grass", "image/grass.png")
loadSprite("portal", "image/portal.png")
```

But my code wasn't working still and I had no idea why. I asked Mr.Mueller for help again and he found it. In the beginning of my code, I found out that I had a piece of code that hadn't been removed, so I removed it and it worked.

## Challenge #2:

* Another problem I was trying to fix was my stages. I thought my code had everything in there that was needed, but that wasn't the case. I needed a comma after every line of code, which I fixed.

```js
[
		"             $$$$$"
		"        ^    $$$$>"
		"@       ^    $$$ ="
		"	     ^        ="
	    "==  ==  == == = =="
	],
```

As you can see, the @ means the starting, = means the grass, ^ means spikes, $ means the coins, and > is the portal. I had everything there,  but my code wouldn't work so I looked at the code from the other levels and found my answer, to which I fixed.

```js
[
		"             $$$$$",
		"        ^    $$$$>",
		"@       ^    $$$ =",
		"	     ^        =",
	    "==  ==  == == = ==",
	],
```

## Challenge #3:

* The last problem I had was putting the code to play my game. When it began, it worked perfectly fine until I switched to a white screen when I hit a coin or the portal. I went to tutoring and had help from a lot of people, but I still couldn't find the problem. I finally found the problem when I commented out some of the code.

```js
player.onCollide("portal", () => {
		// play("portal")
		if (levelIdx < LEVELS.length - 1) {
			// If there's a next level, go() to the same scene but load the next level
			go("game", {
				levelIdx: levelIdx + 1,
				score: score,
```

I commented out the
```js
play("portal")
```
just to test it out and it worked, so I did the same for the coin and it finally worked.
## Engineering Design Process:
1) The problem was that I needed to find a way for kids young and old to have fun.
2) I researched this problem by researching about the topic and making sure it's fun.

## Skills:
* I used certain skills to help me with my Freedom Project. I used researching to research about the topic and how to code everything. I had a bit of trouble making sure the code worked, but I think I got the hang of it after a while. I also used the skill of organizing by organizing my resources and notes.

## Takeaways
* Some of my takeaways for the expo and the presentation is to not procrastinate, don't stutter, and be prepared. I had all these problems. Throughout the Freedom Project days, I procrastinated my work and didn't try hard enough, but only did it during the last few weeks. I stuttered a lot during the presentation and expo, so I couldn't say what I wanted to. And finally, be prepared. I was not prepared for the judges and didn't have time to say what I wanted to say in the beginning. When I presented to the class, I was unprepared. I didn't say a lot of things including my takeaways and why you shouldn't do what I did.

## Goals:
* make new levels and complete coding
[Previous](entry05.md) | [Next](entry07.md)
[Slides](https://docs.google.com/presentation/d/1G3ZjP4-jbG2ulBKD0-Ql9yIFd0axMveVQnPDoENi8Eo/edit#slide=id.g2ddde1c7396_0_12)
[Notes](https://docs.google.com/document/d/1IPp2tqAuj6heApVTQ6EOYjrvoBJGnad2UYQERMDC2sw/edit)
[Home](../README.md)