import * as mongoose from 'mongoose';
import { CategoryGroupAttributes } from '@shapes';
import { ModelSchema } from '@enums';

const { Schema } = mongoose;

const CategoryGroupSchema = new Schema<CategoryGroupAttributes>({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.User,
    required: true,
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

CategoryGroupSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

CategoryGroupSchema.index({ title: 1, user: 1 }, { unique: true });

export const CategoryGroupModel = mongoose.model(
  ModelSchema.CategoryGroup,
  CategoryGroupSchema
);
