const { User } = require('./mongo/models');
module.exports = {

    Query: {
        getOneUser: async (_, args) => await User.find(args).exec(),
        hello: () => 'Hello World Niga!',
        getUsers: async () => await User.find({}).exec(),
      
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let response = await User.create(args);
                return response;
            } catch (e) {
                return e.message;
            }
        }
    },

    //test2
};
