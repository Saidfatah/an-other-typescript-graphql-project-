export const resolvers = {
    Query:{
        // @ts-ignore
        Query: {
            books: () => [{
                title: 'title' ,
                author: "author",
            }],
        },
    },
    Mutation:{
         
    }
};