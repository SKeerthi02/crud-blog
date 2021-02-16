export class Blog {

  private _title: string;
  private _description: string;
  public _id: number;
  public _dateCreated: Date;

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}
