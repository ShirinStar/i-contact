# i-contact
link: 

## project description 
In times, where our communication means changed and affected the way we connect with each other. i-contact is a web mobile app that matches users for immediate human eye contact.

## user story
Once the users are logged in they can fire a request to locate a near-by "eye" ( => another user that is searching at the same time for eye contact). The app matches between two users based on their location and suggests a direction for a meet point between them. Once they meet, they are invited to share one minute of human eye contact. Each user can "rate" the encounter as a way to encourage a community-growth app and a feeling of security. Other than "rating" and name the users are not required to provide any other personal information about themselves. The registration process will request an email as well but only for identification needs.

## Technologies to be used
React with ruby on Rails, Google maps API, Snazzymaps, TBD

## ERD
The associations' back-end API is self-referential. There are two tables one for users that has_many reviews (the second table) through reviewers/reviewees.
![has_many](https://i.imgur.com/LRGQmWD.jpg)

## Wireframes
![all_wireframes](https://i.imgur.com/c2TSuQq.jpg)

## M.V.P
- mobile responsive
- multi-user platform.
- matching users together and calculating the distance between them
- timing one-minute encounter- aiming to have a unique screen color to each match- so they can identify themselves (or pushing it to post MVP)
- having a rating system that can scale in post MVP to a more community 'safety' one. 
- looking into adding JS animations in the searching and encounters 

## post M.V.P
- js location animation.
- working on a more community network. 
- more interactions. 

## Code Snippet
