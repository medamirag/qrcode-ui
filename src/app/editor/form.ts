import { Style } from "./style";

export interface Form {
    category:string,
    items:{label:string,type:string,value:string,center?:google.maps.LatLngLiteral}[],
    userId:string,
    title:string,
    style:Style

}
