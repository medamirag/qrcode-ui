import { Style } from "./style";

export interface Form {
    category:string,
    items:{label:string,type:string,value:string,lat?:string,lng?:string}[],
    userId:string,
    title:string,
    style:string,
    id:string
    border?:string
 

}
