# JavaScript Exercises
Created by [Luc Merceron](https://github.com/lucmerceron/)

## Information
### Setup

* You should have **NodeJS** > 6 installed on your machine
* Create a file named **index.js** in a folder named **NAME_LASTNAME_CLASS** then run `npm init` (ENTER to all default)
* Add a **"start"** script in your _package.json_ that just run `node index.js`
* You will run your application by simply typing `npm start`

### At the end
* Compress your folder and send it to **luc.merceron.dev@gmail.com** with the object: **JS_Exercices_NAME_LASTNAME_CLASS**

## Let's play a game
We will create a small game to explore concepts shown in the JavaScript Class.

### Lexical Scope

1. Create and fill 4 variables: `name` (string), `attack` (number, [10-30]), `defense` (number, [1-10]), `hp` (number, 100).
2. Create a function named `displayMyPlayerInfo` that logs your player info to the screen like: "My name is W, I have X attack, Y defense and Z health points." from its lexical scope.

### Scope Closure

3. Create a new function named `playerGenerator` that takes as parameters the variables created above - except for the number of hp that should remain the same across players - move `displayMyPlayerInfo` in its scope. `playerGenerator` should return an object containing every variables plus the `displayMyPlayerInfo` function (as an API could do).
4. Generate and store in two variables two players objects (`player1` and `player2`) thanks to the generator.
5. Call `displayMyPlayerInfo` from these two newly created variables to display the information of both players.
6. Create a new function named `getMyPlayerRatio` that takes a player and a number and returns the attack this player minus this number.

### Module Management

7. Now separate your program into three files, one named `playerGenerator.js`, one named `playerUtils.js` and keep the main file named `index.js`. Put the generator logic into the _playerGenerator_, put `getMyPlayerRatio` into the _playerUtils_ and keep the rest in `index.js`. Import, instantiate & call everything in _index.js_ with NodeJS require / export
8. We should have a way to make our players fight; create a new function named `fight` in `playerUtils.js` that takes as parameters two players and logs the winner's name (ex: `fight(player1, player2) // "John"`) while decreasing players' hp with those rules:

- Store in two variables the result of `getMyPlayerRatio` for each player with the defense of the opponent
- The winner is the one with the biggest subtract (tweak the variables if they are equal)
- Decrease the looser HP to 0 and the winner HP to: ( enemy subtract \* ( winner HP / winner subtract ) )
- Log the winner's name

9. Replace the logging of the winner's name by simply calling its `displayMyPlayerInfo` function. Notice that the HP have not been decreased. This is because `displayMyPlayerInfo` is using the hp variable from the lexical scope and not the generator's returned object.

### This Binding

10  Change the `playerGenerator` function to return the fight function in addition to the rest.
11. Modify the `fight` function, so we can call it this way: `player1.fight(player2)`.
12. Notice that `displayMyPlayerInfo` still doesn't log the winner's remaining HP, change the function to make it work with Default Binding.

### Object Prototypes & Delegation

13. Leverage the power of **Prototypes**, create a new file named `Player.js` exporting a `Player` function that takes the same parameters as `playerGenerator` but sets its values with its arguments like a constructor would do.
14. Add to its prototype functions `fight` and `displayMyPlayerInfo`.
15. Change the `player1` and `player2` instantiation in `index.js` to initiate with two instances of `Player`.
16. Create a new constructor function named `PayToWinPlayer` that has its **[[Prototype]]** linked to **Player.prototype** and can be called like `Player` do.
17. A `PayToWinPlayer` should increase its attack (by x 1.4) for fight (because he paid to).
18. Try your newly all-powerful type of player with some fights but be sure to change your `PayToWinPlayer` constructor so it reflects correctly what he really is.

### ES6 classes
19. Comment your *Prototypes* system (so I can see it) and create the same system with ES6 Classes

### Asynchronous
Because fighting often has a "luck factor", we want to reflect that in our application.

#### Setup
To do so, run `npm install --save https://www.npmjs.com/package/request` if you want to work with Callbacks, or `npm install --save https://github.com/request/request-promise` if you think Promises are more appropriate to the situation. Then require the package where you want to use it.

20. We want to use [random.org](https://www.random.org/) API to retrieve asynchronously 10 numbers between 1 and 100 for the first one and between 1 and "the last retrieved number multiplied by 1.2" (ex: first retrieve[1-100] => 50, second retrieve[1-60] => ...) for each player every time a fight is started. Those numbers should be stored in an Array and treated as such **once retrieved** (and in this order):
- Filter numbers inferior to 10
- Multiply by 2 numbers when its ones ("unité" in french) is equal to its index
- Sum each values divided by 100
22. Then multiply `getMyPlayerRatio`'s call with the result in the `fight` function
23. Wrap the function retrieving random numbers with a Higher Order Function that transforms the async results (as described in 20.) so we can just sum them.  