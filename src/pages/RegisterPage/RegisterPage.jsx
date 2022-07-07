import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Form, Label, Input, Button } from 'components/ContactForm/ContactForm.styled';
import { Container, Title } from 'pages/ContactsPage/ContactsPage.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Registration</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input name="name" onChange={handleChange} value={name} type="text"></Input>
        </Label>
        <Label>
          Email
          <Input name="email" onChange={handleChange} value={email} type="email"></Input>
        </Label>
        <Label>
          Password
          <Input name="password" onChange={handleChange} value={password} type="password"></Input>
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
