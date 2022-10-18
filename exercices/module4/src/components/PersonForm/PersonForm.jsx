import Input from "components/Input/Input";
const PersonForm=({onsubmit,value1,value2,onchange1,onchange2})=>{
const handlesubmit= (event)=>{
    onsubmit(event)
}
    return(
        <form onSubmit={onsubmit}>
        {/* <div>
          name: <input value={newName} onChange={handleNoteChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div> */}
        <div>
            <Input value={value1} text="Name" onchange={onchange1}></Input>
            <Input value={value2} text="Number" onchange={onchange2}></Input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}
export default PersonForm;