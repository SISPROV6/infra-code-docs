import { IError } from "ngx-sp-infra";
import { RecordsListModel } from "./lista.model";

export class RetRecordsListModel implements IError {
   public Error: boolean = false;
   public ErrorMessage: string = "";
   public RecordsList: RecordsListModel[] = [];
}