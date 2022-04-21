# User roles

The role that a registered user has been assigned determines the level of access to the system. 
Much of what a user can do is evaluated against an [organisation](../about-the-platform/multi-tenancy.md#organisations).

### ROOT

Root users have complete control over a Seraphin platform deployment. 
They can create new organisations, onboard new users, assign users to organisations
and inspect and act on data emitted by any sensor.

### PARTNER

Partners have similar access control to Root users but only to the extent of the 
organisations they have created themselves. Other organisations that are created by
the root users or other partners are not visible to them.

### CLIENT

Client users belong to one or more organisations and are able to excercise read and 
write access to all data assigned to the organisation they are a member of.

### USER

Users are allowed only read access to data received within the organisation they 
belong to.

