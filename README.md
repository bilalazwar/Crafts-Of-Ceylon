
# Crafts Of Ceylon

A web application that was designed to bridge the gap between local Sri Lankan artisans and their customers.

## Functionality

Allows artisans to showcase their products and allow customers to purchanse their handcrafts online.

## Technology

- FRONT-END - React.
- BACK-END - Spring Boot.
- Database - MySQL.

| ![Image description 1](https://img.icons8.com/?size=100&id=90519&format=png&color=000000) | ![Image description 2](https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000) | ![Image description 3](https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000) |
|---|---|---|

## Initial Plan & Development

Initially I was responsible for developing the **FRONT-END** Only.
| Group Members | Role | Link |
| ------ | ------ | ------ |
| Bilal Azwar | FRONT-END | [Craft-Of-Ceylon front-end](https://github.com/BilalHamza7/Crafts-Of-Ceylonzip) |
| Saabique Sahdoon | UI/UX Design |  [Figma mockup](https://www.figma.com/proto/3XGoe4E6nEse1CcRyfJTtH?node-id=0-1&t=d1QZR89nw2pySWlF-6)|
| Bilal Hamza | BACK-END |  [customer-service](https://github.com/BilalHamza7/customer), [seller-service](https://github.com/BilalHamza7/employee)|


## Improvements-Back-End


After the initial development and the submission of the project, I identified some areas for improvement in the BACK-END and did the changes.

## Previous-Back-End
These are the initial developed plans before the improvements

| ER Diagram | BACK-END Design |
|---|---|
| ![ER Diagram](images/OldEr.png) | ![Back-End Design](images/oldBackEnd.png) |


## Improved-Back-End

| ER Diagram | BACK-END Design |
|---|---|
| ![Back-End Design](images/newER.png) | ![ER Diagram](images/backEnd.png) |

- Initially had only 2 back-end services.
- Added API-Gateway, Auth-Service and Service-Registry services into this microservice architecture.
- Implemented Spring Security.
- Initially didn't having mappings between entities.
- Added Swagger Api-Documentation.


