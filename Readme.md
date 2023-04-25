
Basic Api = 

1) i)Method:- POST;
   ii) Endpoint:- /api/register
   iii) Require Input :-
         a)  name: String,
         b)  email: String,
         c) password: String
   iv) Description:-
       This endpoint should allow users to register.
    v) Possible output:-
       a) user fisrt time register:-
          message = User Register  Successfully!;
          status code = 201;
       b) User already register:-
          message = A user with this Email already have!;
          status code = 201;
       c) not Provide All creadiantials:-
          message = Please Provide All the Creadiantials;
          status code = 500;
        
2)  i)Method:- POST;
   ii) Endpoint:- /api/login
   iii) Require Input :-
         a)  email: String,
         b) password: String
   iv) Description:-
         This endpoint should allow users to login.
    v) Possible output:-
       a) user login with correct information:-
          message = User login  Successfully!;
          Token = Josn Web Token;
          status code = 201;
       b) not Provide All creadiantials or wrong Crediantials:-
          message = Please Provide All the Creadiantials or wrong crediantials;
          status code = 500;


3) i)Method:- GET;
   ii) Endpoint:- /api/flights;
   iii) Description:-
         This endpoint should return a list of all available flights.
    v) Possible output:-
       a) user having token:-
          message = redirect to flights page ;
          status code = 200;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

4) i)Method:- GET;
   ii) Endpoint:- /api/flights/:id;
   iii) Description:-
        This endpoint should return the details of a specific flight identified by its ID.
    v) Possible output:-
       a) user having token:-
          message = redirect to flights page ;
          status code = 200;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

5)i)Method:- POST;
   ii) Endpoint:- /api/flights
   iii) Require Input :-
        a) airline: String,
        b) flightNo: String,
        c) departure: String,
        d) arrival: String,
        e) departureTime: Date,
        f) arrivalTime: Date,
        g) seats: Number,
        h) price: Number
   iv) Description:-
       This endpoint should allow users to add new flights to the system.
    v) Possible output:-
       a) user having token:-
          message = flight added successfully ;
          status code = 200;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

6)i)Method:- PUT/PATCH;
   ii) Endpoint:- /api/flights/:id
   iii) Require Input :-
        a) airline: String,
        b) flightNo: String,
        c) departure: String,
        d) arrival: String,
        e) departureTime: Date,
        f) arrivalTime: Date,
        g) seats: Number,
        h) price: Number
   iv) Description:-
        This endpoint should allow users to update the details of a specific flight identified by its ID.
    v) Possible output:-
       a) user having token:-
          message = flight of a id is updated ;
          status code = 204;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

7)i)Method:- DELETE;
   ii) Endpoint:- /api/flights/:id;
   iii) Description:-
        This endpoint should allow users to delete a specific flight identified by its ID.
   iv) Possible output:-
       a) user having token:-
          message = flight of a id is deleted ;
          status code = 202;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

8) i)Method:- POST;
   ii) Endpoint:- /api/booking
   iii) Require Input :-
         a)  user : { type: ObjectId, ref: 'User' },
	     b) flight : { type: ObjectId, ref: 'Flight' }
   iv) Description:-
        This endpoint should allow the user to book flights.
    v) Possible output:-
        a) user having token:-
          message = flight booked successfully ;
          status code = 201;
       b) user not having token:-
          message = Please Login again!
          status code = 500;

9)  i)Method:- GET;
   ii) Endpoint:- /api/booking
   iv) Description:-
        This point should list all the bookings so far with the user and flight details.
    v) Possible output:-
        a) user having token:-
          message = redirect to booking page ;
          status code = 201;
       b) user not having token:-
          message = Please Login again!
          status code = 500;
       