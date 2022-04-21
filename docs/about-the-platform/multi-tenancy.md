# Multi tenancy 

A tenant on Seraphin platform is represented by an Organisation. 
Every client onborded onto the system is assigned to an organisation. 


## Organisations

An Organisation is a container for all sensors and data collected on behalf of a client.
An owner of an organisation has the complete view and control over all data associated with an organisation.
Any sensor activated on the Seraphin Platform will always be associated with some organisation. A sensor can belong
to only one organisation. 

All access permissions are evaluated against organisations. 
Therefore a user who is associated with one organisation will never be able to see or 
act on data that belongs to a different organisation.