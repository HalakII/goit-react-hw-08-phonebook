import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import css from './Contacts/Contacts.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
const Home = () => {
  return (
    <div className={css.wrapper}>
      <FcTwoSmartphones className={css.icon} />
      <SectionTitle title="Phonebook Application" />
    </div>
  );
};

export default Home;
