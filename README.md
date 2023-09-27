                                                                           TODO APP WITH REACT JS
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. npx install create-react-app appname
2. UI DESCRIPTION:
3. ---------------------------
4.   COMPONENTS:
5.   ---------------------
6.   All UI is divided into two parts: left and right block
7.       1. Header : stores the app heading with an animation
8.       2. Input  : Present in left block for all inputs- adding todo, filtering based on criteria, deleting all completed tasks and completing all the tasks filters
9.       3. Todos  : Fetching the todos from jsonplaceholder api, and passing single todo to the Todo component
10.      4. Todo  :  contains the UI for individual Todos, also contains the edit , delete button and check button
11.      5. Context : alll the state properties are stored here

12.  * Edit button: sends a PUT request to the server and updates the todo
     * Delete buttons: sends a DELETE request to the api
