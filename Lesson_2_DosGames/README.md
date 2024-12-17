# Lesson 2: Basic App Deployment
In this lesson you'll learn how to deploy a low-fi DOS game as a task on Koii!

If you are following along offline, check out the slides [here](https://docs.google.com/presentation/d/17ZjR-Vc84dzqCWJ6fOYhlapWaa20TfALARtMiDURKH4/edit?usp=sharing).

If you are participating online, you can always ask for tokens for development by joining the [Koii Discord channel](https://discord.gg/koii-network).


### Part I: Requirements
Before you can run the sample code, you'll need to install dependancies.

```sh
yarn #installs system dependancies 
```
If this step fails, be sure to check the installation instructions in the master readme at the root of this repo.


### Part II: Setup Your Task
Koii tasks require a basic setup to get running. In this lesson we're going to teach you how to run our Production Debugger to test a task.

Before we can run the debugger, we need to do some basic setup beforehand.

1. Rename your .env.developer.example file to .env
- You can do this by right-clicking the file and selecting "Rename"

2. Copy the Task ID in your .env file and add it to your Desktop Node
- Copy the Task ID
- Open the Desktop Node
- In the top-right corner, click "Add Task"
- In the bottom-left corner of the Add Task screen, click on "Advanced"
- Paste the Task ID into the "Task ID" field, then click the Play ▶️ button on the right-hand side
 - Before you can click play the node needs to fetch the tasks meta-data. Its normal for this process to take a moment. Once the meta-data has been fetched the Play ▶️ will be clickable. It may take a moment for the task to start.
 - Make sure to click the Pause ⏸️ button to stop running the task. We'll start it again soon.
 - *Note: The task will warn you about running unverified tasks. In general you should be careful running unknown tasks though the one provided in our template is safe to run. If the task seemingly fails, restart the node and check to see if that fixes things.*


### Part III: Start the Production Debugger

Now time for some fun! Let's launch a game. For the lesson the sample comes pre-installed with Street Fighter 2. Later on in this lesson we'll learn how to swap out the game with another.

1. Run `yarn prod-debug` in your terminal.

Prod-Debug is our Production Debugger. This let's you simulate running a task without having to deploy it live. This is very useful for testing your task without needing to pay the (gas) fees to deploy it.

2. In the Desktop Node, press Play ▶️ on the "EZ Sandbox Task"
- *Note: Sometimes this task will display as the "EZ Testing Task". Don't worry, its the same task.

3. This should automatically launch a browser window. Press the Play ▶️ button to start Street Fighter 2.

4. Play the game and have some fun! The controls are as follows:
- Player 1:
 - Move Left: Left Arrow-key
 - Move Right: Right Arrow-key
 - Jump: Up Arrow-key
 - Crouch: Down Arrow-key
 - Punch: Enter
 - Kick: Spacebar
- Player 2:
 - Move Left: Z
 - Move Right: X
 - Jump: Q
 - Crouch: S
 - Punch: 1
 - Kick: 2


### Part IV: How to Swap the Game
Before you begin with this part of the lesson, pause the EZ Testing Task in the Desktop Node and, in your VSCode Terminal, press Ctrl+C to stop the production debugger.

1. Find and download a DOS game of your choice. We suggest [CDRomance](https://cdromance.org/msdos/) for safe license-free downloads.
 -*Note: There are plenty of other sites where you can find your favorite DOS games - just be careful as many of these sites have viruses!*

2. Download [7Zip](https://www.7-zip.org/download.html)

3. In VSCode navigate to the Src/Task/Game folder

4. Right-click on "bundle.jsdos" and click "Reveal in File Explorer"

5. In your file explorer, use the 7z File Manager (installed with 7Zip) to open "bundle.jsdos" and the .zip archive you downloaded from CDRomance. 

6. Copy all the files from the CDRomance DOS archive and paste them into "bundle.jsdos".

7. Save and close "bundle.jsdos". You may also close the CDRomance archive.

8. Relaunch the production debugger (with `yarn prod-debug`) and relaunch the EZ Sandbox Task.
- This should automatically launch DOS in your browser.
 - *Note: If this doesn't work, try deleting your broswer's cache over the past 24-hours.*

9. Within DOS, use the "DIR" command to list all directories and use the "CD" command to navigate to the EXE file of the game you just placed in your "bundle.jsdos" archive.

10. Type in NAME.EXE (where NAME is the name of the EXE) to launch the game.
- *Note: Some games might not run correctly. For advanced guides on DOS please use ChatGPT for assistance. Koii does not provide assistance when a DOS game does not work. Please see out GitHub for officially supported games.*

11. Have fun!

