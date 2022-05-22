# Multi tenancy 

A tenant on Seraphin platform is represented by an Organisation. 
Every client onborded onto the system is assigned to an organisation. 


## Organisations and user roles

An Organisation is a container for all sensors and data collected on behalf of a client.
Any sensor activated on the Seraphin Platform will always be associated with some organisation. A sensor can belong
to only one organisation.

All access permissions are evaluated against organisations. 
Therefore a user who is associated with one organisation will never be able to see or 
act on data that belongs to a different organisation.

Every [CLIENT](./user-roles.md#client) is associated with an organisation and has complete read and write permissions to all data within an organisation.
Clients may choose to associate other clients with their organisation if they wish to enter in a collaboration. 
Clients may also add [USER](./user-roles.md#user)s to their organisation if they wisth to allow read-only access to their data to other people.

 

