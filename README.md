### Financial Fitness 

<hr />


This is an application built to demonstrate our idea at Capital One Dev Exchange Hackathon 2017 - Denver, CO
<br />

#### Description
Empowering adults (and kids!) to budget, manage and set financial goals, and track credit card rewards. 


#### Problem definition
We all know we should budget, but let's face it, it's not easy. While there's many platforms available for budgeting and money management, they are only available via mobile or web application and after staring at a computer screen all day, the last thing anyone wants to do when they come home from work? Get on a computer. As consumers, we were looking for a solution:
- Multiple integrations: Desktop, Mobile [Responsive Design], Alexa Skill. Ability to track on the go, as well as at home
- Security: Building an even deeper layer of security, with a voice biometric, Given the type of security breaches on IOT devices, as consumers, felt this feature was critical.
- Record budget goals, add/monitor goals, as well as track credit card reward points
- Incorporating some type of gamification into Alexa skill to enhance the user experience. 

#### How we solved it
- Created a web application, for our two different user stories. This gave us the customer path as well as experience. Using the GUI, we leveraged this to shape the Alexa experience. During this phase of development, we recognized an opportunity for an additional Alexa feature, supporting monetization opportunities for Capital One. When a user set a goal:  "Alexa add goal: buy Playstation 3". Alexa responds with adding this goal, and also can recommend where the best deal is for a Playstation 3. "There's a sale next month at Target..."
- Overlap: As mentioned above, from the customer perspective, we wanted to add in even more levels of security. We utilized the Capital One API and discussed other potential security enhancements. Sourcing a voice biometric, external API, when a user registers their account on the Web Application, they are prompted to say the phrase "Eventually Winter Turns into Spring" three times. They also set an additional 4 digit security code. These are used as additional security measures, given we are dealing with sensitive financial information. 
- Creating the Alexa experience using AWS Lambda and NodeJS. Users can set goals and check their reward points. Alexa gives suggestions based on goal priority and recommends where the best deals are.

Web app video: https://www.youtube.com/watch?v=MwBH9kJ8wN4&t=

Alexa skill video: https://www.youtube.com/watch?v=J6BbH4O5poo

#### The A - Team
- Stephanie
- Kendra Cooper
- Emily Hosoya
- Bhagyashree Borate
- Erin O'Neill
- Ajay Menon