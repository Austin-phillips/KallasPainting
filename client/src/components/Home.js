import React, { Component } from 'react';
import { Container, Header, Divider, Card, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getProjects} from '../actions/project';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  handleClick = (project) => {
    console.log(project)
  }

  displayProjects = () => {
    const {projects} = this.props
    return projects.map( project => {
      return(
        <Grid.Column
          key={project.id}
          computer={3}
          tablet={12}
          phone={12}
        >
          <Card onClick={this.handleClick(project)}>
            <Image
              src='https://res.cloudinary.com/kallasbeauty/image/upload/v1538023948/a3qnhdc1jyf7ylrbkmvu.jpg'
            />
              <Card.Content>
                <Card.Header>{project.title}</Card.Header>
                <Card.Description>{project.description}</Card.Description>
              </Card.Content>
            </Card>
        </Grid.Column>
      )
    })
  }

  render() {
    return (
      <div style={styles.page}>
        <Header style={styles.header} size='huge' textAlign='center'>Kallas Painting</Header>
        <Container style={styles.company} textAlign='center'>
          <Header as='h3'>About the Kallas Painting</Header>
          <Divider />
          <p>This is where i am going to put all the content for the current website.</p>
        </Container>
        <Divider />
        <Grid columns={12}>
          <Grid.Row centered>
            {this.displayProjects()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  page: {
    height: '1000px'
  },
  header: {
    margin: '75px 0px 200px 0px'
  },
  company: {
    border: 'solid black',
    borderRadius: '50px',
    height: '300px',
    paddingTop: '35px',
    paddingBottom: '15px'
  }
}

const mapStateToProps = (state) => {
  return {projects: state.project}
}

export default connect(mapStateToProps)(Home);
