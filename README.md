![Fondo Tutorial Raven_Eng](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/d6d5db02-93b8-426f-a72d-8086a41e6cb7)

# Character Sheets for Raven in Custom System Builder

## Tabla of Content
- [Introduction](#introduction)
- [Install](#install)
- [Add CSS Styles](#add-css-styles)
- [Create a Corvus Character](#create-a-covus-character)
  - [Personality and Actions Tab](#personality-and-actions-tab)
  - [Magic and Aftereffects Tab](#magic-and-aftereffects-tab)
  - [Paths and Circles Tab](#paths-and-circles-tab)
- [Create a Non-Corvus-Character](#create-a-non-corvus-character)
- [Create a Spectral Being](#create-a-spectral-being)
- [Roll dice](#roll-dice)

## Introduction
Foundry VTT module with the templates for the Raven game in English for the Custom System Builder system ( https://foundryvtt.com/packages/custom-system-builder ).

To learn how to install and use it you can see the tutorial in the following link:

[![Video del tutorial](http://img.youtube.com/vi/jgwC5lTZZrI/0.jpg)](http://www.youtube.com/watch?v=jgwC5lTZZrI "Tutorial Foundry-Raven")

## Install
To install this module in Foundry you have to use the following Manifest in the modules menu as shown in the image: **https://github.com/pedrobaringo/raven-csb-en/releases/latest/download/module.json**

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/33d9e1ff-8e2a-4003-85d4-4a334ec5d82a)

When you have created a world with the Custom System Builder, you must activate this module. In the compendium tab you will have: "Actor_Templates".
It is important that when importing you keep the ID of the document as shown in the image:

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/37e24478-1a59-4c50-8948-ccfa8c04ff36)

## Add CSS Styles
To make the style of the tiles and messages more similar to the book, go to Configure Settings --> Custom System Builder and there fill in the CSS Style file field with "**modules/raven-csb-en/assets/Raven.css**", without the inverted commas. And while we are in this menu, if we want a dice icon to appear next to the fields that can be rolled, in Roll Icons we can put "dice" (also without quotes). In initiative it is not necessary to put anything.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/f03031d3-c3ce-4c17-9f03-ebf4535ccac7)

For it to work we must refresh the page.

## Create a Corvus Character
Once the templates are imported we can create the Actors.
Click on Create Actor, give it a name and select the "character" type, and a blank sheet will be created.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/d45a3e5a-d932-4941-b416-dbd99bd08724)

Here we have to select in Template the one called CC_Template.

Once we have selected the template and click on the refresh icon in the sheet we are ready to start filling it.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/b5713437-e7be-4510-9038-fa81cf74b738)

At the top you can select the concept (which will activate the corresponding Actions and Magic fields). We also have to fill in the "What makes you..." fields to define the character.

### Personality and Actions Tab

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/2e6226cd-f8bb-4ddc-ac4f-b0b33fb12a9c)

In this tab we first have the personalities, where we can fill in the corresponding value for each of them. Clicking on the name of the personality will execute the dice rolls.

On the right side of this tab we have the actions with the checkboxes of those that can be acquired as the character progresses.

On the left hand side, underneath the personalities we have the boxes to fill in "You have the disturbing tendency to...", "Your Curse" and "Your Personal Mystery". All of these have a text box for players to fill in.

Under the Actions we have the fields "Your sisters and brothers" (which can be edited to add descriptions as needed), and "Your cursed loved one" (also with editable fields).

### Magic and Aftereffects Tab
In this tab we have the three boxes related to magic and aftereffects, problems, aids and twists.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/05637089-9ac2-43ef-b093-2f916f11f9a0)

In "Your Cursed Magic Art" you have the art related to the concept you have selected and you can fill in the editable fields. Also, when you take advances to get a new Art there will appear a new section to fill in all the information about this Art.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/691db543-4145-4d3b-849e-10f8598f5683)

In the box next to it you have the magical actions as well as a place to write down your magical sacrifices.

In "Your Magic Power Circle" you can mark which level of the circle your character is in.

In the last four sections you can fill in the aftereffects you receive, as well as write down problems, twists and pending help that appear during the game.

### Paths and Circles Tab
In this tab we have the two paths, the Mist Path and the Learning Path, as well as other fields to describe the people and objects around us.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/874af828-c4d0-41bb-9cec-70f6d4fc6afd)

On the Mist path we can tick the boxes for each level as we go deeper into the Mists. Once you have completed a level you can choose the type of magic and the Curse Trait from the drop down menu.

In the Learning path we can tick boxes each session and progress once they are all ticked.

In "Your Valet" and "Your Laboratory" you can briefly describe that character and your place of work. In "Your Library and Tenebrous Objects" you can edit the field to add more objects and books than the default one according to the selected archetype.

In "Your Social Circle" you can edit the text box to assign the NCCs you encounter and their relationship to you.

## Create a Non-Corvus-Character
Click on Create Actor, give it a name and select the "character" type, and a blank tab will be created.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/30ea6336-4b01-4521-a878-fb5ba9a172a8)

Here we have to select in Template the one called NCC_Template.

Once we have selected the template and click on the refresh icon in the tab we are ready to start filling it.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/3c538727-aaa9-44ce-91e6-b1d78530e198)

At the top we can select whether that NCC has magical arts and whether it is related to the Order so that these fields appear in the record.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/fb44a280-607d-4df8-a1c1-487dc3a8a67d)

The rest of the fields are simply for various descriptions of the character and how it relates to the different actors in the city. I have added this template in case you want to use tokens or a module (like Theatre Inserts https://foundryvtt.com/packages/theatre ) that needs tokens to display the character images.

## Create a Spectral Being
Click on Create Actor, give it a name and select the "character" type, and a blank tab will be created.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/e5fb690c-817f-41cc-8768-854003581aa6)

Here we have to select in Template the one called Spectral_Beings_Template.

Once we have selected the template and click on the refresh icon on the tab we are ready to start filling it.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/2b5e7b1a-969e-4916-b628-1146706e90ea)

The fields are simply for various descriptions of the being and ideas for mysteries. I've added this template in case you want to use tokens or a module (like Theatre Inserts https://foundryvtt.com/packages/theatre ) that needs tokens to display character images.

## Roll dice
To make rolls you only need to click on the name of the Personality you want to roll.

Once clicked, a dialog will appear in which you can select how many Corvus and Mist dice you want to use and if it is a roll with Dense Mist. For Corvus Dice, the default value for that Personality will be displayed.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/3cf45f6c-0cfe-444b-8034-56efef1093be)

Once selected and the accept button is clicked, the roll will take place and the result will be displayed.

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/191d2d23-7f95-4b4f-9983-3de69d3adf19)

The result will automatically calculate whether there has been a Favourable Twist (result greater than or equal to 2), a Twist with Complications (result between -1 and 1) or a Tenebrous Twist (result less than or equal to -2).

If we select to roll with Dense Fog it will take two Cat results to negate a Raven result and if there is only one cat left to face 1 or more ravens that cat will be ignored. The result shown on the roll takes this into account as you can see in the following examples with Dense Fog:

![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/d7965f57-3e57-48ab-a365-fb4bbd84cbe8) ![image](https://github.com/pedrobaringo/raven-csb-en/assets/148097688/7c38ec3a-4f0d-402e-8e77-d676242bb344)
