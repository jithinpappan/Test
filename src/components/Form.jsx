import React from 'react'
import { useState } from 'react'

function Form() {
      
    // const [userData, setUserData ] = useState(initialUserData)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const clickSubmit =(e)=> {
      e.preventDefault()
      console.log(name, email,message)
    }
    
    
  return (
    <div>
        <div className="contact-section section ">
        <div className="contact-section-wrap">
          <section className=" col-6">
            <h1>Get in touch.</h1>

            <p>To get in touch with us</p>
            <form onSubmit={(e)=>clickSubmit(e)}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange= {(e)=>setName(e.target.value)}
                  placeholder="Name"
                  
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Message</label>


                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              
              </button>
            </form>

            <p>
              Phone: 07436567799
              <br />
              Email: Info@nadeemzakkeer.com
            </p>
          </section>
          {/* <div className="contact-img-wrap col-6">
            <img src="https://images.unsplash.com/photo-1615797229417-c158f4258648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Form