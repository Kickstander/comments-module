Kickstander
Project description: To rebuild another team's front-end website recreation and implement robust backend that is scalable.

Requirements
STEP 1: Dependencies
npm install
npm run start
npm run dev

STEP 2: Database
mongod
mondgo
npm run seedDB

STEP 3: Browser
'localhost:8081'

API Endpoints
| action    | method | endpoint                                 |
|-----------|--------|------------------------------------------|
| read(all) | get    | /projects/:projectId                     |
| read(one) | get    | /projects/:projectId/comments            |
| create    | post   | /projects/:projectId/comments            |
| update    | put    | /projects/:projectId/comments/:commentId |
| delete    | delete | /projects/:projectId/comments/:commentId |

Related Projects
https://github.com/Kickstander/rewards-module-svc
https://github.com/Kickstander/updates-service
https://github.com/Kickstander/funding-widget-svc

Contributors
Sarah Pickrahn
https://github.com/pickles27
Original module
https://github.com/FEC-Kickstand/comments-module
Original team's repository
https://github.com/FEC-Kickstand
