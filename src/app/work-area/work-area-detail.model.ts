export class WorkAreaDetail {
    public activity: string;
    public project: string;
    public additionalInfo: string;
    public time: any[];
    public datefieldVal: string;
    timeInView: string;

    constructor(activity: string, project: string, additionalInfo: string, time: any[], datefieldVal: string, timeInView: string) {
        this.activity = activity;
        this.project = project;
        this.additionalInfo = additionalInfo;
        this.time = time;
        this.datefieldVal = datefieldVal;
        this.timeInView = timeInView;
    }
}