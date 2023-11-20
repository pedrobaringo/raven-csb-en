export class RavenCorvus extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "v";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/raven-csb-es/images/CaraBlankGato_inCHAT.png" />',
            "2": '<img src="modules/raven-csb-es/images/CaraBlankGato_inCHAT.png" />',
            "3": '<img src="modules/raven-csb-es/images/CaraBlankGato_inCHAT.png" />',
            "4": '<img src="modules/raven-csb-es/images/CaraGato_inCHAT.png" />',
			"5": '<img src="modules/raven-csb-es/images/CaraGato_inCHAT.png" />',			
            "6": '<img src="modules/raven-csb-es/images/CaraGato_inCHAT.png" />'
        }[result.result];
    }
}

export class RavenNiebla extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "n";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/raven-csb-es/images/CaraBlankCuervo_inCHAT.png" />',
            "2": '<img src="modules/raven-csb-es/images/CaraBlankCuervo_inCHAT.png" />',
            "3": '<img src="modules/raven-csb-es/images/CaraBlankCuervo_inCHAT.png" />',
            "4": '<img src="modules/raven-csb-es/images/CaraCuervo_inCHAT.png" />',
			"5": '<img src="modules/raven-csb-es/images/CaraCuervo_inCHAT.png" />',			
            "6": '<img src="modules/raven-csb-es/images/CaraCuervo_inCHAT.png" />'
        }[result.result];
    }
}