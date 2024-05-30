# identity-reconciliation

Bitespeed Backend Task: Identity Reconciliation.

Cases

1. Both mobile and email are unique
   - Create a new primary contact
   - Send the primary contact details
2. Mobile is unique and email is not
   - Create a new secondary contact with linkedId is the existing primary contact for that contact.
   - Send the primary contact of existing details with new secondary contact apended.
3. Email is unique and mobile is not
   - Create a new secondary contact with linkedId is the existing primary contact for that contact.
   - Send the primary contact of existing details with new secondary contact apended.
4. Both mobile and email exist
   1. on same contact
      - Send the primary contact of existing with details with new secondary contact apended.
   2. on different contacts
      1. one of them is primary
         - Make the primary contact linked to all secondary contact.
         - Send the primary contact details.
      2. none of them is primary. i.e both are secondary
         - take the primary which was created first and link the other secondary contact to it.
         - Send the primary contact details
      3. both of them are primary
         - take the primary which was created first and link the other primary contact to it as secondary.
         - Send the primary contact details
