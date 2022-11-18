import { CreateBudgetAccount } from './create';

export const BudgetAccountController = () => {
  return {
    createbudgetAccount: () => {
      return CreateBudgetAccount();
    },
  };
};
