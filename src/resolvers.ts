import {ResolverMap} from './types/reolver' 
import {User} from './entity/User'
import {Project} from './entity/Project'
import {TodoList} from './entity/TodoList'
import {Todo} from './entity/Todo'

export const resolvers:ResolverMap = {
    Query:{
        user: async(_parent,{id},context,info)=> {
           const user =await User.findOne(id)
           return user; 
        },
        users: async()=> {
           const users =await User.find({})
           return users; 
        },
        todoLists: async()=> {
           const todolists =await TodoList.find({})
           return todolists; 
        },
        todos: async()=> {
           const todos =await Todo.find({})
           return todos; 
        },
        projects: async()=> {
           const projects =await Project.find({})
           return projects; 
        },
    },
    Mutation:{
        createUser:()=>{

        }
    }
};