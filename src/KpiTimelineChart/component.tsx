import * as React from "react";


interface data {
    id: number,
    scope: string,
    iso: string,
    red: number,
    yellow: number,
    green: number
}

/**Gegevens weergeven met React
 *
 * U kunt gegevens weergeven met React. Het onderdeel kan gegevens weergeven op basis van de eigen status.*/
export interface State {
    RankingData: object[],

    size: number
}

export const initialState: State = {
    RankingData: [],

    size: 0
}

export class KpiTimelineChart extends React.Component<{}> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    /**Uw visual instellen om gegevens te verzenden
     *
     * In deze sectie werkt u uw visual bij om updates te verzenden naar exemplaren in het onderdeelbestand .*/
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof KpiTimelineChart.updateCallback === 'function') {
            KpiTimelineChart.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        KpiTimelineChart.updateCallback = (newState: State): void => {
            this.setState(newState);
        };
    }

    public componentWillUnmount() {
        KpiTimelineChart.updateCallback = null;
    }

    /** hier sorteren van de status op kleur? of aparte variabele / kolommen maken van uit de data base?*/
    /** het renderen van het react component */
    render() {
        const {RankingData, size} = this.state;
        console.log(RankingData)

        const style: React.CSSProperties = {width: size, height: size};

        return (
            <>
                <div className="container" style={style}>
                    <div className="wrapper">
                        <h1>Ranking</h1>
                        <div className="ranking-card">
                            {RankingData.map((ranking) => {
                                return (
                                    <div className="countries-card">
                                        <div className="scope-label">
                                            {ranking[2]}
                                            <div className="yellow-rank-number">
                                                {ranking[4]}
                                            </div>
                                        </div>
                                        <div className="balance-card">
                                            <h2>{ranking[1]}</h2>
                                            <div className="kpi-card">
                                                {RankingData.map((kpi) => {
                                                    return (
                                                        <div className={`kpi-square theme-red-top`}/>
                                                    )
                                                })}
                                                {RankingData.map((kpi) => {
                                                    return (
                                                        <div className={`kpi-square theme-yellow-top`}/>
                                                    )
                                                })}
                                                {RankingData.map((kpi) => {
                                                    return (
                                                        <div className={`kpi-square theme-green-top`}/>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default KpiTimelineChart;