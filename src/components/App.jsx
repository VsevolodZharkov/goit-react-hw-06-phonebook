import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Container title="Phone book">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
