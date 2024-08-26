# cs465-fullstack
This repository contains the code for the SNHU CS 465 Travlr project.


Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

This project used a MEAN stack (Mongo, Express, Angular, Node) to build out all needed components for a comprehensive application. The HTML/CSS front end was supported by a MongoDB database to store all the trip information. Mongo was used because it can scale easily and query quickly and the documents stored in Mongo have similar JSON formatting that helps it mesh well with our front end. Express and Javascriot was used to display the pages on the front end via the routes and controllers that handled browser requests. The express components would retrieve the stack HTML pages or generage the requested assets via handlears templates with data from the back end. Angular would render the entire SPA on the initial load and then all the requests would be loaded client side unless data was needed from the back end. 

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a specification language for how to format data and can be used on multiple programming languages and Javascript uses JSON to define lobjects. The front and back end of this application are connected via an API and JSON that receive requests and send responses. During the devlopment of this project I refactored multiple code blocks from static HTML to handlebars that allowed pages to load component blocks without having to recode the displayed content. 

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

I used common methods like GET, POST. PUT, and DELETE in how my client connected with the server using these HTTP actions. My application used JWT for user authentication and token generation to make sure no bad actors could access the application.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me grow as a developer and gain valuable practice in writing a comprehensive full stack application from start to finish that will help me stand out from other candidates even if I don't intend to become a fullstack devoloper, these skills apply to many different areas of software development.
