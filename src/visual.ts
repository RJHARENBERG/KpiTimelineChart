"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

/**Import React dependencies and the added component*/
import * as React from "react";
import * as ReactDOM from "react-dom";
import {KpiTimelineChart, initialState} from "./KpiTimelineChart/component";

/**Import css style*/
import "./../style/visual.less";

/**Het bestand visual.ts configureren
 * Haal de huidige grootte van de visual-viewport op uit het object options.*/
import IViewport = powerbi.IViewport;

/**Omdat standaard Power BI TypeScript-instellingen niet worden herkend React tsx-bestanden
 * Als u het onderdeel wilt weergeven, voegt u het HTML-doelelement toe aan visual.ts. Dit element bevindt zich
 * HTMLElement in VisualConstructorOptions, dat wordt doorgegeven aan de constructor.*/
export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;

    private viewport: IViewport;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(KpiTimelineChart, {});
        this.target = options.element;

        ReactDOM.render(this.reactRoot, this.target);
    }

    /**Uw visual instellen op het ontvangen van gegevens
     *
     * Visuals ontvangen gegevens als argument van de update methode. In deze sectie werkt u deze
     * methode bij om gegevens te ontvangen.*/
    public update(options: VisualUpdateOptions) {

        if(options.dataViews && options.dataViews[0]){
            const dataView: DataView = options.dataViews[0];

            this.viewport = options.viewport;
            const { width, height } = this.viewport;
            const size = Math.min(width, height);

            KpiTimelineChart.update({
                RankingData: dataView.table.rows,
                size

            });
        } else {
            this.clear();
        }
    }

    private clear() {
        KpiTimelineChart.update(initialState);
    }
}