import React, { Component } from 'react';
import axios from 'axios';
import "../styles/contact.css";
class ContactComponent extends Component {

    state = {
        contacts: []
    }

    async componentDidMount() {
        const res = await axios.get('/api/contacts');
        const contacts = res.data.contacts;
        this.setState({ contacts });
    }

    renderContact = () => {
        const { contacts } = this.state;
        const members = contacts.map((member,ind) => {
            return (
                <div className="p-2 text-center contact-info">
                    <h3>
                        {member.name}
                    </h3>
                    <h4 className="contact-role">
                        {member.role}
                    </h4>
                    <div> 
                    <img className="coordinator-avatar" src="https://img.icons8.com/dotty/150/000000/engineer.png"/>
                    </div>
                    <div className="mt-2" >
                        <a href={`mailto:${member.mail}`} className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-envelope mr-3"/>{member.mail}</a>
                        <a href={`tel:+91${member.phonenumber}`} className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-phone mr-3"/>{member.phonenumber}</a>
                    </div>
                </div>
            )
        })
        return memeber
    }

    render() {
        return (
            <div className="contact-container">
              <h1 className="text-center contact-header">
                  Magic Members
                  {/* <div style={{height: "2px", backgroundColor: "black", width:"80%", margin: "0 auto"}}></div> */}
              </h1>
              <hr className="horizontal dark mb-4 container-sm"></hr>
              <div className="contact-info-container">
                {/* rendercontact */}
                
              </div>
            </div>
            
        )
    }
}
export default ContactComponent;