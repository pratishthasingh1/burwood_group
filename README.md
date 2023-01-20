# Burwood Group
An application that takes in an input and gives an output based on work done on that input. Application has a frontend that calls a backend API to display the output.
------------------------------------------------------------------------------------------------------------

# Discussion
Thank you for taking the time to review my application and to look over my application. Please see below for my answers to the discussion questions: 

## What was your reasoning behind the tech stack used for this challenge?
- I used Flask for backend because it's known for its rapid development time and its popular library that has a lot of dev support in an active ecosystem.
##I used React for frontend because it's also known for its rapid, active ecosystems, it's one of the most popular JavaScript frameworks, and it generally doesn’t need a lot of codework to use it.

## What piece of this challenge did you find the most challenging and why?
- CORS: getting CORS to work was 1000% the most challenging part of this. Going into this project, there was already a bit of a learning curve as the last 2 years I've spent mostly doing backend work. I have not done a project like this where I can incorporate frontend with backend. I got the CORS error, and I had to really power through to figure out the solution for it.

## How would you deploy this application for external users to use?
- A pretty straight forward way to deploy would be using AWS. AWS offers a variety of services to help with frontend and backend deployment. For instance, we could host the frontend on Amazon's service, Cloud Front, while using DynamoDB database to store the leaderboard on the backend. We could deploy the code on the lambda, and adjust the features as they become necessary.

## After deploying your code, it seems to have gone viral as the most awesome app ever created in the history of time itself. How would you handle scaling and support your FizzBuzz app?
- Caching and load balancing
    - Leaderboard would have cache so everyone can see what's happening.
    - Indexing could really help here so we don't have to sort every minute, every second.