import * as mongoose from 'mongoose';
import * as chalk from 'chalk';

export const mongoDbAtlas = () => {
  console.log('Connecting to MongoDB Atlas');
  const connect = async () => {
    const mongoDbAtlasURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.3mhmx.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
    try {
      await mongoose.connect(mongoDbAtlasURI, { autoIndex: true }, (error) => {
        if (error) {
          return console.error(
            chalk.red(`Cannot connect to MongoDbAtlas`, error)
          );
        }

        console.log(chalk.green(`Connected to MongoDBAtlas`));
      });
    } catch (error) {
      console.error(
        chalk.red(
          `An error occured while trying to connect to MongoDbAtlas`,
          error
        )
      );
      process.exit(1);
    }
  };

  const disconnect = () => {
    mongoose.connection.close();
  };

  return { connect, disconnect };
};
