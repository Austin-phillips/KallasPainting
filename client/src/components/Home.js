import React, { Component } from 'react';
import { Container, Header, Divider, Card, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getProjects} from '../actions/project';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ProjectModal from './ProjectModal'

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  handleShow = (project) => {
    console.log(project)
  }

  displayImages = () => {
    const {projects} = this.props 
    return projects.map( p => {
      return(
        <div key={p.id} onClick={() => this.handleShow(p)}>
          <img src={p.public} />
          <p className="legend">{p.title}</p>
        </div>
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
        <div style={styles.images}>
          <Carousel>
            {this.displayImages()}
          </Carousel>
        </div>
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
  },
  projects: {
    margin: '25px'
  }, 
  card: {
    margin: '30px'
  },
  images: {
    margin: '45px',
    border: 'black solid 1px',
  }
}

const mapStateToProps = (state) => {
  return {projects: state.project}
}

export default connect(mapStateToProps)(Home);
