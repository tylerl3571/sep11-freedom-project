# Tool Learning Log

Tool: **Kaboom**

Project: ** Mr.Mueller fighting grades and collecting rubber ducks.**

---

10/26/2023:
* I tried using Kaboom.js in jsbin.com. It was easy, but somewhat hard to setup in jsbin. I learned that
```js
loadBean()
```

loads the sprite or the character that I want to put into the game. But, the actual code to add the character to the screen would be the code of:

```js
const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),         // responds to physics and gravity
```

this allows my character to pop in and I could start making other sprites. One question I had was, would I be able to make my own custom sprite? The answer was no. I couldn't find any sort of coding that I could code to make a custom sprite. The next time, I'm going to try using the code to move the sprite.

10/29/2023:
* I made the sprite move by using the code:

```js
 player.move(player.dir.scale(player.speed))
})
```

This allows me to move my sprite and lets me change the player speed. Another way I could move my sprite is using:
```js
player.moveTo(300, 200)
```
or

```js
player.jump()
```

This allows my sprite to jump a certain number. I also learned that I can make my character be destroyed when it comes in contact with a certain sprite:

```js
player.onCollide("tree", () => {
    destroy(player)
})
```
This destroys my sprite when it comes in contact with the "tree". One question I had was if I could make my sprite have an objective and have it move to other sprites.


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
