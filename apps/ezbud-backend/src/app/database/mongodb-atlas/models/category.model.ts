import * as mongoose from 'mongoose';
import { CategoryAttributes } from '@shapes';
import { ModelSchema } from '@enums';

const { Schema } = mongoose;

const CategorySchema = new Schema<CategoryAttributes>({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.User,
    required: true,
  },
  categoryGroup: {
    type: Schema.Types.ObjectId,
    ref: ModelSchema.CategoryGroup,
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

CategorySchema.index({ name: 1, user: 1, categoryGroup: 1 }, { unique: true });

CategorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const CategoryModel = mongoose.model(
  ModelSchema.Category,
  CategorySchema
);
