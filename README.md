# algorithm-playground

- [algorithm-playground](#algorithm-playground)
  - [Game of life](#Game-of-life)
  - [Prime numbers](#Prime-numbers)
  - [Shore's algorithm](#Shores-algorithm)
  - [Sort](#Sort)
  - [Simple data structures](#Simple-data-structures)
    - [Stack](#Stack)
    - [Queue](#Queue)
    - [Linked list](#Linked-list)
  - [Helpers](#Helpers)
  - [Suggestions](#Suggestions)
  - [Improvements](#Improvements)

Just some algorithms implemented in JS. Mastering a language requires time and effort. If you don't practice it - you become falsely confident in your skills.

In this repository I am revisiting classic CS problems and algorithms just for fun :)

**100% optimization is not the goal of the code in this repo - it is a playground for me when I get bored. Don't take the code here too seriously.**

## Game of life

[Conway's game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) implmented in JS.

In short the rules are:

- alive and 2 siblings or less => death of loneliness
- alive and 3 siblings or more => death of over population
- alive and exactly 3 siblings => new born
- everything else => retain current state

## Prime numbers

Few implementations could be found here:

- [Wilson's theorem](https://en.wikipedia.org/wiki/Wilson%27s_theorem)
- [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Shore's algorithm

Bruteforce implementation of [Shore's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm). I obvously don't understand quantum computers ... nor I have one.

It was amusing to implement this in bruteforce approach. The math behind it is very elegant.

## Sort

Classical sorting methods

- Bubble sort
  - imperative, classic implementation
  - slightly optimized version
  - recursive version
- Quick sort
  - [Lomuto partition scheme](https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme)
  - [Hoare partition scheme](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme)

## Simple data structures

### Stack

Implemented with the new private field syntax available from Nodejs 12.x.

Using arrays internally. Quite simple and easy to do with JS.

### Queue

Implemented with the new private field syntax available from Nodejs 12.x.

Using arrays internally. Quite simple and easy to do with JS.

### Linked list

Moved away from the new private field syntax of JS because of issues with the editors: formatting and code completion (at time of writing).

...in progress...

## Helpers

Nothing special here, just some code reuse:

- Array.prototype.swap
- Factorial
- Greatest Common Divisor

## Suggestions

I am taking suggestions, feel free to open an issue.

## Improvements

Feel free to fork, play around, send PRs with improvements.
