
import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
)



// Component
class Welcome extends React.Component {
  render() {
      return <h1>Hello, {this.props.name}</h1>
  }
}
// PureComponent
class Welcome extends React.PureComponent {
  render() {
      return <h1>Hello, {this.props.name}</h1>
  }
}
// functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

<button className='button button-blue'>OK</button>

// Description of dom node
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'text',
      props: {
        children: 'OK'
      }
    }
  }
}

function Button (props) {
  // ...
}
<Button color='blue'>OK</Button>

// Description of Component instance
{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK'
  }
}


let firstRender = true;

function RenderFunctionComponent() {
  let initName;
  
  if(firstRender){
    [initName] = useState("Rudi");
    firstRender = false;
  }
  const [firstName, setFirstName] = useState(initName);
  const [lastName, setLastName] = useState("Yardley");

  return (
    <div>
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <Button onClick={() => setFirstName("Fred")}>Fred</Button>
    </div>
  )
}


