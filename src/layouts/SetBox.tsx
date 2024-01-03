import { useState } from "react";
import Box from "../Models/Box";
import { box } from "../store/initialValues/initialValues";
import { resetBox, setBox } from "../store/reducers/boxReducer";
import { useDispatch } from "react-redux";


function SetBox() {  
  const dispatch = useDispatch();
  const [boxState,setBoxState]=useState<Box>(JSON.parse(JSON.stringify(box)));
    let newBox:Box={...boxState};
   function OnInputChange(isSize:boolean,input:HTMLInputElement){   
      const {name,value}=input
      if (isSize) {        
        newBox.size={...newBox.size,[name]:parseInt(value)} 
      }
      else{
        newBox.color={...newBox.color,[name]:parseFloat(value)}
      }          
      setBoxState(newBox);
      dispatch(setBox(newBox));
      } 
      function OnClickResetButton(){
        newBox=JSON.parse(JSON.stringify(box));
        setBoxState(newBox);
        dispatch(resetBox())
      }
  return (
    <div style={{display:"inline-block",textAlign:"right"}}>  
        <label>Genişlik : {boxState.size.width} </label>
        <input name="width" type="range" min={10} max={300} step={1} value={boxState.size.width} onInput={(i)=>OnInputChange(true,i.currentTarget)}/><br/>
        <label>Yükseklik : {boxState.size.height} </label>
        <input name="height" type="range" min={10} max={300} step={1} value={boxState.size.height} onInput={(i)=>OnInputChange(true,i.currentTarget)}/><br/>
        <label>Kırmızı ton : {boxState.color.red} </label>
        <input name="red" type="range" min={0} max={255} step={1} value={boxState.color.red} onInput={(i)=>OnInputChange(false,i.currentTarget)}/><br/>
        <label>Yeşil ton :  {boxState.color.green} </label>
        <input name="green" type="range" min={0} max={255} step={1} value={boxState.color.green} onInput={(i)=>OnInputChange(false,i.currentTarget)}/><br/>
        <label>Mavi ton :  {boxState.color.blue} </label>
        <input name="blue" type="range" min={0} max={255} step={1} value={boxState.color.blue} onInput={(i)=>OnInputChange(false,i.currentTarget)}/><br/>
        <label>Saydamlık :  {boxState.color.alpha} </label>
        <input name="alpha" type="range" min={0} max={1} step={.01} value={boxState.color.alpha} onInput={(i)=>OnInputChange(false,i.currentTarget)}/><br/>  
        <button onClick={OnClickResetButton}>Reset</button>
    </div>
    
  )
}

export default SetBox