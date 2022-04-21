The user is logged in as a [PARTNER](../../about-the-platform/access-control.md#partner).

## Scenario
  As a partner I would like to create a new client and enable the client to see sensor data.


## Background
  As a partner you will be an owner of an organisation - this is your default organisation.
  Any new sensors added to the platform at your request will be initially assiged to your organisation.
  
  You may wish to onboard new users and clients and associate them with your either your default organisation
  or create new organisation for every client you add.

  Creating a new organisation for every client you add, will ensure the client can only see assets that
  are assigned to the organisation they belong to. This will allow you to excercise better control 
  over who is allowed to see what. Any new devices you onboard will be initially assigned to 
  your default organisation - from there you will be able to reassign them to the client organisations 
  as required.


1. Create a new organisation that the client will belong to
    - Go to Admin -> Organisations and select 'Create a new organisation'
    - Fill in the form and submit, log out and log back in
    - Confirm you can see the new organisation when you log back in

2. Provide the user with the client registration link
    - Go to Admin -> Organisations
    - Select the organisation you created earlier and click 'Edit'
    - Fill in the form - provide friendly welcome messages in 'User welcome' and 'Client welcome' fields.
      The text entered in 'Client welcome' is what the client will see when they log into the platform for the first time.
    - Copy the 'Client registration link', provide it to the person you with to onboard and ask them to use it to register on the platform

3. Confirm with the user:
    - they used the link you shared with them
    - they clicked on 'Create account' and filled in the form 
    - received the 'Confirmation code' to the email address they provided in the form
    - used the code on the registration page and managed to succcessfully log in
    - were presented with the 'Welcome' page after logging in and the page displayed the 'Acknowledge' button
    - Clicked the 'Acknowledge' button to acknowledge the invite to use the platform and were presented with the message
      simiar to 'Your acknowledgement has been received by <organisation name> - you will be granted access to the system shortly.' 

4. Accept the user as the client
    - visit the platform 
    - Go to Organisations -> <select the organisation> -> Users -> find the user you wish to add as a client and click 'APPROVE'
      The role of the user you are accepting as a client should be 'CLIENT' and once you have clicked on the 'APPROVE' button the status 
      will change to 'APPROVED'.

5. Assign sensors you want the new client to see
    - Click 'Organisations' and select your default organisation
    - Select 'Sensors' and select the sensor you with to assign to the new client
    - Click on 'Client' and select the name of the organisation that the new client has been assigned to
    - Go to 'Organisations', select client organisation, 'Sensors' and confirm you can see the sensor you just assigned.
      The sensor will no longer show under your default organisation.

6. Invite the user to see the data
    - Ask the user to log out and log back in
    - Confirm with the user they can see the organisation you assigned them to, and when they select 'Sensors' 
      they can see the sensor you assigned to their organisation
    - When the client selects the sensor they should be able to see the data the sensor has sent since it has been assigned to the client.