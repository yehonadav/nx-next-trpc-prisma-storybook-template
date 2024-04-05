# Security Considerations

Security measurements are crucial in all aspects of any system, especially when coding.

That being said, if we are honest; most developers are not security experts.

That’s why **most** of the **security concerns should be handled in middlewares and infra layers** of the application.

This approach would load off most of the heavy security concerns and leave **developers** to **focus on business logic**, which is what they are meant to work on for the most part.

Still, there are things we need to consider for security when writing code.

Here’s a list, feel free to add more points:

- authentication
- authorization
- privacy & terms
- encryption & decryption
- validation
- injection attacks

I won’t get into details of each point unless you ask me to ;)

but I will give you my way of thinking as to how I hit these points when I code.

### Code is always executed by an authority

**If that authority is the system**

**example**: a scheduled lambda is updating the open search database

- the system does not need authentication for itself.
- the system is authorized to do any action unless it violates its terms of use or the action violates some privacy conditions
- does the action involve private data like saving email/phone number/name/etc.? - if the action impacts privacy, the system needs permission from the user to perform the action (agree to terms & conditions)
- does the action involves data that authenticates/authorizes users? or is the data very sensitive? then the data should be encrypted. (e.g. salted passwords / JWT Authorization header)
- does the action involves user input? is it validated?
  - can the input harm the system? is the system protected by such input?

the example above does not relate to all the points

so let’s talk about other authorities:

**If the authority is a user in the system**

other examples to consider are user **sign up,** **login, comment**

- the user needs to be authenticated by the system (with JWT token and the userId for example).
- the user must be authorized to perform the action by the affected user unless it’s on themselves
- does the action involves private data like saving email/phone number/name/etc.? - if the action impacts privacy, the user needs permission from the owner to perform the action unless it’s on themselves
- does the action involves data that authenticates users? then/authorizes users? or is the data very sensitive? then the data should be encrypted. (e.g. salted passwords / JWT Authorization header) and maybe we would also add stateful authentication here.
- does the action involves user input? is it validated?
  - can the input harm the system? is the system protected by such input?
