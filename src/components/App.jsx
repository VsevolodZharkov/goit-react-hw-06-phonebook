import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <>
      <Container title="Phone book">
				<ToastContainer />
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
