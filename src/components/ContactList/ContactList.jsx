import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { selectContacts, selectNameFilter } from "../../redux/selectors";


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

 let filteredContacts = contacts;

 if (filter) {
   filteredContacts = contacts.filter((contact) =>
     contact.name.toLowerCase().includes(filter.toLowerCase())
   );
 }

  return (
    <>
      <ul className={css.cardList}>
        {filteredContacts.map((contact) => (
          <li className={css.card} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
