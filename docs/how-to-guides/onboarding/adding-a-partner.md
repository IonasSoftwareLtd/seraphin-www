Ensure logged in as Root

Scenario: 
    As ROOT user I would like to add a new partner to the platform who will be 
    permitted to create new clients, onboard new users and assign sensors between clients.

1. Ask the user to register on the platform
    - Go to Admin -> Users and confirm the new user is showing

2. Create a new organization - this will become the partner's default organisation
    - Go to Admin -> Organisations and select 'Create a new organisation'
    - Fill in the form and submit, log out and log back in
    - Confirm you can see the new organisation when you log back in

3. Make the new user the owner of the new organisation
    - Go to Admin -> Users
    - Find the user you want to make the partner, select '+ Add Client Claim' and select the newly created organisation, confrim the choice

4. Assign to the organisation any sensors you want the new partner to manage
    - Select the organisation that has the sensors you want to assign to the new organisation and select 'Sensors'
    - Select the sensor you want to re-assign click on 'Client' - a dropdown will appear, select the new organisation from the dropdown

5. The new user should now be able to see the new organisation he has been made the owner of, and see the new sensor
    - Ask the user to ensure he has logged out and then logged back in
    - You may need to advise the user to wait until the sensor sends some data