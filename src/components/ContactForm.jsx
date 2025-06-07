import React from 'react' 


function ContactForm() {
  return (
    <div>
      <div className="container">
        <form>
            <input type="text" value={name} />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
