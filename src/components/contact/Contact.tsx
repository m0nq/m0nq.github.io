import React from 'react';
import { useContext } from 'react';
import { ReactElement } from 'react';
import ReactDom from 'react-dom';
import { useForm } from '@formspree/react';
import { ValidationError } from '@formspree/react';
import { ContactContext } from '@contexts/Contact.context';

export const Contact = (): ReactElement | null => {
    const [state, handleSubmit] = useForm('xdoqjkon');
    const { isOpen, setIsOpen } = useContext(ContactContext);

    if (!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"></div>
            <div className="contact">
                {state.succeeded ? (
                    <div className="success-message">
                        <p>Thanks for the message!</p>
                        <br />
                        <p>I should get back to you within 24 hours.</p>
                        <button onClick={() => setIsOpen(false)}
                            style={{
                                border: '1px solid white',
                                borderRadius: '0.25rem',
                                padding: '0.5rem 1.75rem',
                                marginTop: '0.75rem'
                            }}>
                            ← Back
                        </button>
                    </div>
                ) : (
                    <form method="POST" action="https://formspree.io/f/xdoqjkon" id="contact-form"
                        onSubmit={handleSubmit}>
                        <fieldset id="contact-form-group" className="contact-form">
                            <label htmlFor="full-name">Name</label>
                            <input type="text" name="name" id="full-name" placeholder="First and Last" required />
                            <label htmlFor="email-address">Email</label>
                            <input type="email" name="_replyto" id="email-address" placeholder="something@email.com"
                                required />
                            <label htmlFor="message">Message</label>
                            <textarea rows={5}
                                name="message"
                                id="message"
                                placeholder="Fashion axe fanny pack migas cliche kinfolk. Mukbang selfies palo santo post-ironic DIY. Tacos gochujang mumblecore whatever. Bicycle rights tousled tumblr DIY. Cray solarpunk master cleanse pug live-edge, helvetica XOXO. Pour-over fam bruh typewriter mixtape, thundercats twee listicle raw denim lomo yes plz XOXO artisan jean shorts. Quinoa ugh grailed jawn tumeric yr jianbing."
                                required />
                            <ValidationError prefix="Message"
                                field="message"
                                errors={state.errors} />
                            <input type="hidden" name="_subject" id="email-subject"
                                value="Porfolio Contact Form Submission" />
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />
                        </fieldset>
                        <button className="contact-send-btn" onClick={() => setIsOpen(false)}>Cancel</button>
                        <button type="submit" className="contact-send-btn">Send</button>
                        {/*<input type="submit" value="Send" className="contact-send-btn"/>*/}
                    </form>
                )}
            </div>
        </>,
        document.querySelector('#portal') as HTMLDivElement
    );
};
