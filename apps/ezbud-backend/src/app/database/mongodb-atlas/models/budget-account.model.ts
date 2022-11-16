import * as mongoose from 'mongoose';

import { ModelSchema } from '@enums';
import { BudgetAccountAttributes } from '@shapes';

const { Schema } = mongoose;

const BudgetAccountSchema = new Schema<BudgetAccountAttributes>({
  user: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.User,
    required: true,
  },

  name: {
    type: Schema.Types.String,
    required: true,
  },

  balance: {
    type: Schema.Types.Number,
  },

  currency: {
    type: Schema.Types.String,
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

BudgetAccountSchema.index({ name: 1, user: 1 }, { unique: true });

BudgetAccountSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const BudgetAccountModel = mongoose.model(
  ModelSchema.BudgetAccount,
  BudgetAccountSchema
);
