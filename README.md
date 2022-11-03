

# Simple API

1. These are the endpoints you can use:



    1. : 
    
        | HTTP Method | Endpoint                 | Expected Response   | Headers             | Body      | Json Example |
        |-------------|--------------------------|---------------------|---------------------|-----------|--------------|
        | GET         | `api/v1/auth/google`     | Google Login page   | none                | none      |--------------|
        | POST        | `api/v1/tasks`           | New created task    | Content-Type, Cookie | Text, Date | {'UserId': 'dad7efd0-944c-4614-9...65de602423', 'Text': 'ae6eee625f', 'Done': False, 'Date': '2005-03-01T00:00:00.000Z', '_id': '624c87b56cbbcbc9553ece02', '__v': 0} |
        | GET         | `api/v1/tasks`           | List of tasks       | Cookie              | none      | {'UserId' 'somestring' } |
        | GET         | `api/v1/tasks/[task_id]` | Single task         | Cookie              | none      | {'UserId': 'dad7efd0-944c-4614-9...65de602423', 'Text': 'ae6eee625f', 'Done': False, 'Date': '2005-03-01T00:00:00.000Z', '_id': '624c87b56cbbcbc9553ece02', '__v': 0} |
        | PUT         | `api/v1/tasks/[task_id]` | Updated task        | Content-Type, Cookie | Done      | {'UserId: 'somestring', _id: 'id for the task', Done: 'False' } |
        | DELETE      | `api/v1/tasks/[task_id]` | Confirm delete task | Cookie              | none      | {'UserId: 'somestring', _id: 'id for the task' } |
        | GET         | `api/v1/user`            | Logged in user info | Cookie              | none      | {'UserId: 'somestring'} |
   

Using these you can do all of the standard CRUD operations with these endpoints
