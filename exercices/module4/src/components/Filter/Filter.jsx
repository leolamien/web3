const Filter =({value,filter})=>{
const handlefilter = (event)=>{
    filter(event);
}
    return(
        <div>
        filter shown with:{" "}
        <input value={value} onChange={filter} />
      </div>
    )
}
export default Filter;