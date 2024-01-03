type RGBAColor = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
type Size = {
    width:number
    height:number
}
export default interface Box{
    color:RGBAColor
    size:Size
}