# Bjük
# Project Planning

# Features vs. Benefits

## Look Good
- gaining knowledge and sharing with others looks good 
- looking organized by using the website
- looking like an expert

## Feel Good
- gaining knowledge, which gains confifence
- able to share your knowledge with others
- able to look back on past history 
- adds validation from other's interactions with your posts (likes, comments)

## Save Time
- much easier to use this website as a hub for educational information
- allows users to categorize the sources to easily refer back to
- you would be able to share resources directly with other users
- comments/ratings will help curate a more accurate source of information

## Save Money
- can be used as a self teaching tool, instead of hiring tutors or paying for professional education
- no textbooks involved which cuts costs
- comments help clarify aspects on the topic by providing (potentially professional) input 

# User Stories

**GET -> POST**
**As a user, I want to login, Because I want to update my profile** 
* Given that i'm logged in
* When I update my profile
* Then update the user's details

**GET**
**As a user, I want to sort my search for a topic, Because I want to the flexibility to view the available resources**
* Given that I search for a topic
* When I sort by rating(default)/recently added
* Then show me results based off the sorting chosen

**GET -> POST**
**As a user, I want to login, Because I want to save my learning resources with a title and description**
* Given that i'm logged in
* When I click to save my learning resources with a title and description
* Then saves to my learning resources

**POST**
**As a user, I want to like other users' posts, Because I want to have a way to refer back to them.**
* Given that i'm reading a post
* When I like the post
* Then save it to my profile AND give me a confirmation

**POST -> GET**
**As a user, I want to rate/comment/like other users' posts, Because I want to open dialogue about the post's topic and contribute to the website's community**
* Given that i'm reading a post
* When I rate/comment/like the post
* Then add my interaction with the other interactions on the post

**GET**
**As a user, I want to search for already saved resources, Because I want to learn more about a topic**
* Given that i'm browsing the website
* When I search for a topics
* Then show me the saved resources for that topic

**POST**
**As a user, I want to organize my resources by topic, Because I want to easily find my saved resources**
* Given that I save a url
* When I chose the topic to organize it in
* Then save it under that topic(s) 
**[Use hashtags or commas? Categorize post with poster's assigned topic]**

**POST -> GET**
**As a user, I want to organize my resources by topic, Because I want to share with others interested in similar topics**
* Given that I search my topic in my saved resources
* When I share the saved resource
* Then show my saved resources for that topic

**GET**
**As a user, I want to be able to view my own and my liked resources, Because I want to enhance my learning**
* Given that i'm logged in
* When I go to my profile
* Then show my saved and liked resources

**GET**
**As a visitor, I want to be able to view another user's resources, Because I want to learn from them without going through the trouble of registering**
* Given that i'm not logged in
* When I enter a user's profile
* Then show me all of the saved/liked posts

**GET**
**As a user, I want to share my resources with anyone who visits the website, Because I want to contribute to anyone who needs access to my resources**
* Given that I share my profile
* When somebody clicks the link
* Then display my profile

**POST**
**As a user, I want to save my resource to a collection, Because I want to customize how I group urls about a topic**
* Given that i'm saving the url
* When I chose the collection
* Then save my url to that collection


# A-HA Moment
## Create your own collections/course on a topic

# Tech Choices
- Moment.js
- Rate Yo! (http://rateyo.fundoocode.ninja/)

# Deployment
- Heroku

# Planning Routes

## Route Verbs
- login
- update
- search
- rate
- post
- like
- comment

## RESTful Conventions
- /
- /:username
- /:topic
- /post
- /:resourceId
- /:resourceId/edit
- /:username/:collectionId
- /:username/edit                https://wireframe.cc/BkjPID

[Consider using res1,col2,user3, etc. for clarity]

## Storyboarding

