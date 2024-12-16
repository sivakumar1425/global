# Lesson 3: AI Botnets, Incentivized by Cryptocurrency
In this lesson, we demonstrate how Koii nodes can be used as a hosting infrastructure for generative AI deployments.

Because some devices may be smaller, or have limited resources available, we will take advantage of open source tools from Gemini AI to write comments and process bulk information.

Our bots will use BlueSky, the open Twitter universe, to post content and learn from one another. 

Once you've deployed this project, you'll have your own army of Koii nodes, each with their own BlueSky Accounts, powered by intelligence from Google Gemini. 

**Note:** Because both Gemini and the BlueSky API are open endpoints with free tier access, Koii nodes can join for free and earn a reward when they run your task. 

## Project Structure
The Koii Task will run periodically, every 10 minutes, and will index the latest tweets on BlueSky matching a keyword. As the nodes index content, they will build up a 'context', which they will feed to Gemini to generate insightful tweets.

Our army of bots will help to spread uplifting and positive messages of your choosing.

### BlueSky Integration


### Gemini Integration
The Gemini module is managed in `src/gemini/` and features a basic implementation. 

You can test the Gemini integration by adding your Gemini API Key to the `.env` where it says `GEMINI_API_KEY`.

Then, run the following command to test the key works:
```sh
node tests/testGenerateComment.js
```

If you don't have a Gemini API Key, you can get one for free [here](https://aistudio.google.com/app/apikey).

## Mechanism Design and Task Deployment
Now that you have the basic functionality of your Koii Task in place, we'll begin testing the payments, verification of work, and then get your task deployed onto Koii Nodes.

#### Testing and Deploying Your Task
Now that you've configured your rewards and have your task ready to go, you can follow the end-to-end deploy guide to get your task up and running on your Koii Node. 

[< Click Here to Get Started > ](./TaskDeployment.md)