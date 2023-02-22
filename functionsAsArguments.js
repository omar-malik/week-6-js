const notifyByEmail = (email) => {
   return `Email sent to: ${email}`;
   }
const notifyByText = (phone) => {
   return `Text sent to: ${phone}`;
   }
const notify = (contact, notificationMethod) => {
   return notificationMethod(contact);
  }
  
  notify('hello@makers.tech.test', notifyByEmail);
  'Email sent to: hello@makers.tech.test'
  notify('+10000000000', notifyByText);
  'Text sent to: +10000000000'