import * as mongoose from 'mongoose';

import { ModelSchema } from '@enums';
import { MongooseAttributes, UserAttributes } from '@shapes';

import { validateEmail } from '../../../utils';

const { Schema } = mongoose;

const UserSchema = new Schema<UserAttributes>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject: Partial<MongooseAttributes>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

UserSchema.path('username').validate(
  validateEmail,
  'The e-mail field cannot be empty.'
);

export const UserModel = mongoose.model(ModelSchema.User, UserSchema);
