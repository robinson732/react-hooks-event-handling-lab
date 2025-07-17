function Keypad(){
    function handleKey(event){
        console.log("Entering password...")
    }
    return(
        <input type="password"
        name="keypad"
        placeholder="Enter Password"
        onChange={handleKey}
        />
    )
}
export default Keypad;