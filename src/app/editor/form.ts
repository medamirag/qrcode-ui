import { Style } from "./style";

export interface Form {
    category:string,
    items:{label:string,type:string,value:string,lat?:number,lng?:number,identifier:number
    }[],
    userId:string,
    title:string,
    style:string,
    id:string
    border?:string
    width:string
    private:boolean
 

}
