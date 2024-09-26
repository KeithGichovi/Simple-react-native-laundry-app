# Laundry-Bit

An alternative application to circuit laundry that provides a much better experience to the users. A proposed and intuitive user interface for the user to happily experience exceptional services.

## Prerequisites

The circuit laundry (at the time of this writing) has a rating of 1.1/5 stars in both the apple iOS and google App Store. Some of the common complaints include:

1. The users cannot save personal banking information onto the app.
2. There are no functionalities for having a look at previous transactions.
3. No access to in-app digital receipts for each transaction.
4. Users have to pay in a minimum of £5 in order to use the services.
5. Bad UI/UX.
6. No third-party authentication systems (Auth0, firebase, etc)


## What is the purpose of the app i want to build?

I want to provide better service to the users, with good UI/UX provided. This will be achieved by reducing cognitive load.

Create a good user story/flow from the point of installation to the end of the service. make it satisfactory.

I want to retain my users.

# The MVP (Minimal Viable Product)


## Requirements

1. Camera / QR Code scanner to scan laundry machine.
2. Storage for bank card information.
3. Good skeuomorphic design.
4. Transaction list.
5. Have a wash/cycle progression interface. this will be a list too.
6. Variety of user authentication. (Email/password, googleAuth, appleAuth)
7. Allow the application to handle payments through the stripe API

---

## Data Flow

1. User registers.
2. User logs in.
3. user has the option to either start a wash or to pay.
4. if user decides to wash, then the app checks if the user has sufficient funds to wash.
5. if not, then the user must pay to use machines.
6. the user can than pay for the washer/dryer.