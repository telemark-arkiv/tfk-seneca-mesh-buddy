# tfk-seneca-mesh-buddy
Microservice for [buddy-minelev-api](https://github.com/telemark/buddy-minelev-api)

## Messages handled
### ```role: buddy, get: student```
Gets  a student related to the user
```javascript
Seneca.act('role: buddy, get: student', {userId: 'userId', studentUserName: 'studentUserName'}, (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "get": "student", "userId": "zrrrzzt", "studentUserName":"maccyber"}' -v http://localhost:8000/act 
```

### ```role: buddy, list: contact-classes```
Lists all groups where user is contact teacher
```javascript
Seneca.act('role: buddy, list: contact-classes', {userId: 'userId'}, (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "list": "contact-classes", "userId": "zrrrzzt"}' -v http://localhost:8000/act 
```

### ```role: buddy, list: contact-teachers```
Lists all contact teachers for a given student
```javascript
Seneca.act('role: buddy, list: contact-teachers', {studentUserName: 'studentUserName'}, (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "list": "contact-teachers", "studentUserName":"maccyber"}' -v http://localhost:8000/act 
```

### ```role: buddy, list: teachers```
Lists all teachers in Buddy
```javascript
Seneca.act('role: buddy, list: teachers', (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "list": "teachers"}' -v http://localhost:8000/act 
```

### ```role: buddy, list: students```
Lists all students in a group
```javascript
Seneca.act('role: buddy, list: students', {groupId: 'groupId'}, (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "list": "students", "groupId": "TenkeHætta"}' -v http://localhost:8000/act 
```

### ```role: buddy, search: students```
Search all students for a given user
```javascript
Seneca.act('role: buddy, search: students', {userId: 'userId', query: 'query'}, (error, data) => {})
```
```sh
$ curl -d '{"role": "buddy", "search": "students", "userId": "zrrrzzt", "query":"Jonas"}' -v http://localhost:8000/act 
```

## Messages emitted
This service does not emit any messages

## License
[MIT](LICENSE)
