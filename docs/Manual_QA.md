# Manual QA 

## What is QA?

https://www.udemy.com/home/my-courses/learning/

1)first class

QA is a process of investigation and verification in order to provide to the stakeholders the needed info about the quality of the software or service.

history - bullet testing in WWII

GOAL: find bugs errors and diffracts ASAP before the product is released to the clients

QA provides a Business with an Objective independent view of the product and allows the business to make smart decisions

## what QA testers actually do?

- Analyse system requirements
- write test documentation(3 main documents types stp stp sdr)
- attend meetings
- Test the product/software
- Find bugs to improve product/software quality
- quality pillar

## The 7 testing principes

defined and established by the ISTQB, the core of testing, help achieve high standard of quality

**1) Testing shows the presence of defects, not their absence** - testing shows the presence of defects, testing helps reduce the number of undiscovered defects, testing is not a proof that the sofware is 100% issue-free

**2) Exhaustive testing is Impossible** - we can’t test everything, QA should perform risk assessment and plan their test, Business prioritizations helps in focusing on critical areas. Risk assessment helps in deciding how much testing is. enough

3**) Early testing saves time and money** - testing early is fundamentally crucial, provides early feedback, cheaper to solve issues early.

4) Defect clustering - certain components usually contain the highest amount of issues, often 80% of issues are due to 20% of the code, defect density can vary for a range of reasons, help concentrate testing on bug prone areas.

5**) Beware of the pesticide paradox** - repeating the same test won’t discover new defects, review, update ad add test cases

**6) testing is context dependent - testing depends on context, what we are testing affects the approach**

**7) Absence of errors fallacy -** defect free software is unusable if it does not fulfill the clients needs, execute tests to verify requirements

**purpose of testing: verifying product requirements, managing risk, identify when the product is ready**

## Testing pyramid

[practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)

provides feedback, helps achieve better quality

3 levels - Unit, integration, E2E

representing the relationship of the amount of tests per level (bottom has more testing then the top) it is a metaphor that group software testing into buckets of different types it gives us an idea on how many test we should have in any of this groups.

## Unit tests

A unit may be an individual function, method, procedure, module or object. most likely a single function call a single function with different parameters to ensure the correctness of the function

The goal: validate that each unit of the code performs as expected

- unit test will be implement by the devs during the devs phase. isolating section of the code to verify its correctness.
- Devs test suite will be made mostly of unit tests

## Integration Tests

The goal: expose defects in the interaction of software modules and integration with module or other applications

- integrated software modules are tested as a group
- Most of the applications will integrate with other parts
- Slower and Harder to write and execute then unit tests

integration testing can be done in two ways either by testing the integration of the entire stack of application connected or testing one integration point at the time using mocks and doubles (fake data to represent the applications connected to your app)instead of the apps this makes the integration test faster more independent and easier to understand these way

### E2E (ui test) end to end testing:

the Goal: to test from the user point of view simulating a real user scenario

longest and fragile because of communication with other system that can create bottlenecks

technique to test the entire software product from end to end making sure that the application flows behaves as expected

identify the product system dependencies make sure al integrated parts work together as expected

QA tester

- run various tests on softwares
- ensures products are ready for clients
- write QA documentation
- generate reports
- work with developers to correct issues

### software development lifecycle: Agile

## QA testing types and techniques:

make a plan and order by priority:

visibility: 
- chair 
- grass 
- clean

functionality:
 1) all the lights are working
 2) all the speakers are working


## test levels:

represent the different stages of testing throughout software development lifecycle

unit 👉integration👉System👉Acceptance

### unit testing:

what: individual units/ software components are tested

goal: Validate that each unit performs as designed and expected

by who: Developers inside the code

### Integration

what: individual units are combined and tested as a group

goal: Discover issues early on in. the interaction between integrated units

by who: QA team & developers

### System Testing

what: integrated and complete software is tested

goal: Verify that the system meets specified requirements

by who: QA team

### Acceptance Testing

what: software is tested for acceptability

goal: Determine whether a system satisfies the acceptance

by who: Costumers, Product team, Stakeholders

### Test types:

https://www.guru99.com/functional-testing.html  
https://www.softwaretestinghelp.com/guide-to-functional-testing/  
https://www.softwaretestinghelp.com/smoke-testing-and-sanity-testing-difference/  

- blackbox testing internal structure not known to the tester
- Whitebox testing internal structure known to the tester
- functional testing verifies each function or feature
- non-functional testing verifies non-functional aspects like performance usability reliability
- change related testing Testing initiated by modification to a component or system
- structural testing Testing the internal structure of a component or a system

Test techniques for functional testing

| Regression testing | Acceptance testing |
| --- | --- |
| sanity testing | Alpha testing |
| smoke testing | Beta testing |

### Performance testing links

https://owasp.org/  
https://qainsights.com/how-to-select-performance-testing-tool/  
https://w3af.org/  
https://www.w3.org/WAI/standards-guidelines/wcag/  
https://www.w3.org/WAI/ER/tools/  
https://www.youtube.com/watch?v=rWHvp7rUka8&list=PLyqga7AXMtPPuibxp1N0TdyDrKwP9H_jD&index=2  

### QA documentation:
- single source of documentation
- documentation of test artifacts
- Created before, during and after testing activities
- helps identify improvements and progress

SRS - software requirement specification Document

SRS stands for Software Requirements Specification. It is a document that describes in detail the requirements(functional and non-functional) and specifications for a software project and how they will be implemented valid and invalid inputs.

👇

QA test will be often based on this document

### STP SOFTWARE TEST PLAN (STP)

first document a QA should write when staring to work on a new project.

defines scope approach resources of intended test activities.
