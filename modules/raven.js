import {RavenCorvus} from './die.js';
import {RavenNiebla} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["v"] = RavenCorvus;
	CONFIG.Dice.terms["n"] = RavenNiebla;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"ravenDice",name:"Raven Dice"},"default");
    dice3d.addDicePreset({
      type:"dv",
      labels:[
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraGato.png',
        'modules/raven-csb-es/images/CaraGato.png', 
        'modules/raven-csb-es/images/CaraGato.png'
      ],
      bumpMaps:[
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraGato_Bump.png',
        'modules/raven-csb-es/images/CaraGato_Bump.png', 
        'modules/raven-csb-es/images/CaraGato_Bump.png'
      ],
	  colorset:"blackCorvus",
      system: "ravenDice"
    });
	dice3d.addDicePreset({
      type:"dn",
      labels:[
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraBlank.png', 
        'modules/raven-csb-es/images/CaraCuervo.png',
        'modules/raven-csb-es/images/CaraCuervo.png', 
        'modules/raven-csb-es/images/CaraCuervo.png'
      ],
      bumpMaps:[
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraBlank_Bump.png', 
        'modules/raven-csb-es/images/CaraCuervo_Bump.png',
        'modules/raven-csb-es/images/CaraCuervo_Bump.png', 
        'modules/raven-csb-es/images/CaraCuervo_Bump.png'
      ],
	  colorset:"whiteCorvus",
      system: "ravenDice"
    });
dice3d.addColorset({
    name: 'whiteCorvus',
    description: 'White',
    category: 'Raven Dice',
    foreground: '#FFFFFF',
    background: '#FFFFFF',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
dice3d.addColorset({
    name: 'blackCorvus',
    description: 'Black',
    category: 'Raven Dice',
    foreground: '#000000',
    background: '#000000',
    outline: 'black',
    texture: 'none',
    material: 'plastic'
});
});
