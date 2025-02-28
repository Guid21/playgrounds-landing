import { BestChoicePlaygrounds } from './components/BestChoicePlaygrounds';
import { ContactForm } from './components/ContactForm';
import { Contacts } from './components/Contacts/Contacts';
import { Hero } from './components/Hero';
import { OurPartners } from './components/OurPartners';

export default async function Page() {
  return (
    <>
      <Hero />
      <OurPartners />
      <BestChoicePlaygrounds />
      <ContactForm />
      <Contacts />
    </>
  );
}
