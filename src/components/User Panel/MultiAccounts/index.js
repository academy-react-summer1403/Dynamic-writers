import { getItem } from "../../../core/services/common/storage";

const accounts = [
  { id: 1, username: "user1", token: "token1" },
  { id: 2, username: "user2", token: "token2" },
]


const addAccount = (newAccount) => {
  if (!accounts.some(account => account.id === newAccount.id)) {
    accounts.push(newAccount);
    activeAccountId = newAccount.id;
  }
}

const removeAccount = (accountId) => {
  accounts = accounts.filter(account => account.id !== accountId);
  if (activeAccountId === accountId) {
    activeAccountId = accounts.length > 0 ? accounts[0].id : null;
  }
}


const switchAccount = (accountId) => {
  if (accounts.some(account => account.id === accountId)) {
    activeAccountId = accountId;
  }
}


const getActiveAccount = () => {
  return accounts.find(account => account.id === activeAccountId) || null;
}

export {accounts, addAccount, removeAccount, activeAccountId, switchAccount, getActiveAccount}
