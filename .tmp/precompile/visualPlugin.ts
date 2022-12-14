import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var kpiTimelineChart1B602700AB3F4033A60525DA22A0AD06_DEBUG: IVisualPlugin = {
    name: 'kpiTimelineChart1B602700AB3F4033A60525DA22A0AD06_DEBUG',
    displayName: 'KpiTimelineChart',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["kpiTimelineChart1B602700AB3F4033A60525DA22A0AD06_DEBUG"] = kpiTimelineChart1B602700AB3F4033A60525DA22A0AD06_DEBUG;
}
export default kpiTimelineChart1B602700AB3F4033A60525DA22A0AD06_DEBUG;