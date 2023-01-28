const Contact = () => {

  return (
    // <form ref={form} onSubmit={sendEmail}>
    <>
    <h1>CONTACT</h1>
    <form>
        <label>Name: </label>
        <input type="text" name="user_name"/>
        <label>Email: </label>
        <input type="email" name="user_email" />
        <label>Message: </label>
        <textarea name="message" />
        <input type="submit" value="Send"/>
    </form>
    </>
  );
};

export default Contact