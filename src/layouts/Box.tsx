import { useSelector } from "react-redux";

function BoxComponent() {
  const boxStore = useSelector((state: any) => state.box.box);
  var style = {
    display: "inline-block",
    width: boxStore?.size.width,
    height: boxStore?.size.height,
    border: 1,
    padding: 10,
    margin: 10,
    backgroundColor: `rgba(${boxStore?.color.red},${boxStore?.color.green},${boxStore?.color.blue},${boxStore?.color.alpha})`,
  };

  return <div style={style} />;
}

export default BoxComponent;
