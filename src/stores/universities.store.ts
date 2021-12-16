import { AxiosResponse } from 'axios';
import { cast, flow, Instance, types } from "mobx-state-tree";
import { apiConnect } from '../api/config';

export interface UniversitiesDto {
  "state-province": string | null;
  country: string;
  web_pages: string[];
  name: string;
  alpha_two_code: string;
  domains: string[];
}

export const UniversitiesStore = types
	.model("UniversitiesStore", {
    universitiesList: types.maybe(types.array(types.frozen<UniversitiesDto>())),
	})
	.actions(self => ({
    setUniversitiesList: (newList: UniversitiesDto[]) => self.universitiesList = cast(newList),
  }))
  .actions(self => ({
    fetchUniversities: flow(function* (country: string = 'United Kingdom') {
      country = country.replace(' ', '+');
      try {
        const {data}: AxiosResponse<UniversitiesDto[]> = yield apiConnect.get(`/search?country=${country}`);
        self.setUniversitiesList(data.slice(0, 12));
        // I'm getting just the first 12 not to bring unknown array size that could compromise the perforce 
        // or exceed the local Storage storage capacity.But this should be handled by the backend.
      } catch (error) {
        console.error('ERROR #287', error);
      }
    }),
  }));

export const universitiesStore = UniversitiesStore.create({});

export type UniversitiesStoreType = Instance<typeof UniversitiesStore>;
