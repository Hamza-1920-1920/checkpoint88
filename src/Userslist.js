import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Userslist() {
 
    const [listOfUser, setlistOfUser] = React.useState([])

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setlistOfUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
   
           
   
        }, [])

        const users =  listOfUser.map((item ) => 
          
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
              {item.name}
              </Card.Title>
             
              <Card.Text>
              {item.username}
              </Card.Text>
             
              <Card.Text>
              {item.address.city}
              </Card.Text>
             
            </Card.Body>
          </Card>
           
            
                 
             )

    return (
 
 <div>{users}</div>
 

)
}
