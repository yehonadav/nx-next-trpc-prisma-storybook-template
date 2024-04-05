# Work Procedure

our work procedure follows an **incremental system design approach**
(we opt for 🚅speed🚀💥 and make design decisions accordingly).

we have 2 distinct type of tasks (**simple-tasks** & **complex-tasks**), each requires a different development approach, and these 2 approaches make up 2 ends of a spectrum for how well and detailed the design requirements are for any given task.

[Task Preparation](task_preparation.md) (mostly for product & team lead)  

in this guide I will define

- methods to distinct how much engineering and design is required for a given task
- what are the engineering components, and how to add them to the development cycle of the task.  


# Acronyms  
TEK -  thinking, engineering and knowledge transfer.  
BDD - behavior driven development  


# Simple-Tasks  
these are tasks that do not require much

**thinking**, **engineering** and **knowledge transfer** or TEK in short.

> these tasks also rely on a foundation of **complex-tasks** that laid down design decisions and building of infrastructure ground work *before hand*, and now they need simple expansion and enrichment.
>
- don’t be fooled, simple-tasks can take long and require a lot of effort. they are “simple” in the sense that they don’t require much thinking and preparation **before & after** development.  

## Examples
- adding an analytic event  
- changing logo size  
- adding a log message  
- updating an existing launcher design  
- fix text format  

by looking at the listed examples we can clearly see that all of them have common “simplicity patterns”:

- the task is very clear 👍🏻  
- there is only implementation details to consider (write code & go home) 🚀  
- there are no new decisions to make 🥱  
- all design decisions were already made prior to implementing the tasks 📝  
- CI strategy is still required (code review, QA, product acceptance, deployment scheduling) 😣  

Simple-Tasks can become more complex **during** development.  

- priorities/requirements can change in an agile environment during development  
- unthought/unseen issues come up during testing/development  

due to such issues, we need to consider **TEK** again and again every time something changes.  

- how to consider TEK will be expanded later.  


# Complex-Tasks

these tasks require varying degrees of thinking, design, **arguing**, research, documentation **before, during & after** development.

> these tasks rely on **new functionalities** and **behavioral changes** coming from product or technical requirements. these requirements will have technical **gaps** that would force **TEK** that would result is ground work design decisions & building of infrastructure *before the start of implementation*.
>
- complex-tasks are not limited to just the stated above: bugs/monitoring/troubleshooting/QA can also become “complex” once they require TEK.

## Examples

- creating a chrome extension ‣  
- monitor, accumulate & relay user data ‣  
- creating a new page ‣  
- creating testing infrastructure ‣  
- creating custom designs ‣  
- cloud cost reduction ‣ (Jira docs is lacking here!)  

by looking at the listed examples we can create a list of concerns:

- Technical details are ambiguous - many question marks
- Missing concerns that require attention
- Behavioral changes / new behaviors
- Complicated logic that is hard to understand and requires simplifications
- Requires scale/cost/speed/size/performance/stability considerations
- Third party libraries are required
- Type of storage needs to be determined
- State needs to be managed
- Communication between different services and APIs is required


# 📝 Work Procedure

- Determining the TEK level of a ticket

  The TEK is not on the scope of the ticket, but is in the scope of every requirement or assumption of the ticket. That’s why we must carefully **read**, converse and understand every requirement and assumption down to detail BEFORE moving to implementation.

  And when I say ‘we’ I don’t just talk about the owner of the ticket, all the members of the team need to have the same level of understanding before the owner proceeds to implementation.

  in order for this to work, you as the ticket owner MUST write your thoughts, implementation intentions and concerns beforehand in the form of **comment**s.

  - Read all of the ticket’s relevant info
  - Comment on the ticket
- Go over each requirement
  - If its painfully obvious what we need to do (**simple-task**) we can skip to **Implement**.
  - BDD - figure out ALL of the logical paths of the system and try to think of ways to break the system!
    - documentation - required
    - write test cases - optional
  - Go over the list of concerns and create subtasks as needed + time estimations!
    - are there ambiguous technical details / many question marks?
      - research - optional
      - documentation - required
      - conversing with team members - required
      - dev testing - optional
    - is it a new functionality or behavioral change?
      - research - optional
      - system design - required
      - documentation - required
      - conversing with team members - required
      - code design - required
      - DEV testing - required
      - QA testing - required
      - product acceptance - required
    - can we use feature flags to enable a safe deployment?

        <aside>
        ⚠️ consider this in your code design. when your feature can be turned on/off we can merge + deploy changes on all environments immediately! which saves a ton of time and unblocks merging of code

        </aside>

      - design appconfig data structure - optional
      - leave appconfig change instructions - required  
      - update appconfig on all environments - required (prod is updated after acceptance)
    - are there missing concerns that require attention?
      - comment on missed concerns - required
      - conversing with team product manager - required
      - update team members - required
      - update ticket/documentation - required
    - is there complicated logic that is hard to understand and requires simplifications?
      - research - optional
      - system design - required
      - documentation - required
      - conversing with team members - required
      - code design - required
      - DEV testing - required
      - QA testing - required
      - product acceptance - required
    - is there considerations for scale/cost/speed/size/performance/stability?
      - research - optional
      - system design - required
      - documentation - required
      - conversing with team members - required
      - code design - required
      - DEV testing - required
      - QA testing - required
      - product acceptance - required
    - Third party libraries are added/updated/removed/replaced?
      - conversing with team members - required (BEFORE the pull request!!!)
      - code design - optional
    - state management changes?
      - conversing with team members - required (BEFORE the pull request!!!)
      - code design - optional
    - storage is used / added / changed?
      - conversing with team members - required (BEFORE the pull request!!!)
      - code design - required
    - Communication between different services and APIs is required?
      - research - optional
      - system design - required
      - documentation - required
      - conversing with team members - required
      - code design - required
      - DEV testing - required
      - QA testing - required
      - product acceptance - required
- put a due date comment on the task
- Implement
  - create subtasks and assign accordingly
  - implement subtasks 1 by 1
  - open pull requests early so team members can finish faster and catch problems early
  - finish all requirements
  - DEV test it
  - make sure code review is done
- Test
  1. Deploy to dev/staging environments
  2. Move task to QA
  3. Fix bugs
  4. Move task to Acceptance:
    1. send a video or preferably do a short huddle with the product manager showing what’s done
    2. Re-iterate the work procedure for any acceptance updates
    3. wait until acceptance is done

- Deploy

    <aside>
    ⚠️ Do you require deployment of multiple apps/services? this will always lead to **DOWNTIME** and can even cause **race conditions** of invalid state and creation of **discrepancies**. - **Use appconfig** to **safely deploy** code and safely enable changes all at once. if there are still concerns, make sure to **consider** the **deployment order** (which app deploys first) and **schedule** your **deployment** to **when** the **apps** are **least used** to minimize the chance to run into problems

    </aside>

  1. Schedule deployment for production **(might require sync with multiple teams like customer-success / sales / whoever is affected by your feature)**
    1. Merge code
    2. Deploy code
    3. Deploy appconfig
  2. Prepare for feedback from production
    1. Fix bugs / discrepancies
    2. Rollback changes if needed
- Document
  - update documentation if needed
  - get team up to speed (knowledge transfer)
- If Tasks become more complex **during** development.

  simply re-iterate the work procedure for every

  - priorities/requirements changes
  - unthought/unseen issues during testing/development

# Useful Links

- Videos
  - https://www.youtube.com/watch?v=gXh0iUt4TXA (very good channel, not just this video)
  - https://www.youtube.com/watch?v=L7Ry-Fiij-M
- Links
  - https://www.geeksforgeeks.org/software-design-patterns/
- Books
  - [Clean-Code-Handbook-Software-Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) - [FREE Version](https://github.com/jnguyen095/clean-code/blob/master/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf)
  - [Design-Patterns-Object-Oriented-Addison-Wesley-Professional](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional/dp/0201633612) - [FREE Version](https://github.com/TushaarGVS/Design-Patterns-Mentorship/blob/master/Erich%20Gamma%2C%20Richard%20Helm%2C%20Ralph%20Johnson%2C%20John%20M.%20Vlissides-Design%20Patterns_%20Elements%20of%20Reusable%20Object-Oriented%20Software%20%20-Addison-Wesley%20Professional%20(1994).pdf)
  - [Patterns-Enterprise-Application-Architecture-Signature](https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Signature/dp/0321127420) - [FREE Version](https://github.com/jjcolumb/awesome-xaf/blob/master/Patterns%20of%20Enterprise%20Application%20Architecture%20-%20Martin%20Fowler.pdf)
  - [Enterprise-Integration-Patterns-Designing-Deploying](https://www.amazon.com/Enterprise-Integration-Patterns-Designing-Deploying/dp/0321200683) - [FREE Version](https://github.com/matrixchan/mybooks-1/blob/master/Enterprise%20Integration%20Patterns%20-%20Designing%2C%20Building%20And%20Deploying%20Messaging%20Solutions%20(2004).pdf)
  - [Code-Complete-Dv-Professional-Steve-Mcconnell](https://www.amazon.com/Code-Complete-Dv-Professional-Steve-Mcconnell/dp/0735619670) - [FREE Version](https://github.com/media-lib/prog_lib/blob/master/general/Steve%20McConnell%20-%20Code%20Complete%20(2nd%20edition).pdf)
