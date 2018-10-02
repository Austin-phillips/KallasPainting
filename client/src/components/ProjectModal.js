import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class ProjectModal extends Component {
  state = {
    title: this.props.project.title,
    description: this.props.project.description,
    image: this.props.project.public
  }

  render() {
    const {title, description, image} = this.state
    return(
      <Modal centered trigger={<Button>View Project</Button>}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>{description}</p>
            <Image size='medium' src={image} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )}}


export default ProjectModal