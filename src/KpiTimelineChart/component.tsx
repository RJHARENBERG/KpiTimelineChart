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
                <div className="container">
                    <div className="wrapper">
                        <h1>Timeline</h1>
                        <p>Kpi development (last twelve months)</p>
                        <div className="timeline-scale">
                            <div className="number-of-kpi">
                                <div className="total-kpi">{RankingData.length + RankingData.length + RankingData.length}</div>
                                <div className="half-kpi">{(RankingData.length+ RankingData.length + RankingData.length) / 2}</div>
                                <div className="zero-kpi">0</div>
                            </div>
                            {RankingData.map((ranking) => {
                                return (
                                    <div className="ranking-kolom">
                                        <div className="kpi-status-kolom">
                                            {RankingData.map((kpi) => {
                                                return (
                                                    <div className={`kpi-square theme-green-top`}/>
                                                )
                                            })}
                                            {RankingData.map((kpi) => {
                                                return (
                                                    <div className={`kpi-square theme-yellow-top`}/>
                                                )
                                            })}
                                            {RankingData.map((kpi) => {
                                                return (
                                                    <div className={`kpi-square theme-red-top`}/>
                                                )
                                            })}
                                        </div>
                                        <div className="date-container">
                                            <h2 className="month">{ranking[1]}</h2>
                                            <p className="year">{ranking[2]}</p>
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