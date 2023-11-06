import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function HeaderAndFooterExample() {
    const navigate=useNavigate()
  return (
<Card className="text-center">
      <Card.Header>Congratulations</Card.Header>
      <Card.Body> 
        <Card.Title>You Have Successfully Finished the Exam!!</Card.Title>
        <Card.Text>
          All The Best For Your Future 
        </Card.Text>
        <h5>Go to Main menu</h5>
  <button className="btn btn-info btn-lg"onClick={()=>{
    navigate("/login")
  }}>Click Here</button>

        {/* <Button variant="primary">Login Again Click Here</Button>
        
        <a >Click  Here</a> */}
      
      </Card.Body>
      <Card.Footer className="text-muted">Thank You</Card.Footer>
    </Card>
  );


  
}

export default HeaderAndFooterExample;