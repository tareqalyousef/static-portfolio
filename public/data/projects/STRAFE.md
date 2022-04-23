---
title: STRAFE
description: Server-authoritative, multiplayer platformer.
status: in-progress
---

## Background
---
Growing up, I played [Source Engine](https://en.wikipedia.org/wiki/Source_(game_engine)) based games. The intricate movement mechanics felt gratifying--whether it was surfing, bunnyhopping, or rocket jumping, something about the engine's movement left an impression.

My journey with game development began when I discovered the [Blender Game Engine](https://en.wikipedia.org/wiki/Blender_Game_Engine) in elementary school. Although I had trouble understanding the engine at the time, I was eager to learn it. I made splitscreen games and played with friends at a school computer.

It quickly became a hobby. Over the years, I've made a multitude of games, and I learned every part of the development process--modeling, texturing, animating, and programming. I've toyed with other game engines such as [Unity3d](https://en.wikipedia.org/wiki/Unity_(game_engine)), [Torque](https://en.wikipedia.org/wiki/Torque_(game_engine)), and [Unreal Engine](https://en.wikipedia.org/wiki/Unreal_Engine).

Of all the game engines I've used, Unity3d was my favorite--it didn't have a ridiculous entry skill level, had great community support, was very flexible, and used C#!

When I decided it was time to create a serious game, I stuck with what I loved: movement-based video games. These peculiar gamemodes have always been fairly unpopular, but the communities surrounding them have always been very dedicated and competitive.

I thought it would be fitting to create a rocket jumping game, one that would include the smooth movement I've always loved but unconstrained by the old technology of popular movement-based games.

## Project
---
The game is built using Unity3d, coded with C#, animated and modeled with [Blender](https://en.wikipedia.org/wiki/Blender_(software)), and textured with [GIMP](https://en.wikipedia.org/wiki/GIMP). It is a competitive rocket jumping game--players use explosives from rockets to propel themselves across a series of levels.

I relied on [Source's multiplayer documentation](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking) for the client-server model. The game is server-authoritative, meaning the server ultimately controls the "state" of the game, rather than relying on information from clients. This has numerous benefits over a traditional client-server architecture: it prevents cheating, allows for validating data sent from the client to the server, and is very consistent and reliable over all clients. To combat the full [round trip delay](https://en.wikipedia.org/wiki/Round-trip_delay) of the server-authoritative model, I've added client-side prediction, a method that allows client-side actions to be performed instantly only on their end. To clarify, these actions only exist on the client--other clients use data from the server's game state.

Since then, Unity3d has transformed with the [new render pipelines](https://docs.unity3d.com/Manual/render-pipelines.html), new networking solutions, and [DOTS](https://unity.com/dots), the data-oriented technology stack. These changes have introduced new challenges, and the project has been paused ever since.