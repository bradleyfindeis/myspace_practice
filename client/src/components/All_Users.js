import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class All_Users extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('/api/all_users')
      .then( res => {
        this.setState({ users: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { users } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { users.map( user =>
            <Card key={user.id}>
              <Card.Content>
                <Image src={user.avatar} />
                <Divider />
                <Card.Header>
                  {user.name}
                </Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(All_Users)