# Week 03 - Counting - Part 2

## Motivation

The following problem cannot be solved easily with the method
that we have learned in "Counting" (part 1).

How many bit strings of length $n$ do not contain two consecutive zeros?

**Solution**   
Let $a_n$ be the number of such strings of length $n$. It can be shown
that the sequence $\{a_n\}$ satistfies the recurrence relation
$a_{n+1} = a_n + a_{n-1}$ and the initial conditions $a_1 = 2$
and $a_2 = 3$.


## Applications of Recurrence Relations

- Review the definition of recurrence relation

- Modeling with recurrence relations: 
  - Example 1: Rabbits and the Fibonacci Numbers
  - Example 2: The Tower of Hanoi Puzzle
  - Example 3: Find the number of bit string in which the length is five
    without any consecutive local.

## Solving Linear Recurrence Relations

## Divide-and-Conquer Algorithmns and Recurrence Relations

- Binary search
- Finding the maximum and minimum of a sequence
- Merge sort
- Fast multiplication of integers
- Fast matrix multiplication
- The closest-pair problem
