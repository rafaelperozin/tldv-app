import { applySnapshot, getSnapshot, Instance, types } from "mobx-state-tree";
import store from "store";
import { languageStore, LanguageStore } from './language.store';

export const RootStore = types
  .model("RootStore", {
    language: LanguageStore,
  })
  .actions((self) => {
    let initialState = {};
    return {
      afterCreate: () => {
        initialState = getSnapshot(self);
      },
      reset: () => {
        applySnapshot(self, initialState);
      },
    };
  });;

export type RootStoreType = Instance<typeof RootStore>;

export const createStore = () => RootStore.create({
  language: languageStore,
});

export const rootStore = createStore();

export const rootSnapshot = (desiredStore: keyof RootStoreType) => {
  return {
    saveInitialState() {
      const initialState = getSnapshot(rootStore[desiredStore]);
      store.set("initialState", JSON.stringify(initialState));
    },
    applyInitialState() {
      let initialState = store.get("initialState");
      if (initialState) {
        initialState = JSON.parse(initialState);
        applySnapshot(rootStore[desiredStore], initialState);
      }
    },
    reset(firstState: any) {
      applySnapshot(rootStore[desiredStore], firstState);
    },
  };
};
