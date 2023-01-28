import styled from "styled-components";

const Contact = () => {

    const Heading = styled.h1`
    font-size: 2.5em;
    font-family: Georgia;
    color: #303c6c;
    text-decoration: underline;
    text-align: center;
`

const FormHeading = styled.label`
    font-size: 1em;
    font-family: Georgia;
    font-weight: bold;
    color: #303c6c;
    padding-top: 1em;
`

const InputTextButton = styled.input`
    font-size: .9em;
    font-family: Georgia;
    color: #303c6c;
    width: 20%;
`

const FormLayout = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
`

const TextBoxArea = styled.textarea`
    height: 150px;
`

const InputFields = styled.input`
    padding-bottom: 2em;
`

  return (
    // <form ref={form} onSubmit={sendEmail}>
    <>
    <Heading>CONTACT</Heading>
    <FormLayout>
        <FormHeading>NAME: </FormHeading>
        <input type="text" name="user_name"/>
        <FormHeading>EMAIL: </FormHeading>
        <input type="email" name="user_email"/>
        <FormHeading>MESSAGE: </FormHeading>
        <TextBoxArea name="message" />
        <InputTextButton type="submit" value="Send"/>
    </FormLayout>
    </>
  );
};

export default Contact