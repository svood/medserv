const { User } = require('./mongo/models');
module.exports = {

    Query: {
        getUsers: async () => await User.find({}).exec(),
        hello: () => "Hello Nigas",
        hello2: () => "Hello Zoya",
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
