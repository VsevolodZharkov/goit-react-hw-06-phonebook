import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <Container title="Phone book">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};
