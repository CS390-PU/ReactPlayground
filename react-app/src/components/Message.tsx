// PascalCasing naming convention
function Message (props : any) {

  function helloClick() {
    console.log (props.name);
    console.log (typeof (props.name));
    alert ("Hello, " + props.name);
  }
  // JSX which is JavaScript XML code
  return (
    <button onClick={helloClick}>Say Hello</button>
  );
}

export default Message;