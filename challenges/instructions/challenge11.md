Code Challenge
Implement a Queue using two Stacks.

Specifications
Read all of the following instructions carefully. Name things exactly as described, or you will get a ZERO without comment
Do all your work in a public repository (matching the example provided by your instructor) called data-structures-and-algorithms, with a well-formatted, detailed top-level README.md
Create a branch in your repository called queue_with_stacks
On your branch, create…
C#: Create a method named QueueWithStacks() outside of Main() in your Program.cs file. Call Your newly created method in Main() once complete.
JavaScript: a folder named queueWithStacks which contains a file called queue-with-stacks.js
Python: a folder named queue_with_stacks which contains a file called queue_with_stacks.py
Java: a folder named QueueWithStacks which contains a file called QueueWithStacks.java
Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
NOTE: You can find an example of this configuration for your course in your class lecture repository.
Feature Tasks
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement the standard queue interface, but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

Example
enqueue(value)
Input	Args	Output
[10]->[15]->[20]	5	[5]->[10]->[15]->[20]
 	5	[5]
dequeue()
Input	Output	Internal State
[5]->[10]->[15]->[20]	20	[5]->[10]->[15])
[5]->[10]->[15]	15	[5]->[10]
Documentation: Your README.md
# Implement a Queue using two Stacks.
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution
<!-- Embedded whiteboard image -->

Submission Instructions
Take a photo of your completed whiteboard, matching the example whiteboard layout
Copy your photo into an /assets directory in your repo
Give the image file the same name as the branch you are working on
Embed the image in your README.md documentation
Create a pull request from your branch to your master branch
In your open pull request, leave as a comment a checklist of the specifications and tasks above, with the actual steps that you completed checked off
Submitting your completed work to Canvas:
Copy the link to your open pull request and paste it into the corresponding Canvas assignment
Leave a description of how long this assignment took you in the comments box
Add any additional comments you like about your process or any difficulties you may have had with the assignment
Merge your branch into master, and delete your branch (don’t worry, the PR link will still work)
© Code Fellows 2019