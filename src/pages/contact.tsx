import Header from '../components/header'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img
            src="https://github.com/juniohorniche.png"
            alt="Junio Horniche"
          />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Junio Horniche - Computer Engineer
        </div>
      </div>
    </>
  )
}
