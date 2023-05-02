import HomepageSection from '@/components/homepage/HomepageSection';

export default function Contact() {
    return (
        <HomepageSection id="contact" heading="Contact" sectionBackgroundColor="bg-blue-300">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center">
                <p className="py-4 text-xl">
                    Want to work together? Know of any exciting opportunities I may be interested in? Maybe you just
                    want to say hello. No problem! Feel free to send me a message using the form below!
                </p>
                <div>
                    <form>
                        <input
                            id="name"
                            type="text"
                            // value={inputs.name}
                            // onChange={handleChange}
                            // className={styles.inputField}
                            placeholder="Name"
                            required
                        />
                        <input
                            id="email"
                            type="email"
                            // value={inputs.email}
                            // onChange={handleChange}
                            // className={styles.inputField}
                            placeholder="Email"
                            required
                        />
                        <textarea
                            id="message"
                            // type="text"
                            // value={inputs.message}
                            // onChange={handleChange}
                            // className={styles.inputField}
                            placeholder="Message"
                            // rows="5"
                            required
                        />
                        <input type="submit" />
                        {/* {form.state === 'loading' ? (
                            <div>Sending....</div>
                        ) : form.state === 'error' ? (
                            <div>{form.message}</div>
                        ) : (
                            form.state === 'success' && <div>Sent successfully</div>
                        )} */}
                    </form>
                </div>
            </div>
        </HomepageSection>
    );
}
