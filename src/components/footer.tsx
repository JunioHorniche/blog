import ExtLink from './ext-link'

import contactStyles from '../styles/contact.module.css'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/juniohorniche',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/juniohorniche',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/juniohorniche/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:juniohorniche@gmail.com',
  },
]

export default function Footer() {
  return (
    <>
      <footer>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </footer>
    </>
  )
}
