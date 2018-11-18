#Folder Structure

First, unzip (or clone the git repo) to a folder that is best for you. Once you are done and you want to start to develop your first game, the folder structure you should aim for will look something like this:

    + Root Development Folder
    +-- ige (Where you unzipped or cloned the engine to)
    +-- Your game folder (where you do all your game development)

If you follow this structure, you will be able to pull new versions of the engine in (or unzip them on top of) the existing “ige” folder without affecting your game code. You can also add your game folder to a public GitHub repo without including the private engine code accidentally (remember, publishing the engine’s code to the internet in its raw un-obfuscated form is against the terms and conditions of your license).