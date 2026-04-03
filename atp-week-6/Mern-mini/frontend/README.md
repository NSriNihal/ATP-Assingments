# to solve the problem of prop drilling we have to use state management tools
 # stat management
     sharing state + keeping state sync accross app

          context API ---->small apps 
              - create context object(pipeline)
              - Add state to context object(add water to pipeline)
              -set this context provider to a parent component(water flows to all children)
                - consume context from any child component(water is used by children)
          Redux/Zustand -------->large apps(Advanced statemanagement librararies)


# Isssues with context
 - contect with useState hook is a best and simple state management mechanism for small applications .but it creates unessasRY
   RE-rendring issues when multiple state is part of a context
    - to overcome this unnessesary re rendering issuue create multiple contrexts and make sure each component has a single state
    - When the appliation size is huge then maintanence of multiple contexts becomes difficult and complex. for such large applications advanced state management libraries like redux or zustand can be used 

# Advanced state management with ZUSTAND
