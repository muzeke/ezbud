import * as mongoose from 'mongoose';

import { ModelSchema } from '@enums';
import { TransactionAttributes } from '@shapes';

const { Schema } = mongoose;

const TransactionSchema = new Schema<TransactionAttributes>({
  user: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.User,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.Category,
  },
  payee: {
    type: Schema.Types.String,
  },
  memo: {
    type: Schema.Types.String,
  },

  inflow: {
    type: Schema.Types.Number,
  },

  outflow: {
    type: Schema.Types.Number,
  },

  status: {
    type: Schema.Types.String,
  },

  date: {
    type: Schema.Types.Date,
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

TransactionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const TransactionModel = mongoose.model(
  ModelSchema.Transaction,
  TransactionSchema
);
