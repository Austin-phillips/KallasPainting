import React, { Component } from 'react';
import { Container, Header, Divider, Card, Grid, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getProjects} from '../actions/project';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, withRouter } from 'react-router-dom';
import ProjectModal from './ProjectModal'

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  handleShow = (project) => {
    console.log(project)
  }

  displayProjects = () => {
    const {projects} = this.props
    return projects.map( p => {
      return(
        <Grid.Column
          key={p.id}
          computer={12}
          tablet={12}
          phone={12}
        >
          <Card style={styles.card} centered raised fluid>
            <Image src={p.public} />
            <Card.Content>
              <Card.Header>{p.title}</Card.Header>
              <Card.Description>{p.description}</Card.Description>
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
        <Header style={{color: 'white'}} size='huge' textAlign='center'>Projects</Header>
        <Container style={styles.projects}>
          <Grid columns={12}>
            <Grid.Row centered>
              {this.displayProjects()}
            </Grid.Row>
          </Grid>
        </Container>
        <Container textAlign='center'>
          <Link to='/projects'>
            <Button style={{marginBottom: '150px', width: '300px'}} color='green'> View More Projects</Button>
          </Link>
        </Container>
      </div>
    );
  }
}

const styles = {
  header: {
    margin: '75px 0px 200px 0px',
    color: 'white',
  },
  company: {
    border: 'solid black',
    borderRadius: '50px',
    height: '300px',
    paddingTop: '35px',
    paddingBottom: '15px',
    backgroundColor: 'white',
  },
  card: {
    marginTop: '100px'
  },
  projects: {
    marginBottom: '150px'
  },
}

const mapStateToProps = (state) => {
  return {projects: state.project}
}

export default withRouter(connect(mapStateToProps)(Home));
