import React, { Component } from "react"

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state
    const { title, children } = this.props

    return (
      <>
        <button onClick={this.toggleModal}>Открыть модальное окно</button>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{title}</h2>
                <button onClick={this.toggleModal}>Закрыть</button>
              </div>
              <div className="modal-content">{children}</div>
            </div>
          </div>
        )}
      </>
    )
  }
}
