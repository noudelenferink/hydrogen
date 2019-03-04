export class SessionMetadata {
    public Id: number;
    public Name: string;
    public IsDefault: boolean;
    public Type?: BaseData;
}

export class BaseData {
    public Id: number;
    public Name: string;

    constructor(id:number, name:string) {
        this.Id = id;
        this.Name = name;
    }
}