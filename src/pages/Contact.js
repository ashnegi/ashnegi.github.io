import React from 'react';
import firebase from '../firebaseContact';


// class ReactFormLabel extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
//         )
//     }
// }

export class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        let newState = {}

        newState[e.target.name] = e.target.value

        this.setState(newState)
    }


    handleSubmit = (e, message) => {
        e.preventDefault()

        // let formData = {
        //     formSender: this.state.name,
        //     formEmail: this.state.email,
        //     formSubject: this.state.subject,
        //     formMessage: this.state.message
        // }

        // if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
        //     return false
        // }

        console.log(this.state)

        const itemsRef = firebase.database().ref('ContactEmail');
        const item = {
            fbformSender: this.state.name,
            fbformEmail: this.state.email,
            fbformSubject: this.state.subject,
            fbformMessage: this.state.message
        }
        itemsRef.push(item);
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        // $.ajax({
        //     url: '#',
        //     dataType: 'json',
        //     type: 'POST',
        //     data: formData,
        //     success: function (data) {
        //      alert('Success')
        //     },
        //     error: function (xhr, status, err) {
        //         console.error(status, err.toString())
        //         alert('There was some problem with sending your message.')
        //     }
        // }) 
    }

    render() {
        return (
            <section id="contact" className="s-contact target-section">

                <div className="overlay"></div>
                <div className="row narrow section-intro">
                    <div className="col-full">
                        <h3>Contact</h3>
                        <h1>Say Hello.</h1>

                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>
                <div className="row contact__main">
                    <div className="col-eight tab-full contact__form">
                        <form className='react-form' onSubmit={this.handleSubmit}>
                            <div className='form-field'>                                
                                <input id='formName' className="full-width" name='name' autoComplete="name" type='text' placeholder="Name *" required onChange={this.handleChange} value={this.state.name} />
                            </div>
                            <div className='form-field'>
                                <input id='formEmail' className="full-width" name='email' autoComplete="email" type='email' placeholder="Email *"  required onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className='form-field'>
                                <input id='formSubject' className="full-width" name='subject' autoComplete="subject" type='text' placeholder="Subject *" required onChange={this.handleChange} value={this.state.subject} />
                            </div>

                            <div className='form-field'>
                                <textarea id='formMessage' className='full-width' name='message' placeholder="Message *" required onChange={this.handleChange} value={this.state.message}></textarea>
                            </div>

                            <div className='form-field'>
                                <button className='full-width btn--primary' type='submit'> Send message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-four tab-full contact__infos">
                        <h4 className="h06">Email</h4>
                        <p>ashish77negi@gmail.com</p>
                    </div>
                </div>
            </section>
        )
    }
}