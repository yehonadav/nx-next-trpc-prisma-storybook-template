# Testing Standards

focus on what's important, try to define the behaviors you expect to develop  
and write test cases that validate these behaviors before you write the code that implements them.  

- strive to have enough functional test coverage in every meaningful package if time constraints allows it,  
- until you feel confident that all of the important behaviors are tested.
- your testing framework will measure your coverage with
  - branches
  - functions
  - lines
  - statements  
- if your testing framework says you have a low coverage, consider adding more tests to cover more code lines.  

- use mocks when the cost of mocking is justified

- use utility functions to **make your test as readable as possible**

- when you find a defect:

  you can skip the test or set a warning message to handle the failure, but you must include a jira ticket that is open and is blocked by that failed test. you can only close the ticket once the defect is fixed, and then remove the warning/skip

- be **proactive** - try to catch defects as early as possible
  - in the planning phase try to think of problems we might be facing and raise them
  - map out the functionality and the requirements of the desired feature and write test cases in advance
  - incorporate good testing practices like the ones mentioned in the techniques & best practices section above
  - run tests locally to try and catch them before they leave the development phase
