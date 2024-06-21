Hooks.once("init", function() {
    console.log("Initializing Raven module")

    game.settings.register("raven-csb-en", "firstTimeStart", {
       name: "Force Welcome message",
        hint: "If you check this box you will see the Welcome message the next time you enter the World.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Welcome to the Raven Module</h1>';
	let mensimpfirst='<p>Import the Compendiums to start using the module</p><button id='+buttonId2+' style= "font-family: Darktown;">Import the compendiums</button>';
	let mensimpact='<p>The module has been updated since you last used it. Import the compendiums to have the latest version of the actor Templates.</p><button id='+buttonId2+' style= "font-family: Darktown;">Import the Compendiums</button>'
	let mensrecordtut='<p>If you want more information about how to use this module:</p><button id='+buttonId+' style= "font-family: Darktown;">Go to the Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("raven-csb-en", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("raven-csb-en").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("raven-csb-en", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Lord Poe Corvus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/raven-csb-en')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("raven-csb-en.actortemplates");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("raven-csb-en", "welcomeMessage", true);
						game.user.setFlag("raven-csb-en", "lastVersion", game.modules.get("raven-csb-en").version);
					});
				}
				}, 100);
			});
			game.settings.set("raven-csb-en", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("raven-csb-en", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Lord Poe Corvus"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/raven-csb-en')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("raven-csb-en.actortemplates");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("raven-csb-en", "lastVersion", game.modules.get("raven-csb-en").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("raven-csb-en", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Lord Poe Corvus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/raven-csb-en');
				});
			}
			}, 100);
		});
		game.user.setFlag("raven-csb-en", "welcomeMessage", true);
		game.settings.set("raven-csb-en", "firstTimeStart", false);
	}
})