import { SNEAKERS_SHOP } from "../configs";

export const clearLocalStorage = () => {
  const sneakers_shop = {
    _id: null,
    cart : []
  }
  localStorage.setItem(SNEAKERS_SHOP, JSON.stringify(sneakers_shop));
}

if (!localStorage.getItem(SNEAKERS_SHOP)) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem(SNEAKERS_SHOP));

  if (!localObject) {
    return null;
  }

  return localObject[name];
}

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem(SNEAKERS_SHOP));
  localObject[name] = item;
  localStorage.setItem(SNEAKERS_SHOP, JSON.stringify(localObject));
}