import { applySnapshot, getSnapshot, Instance, types } from "mobx-state-tree";
import store from "store";
import { languageStore, LanguageStore } from './language.store';
import { universitiesStore, UniversitiesStore } from './universities.store';

export const RootStore = types
  .model("RootStore", {
    language: LanguageStore,
    universities: UniversitiesStore,
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
  universities: universitiesStore,
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
