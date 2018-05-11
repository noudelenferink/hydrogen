export class MenuItem {
    constructor(title: string, component: any, icon: string, isManager: boolean, permissions?: string[]) {
        this.Title = title;
        this.Permissions = permissions;
        this.Icon = icon;
        this.Component = component;
        this.IsManager = isManager;
    }
    public Title: string;
    public Component: string;
    public Icon: string;
    public IsManager: boolean;
    public Permissions?: string[];
}