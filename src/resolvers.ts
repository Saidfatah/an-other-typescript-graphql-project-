import {ResolverMap} from './types/reolver' 
import {userRepository} from './repositories/UserRepository'
import {Date} from './customScalars'
// import {todoRepository} from './repositories/TodoRespository'
// import {todoListRepository} from './repositories/TodoListRepository'
// import {projectRepository} from './repositories/ProjectRepository'



export const resolvers:ResolverMap = {
    Query:{
        user: async(_parent,{id},_context,_info)=> {
           const user =await (await userRepository()).findOne(id)
           return user; 
        },
        users: async()=> {
           const users =await (await userRepository()).find({})
           return users; 
        },
      //   todoLists: async()=> {
      //      const todolists =await todoListRepository.find({})
      //      return todolists; 
      //   },
      //   todos: async()=> {
      //      const todos =await todoRepository.find({})
      //      return todos; 
      //   },
      //   projects: async()=> {
      //      const projects =await projectRepository.find({})
      //      return projects; 
      //   },
    },
    Mutation:{
        createUser:async(_,args)=>{
           console.log(args)
           
           return (await userRepository()).create({...args})
        },
        updateUser:async (_,{id,...args})=>{
           console.log(args)
           try {
            const user =await (await userRepository()).findOne(id)
            const updatedUser = await (await userRepository()).save(
               {
                  ...user,
                  ...args
               }
            );
            return updatedUser;
           } catch (error) {
              console.log(error)
           }
        },
        deleteUser:async (_,{id})=>{
           try {
            await (await userRepository()).remove(id)
            return true;
           } catch (error) {
              console.log(error)
              return false
           }
        },
    },
    Date
};