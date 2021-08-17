import { TEST } from './../constants/index';
import { action } from 'typesafe-actions';
import { test } from '../types';

export const testAction = (payload: test) => action(TEST, payload);

export const fetchItemsList = () => {
  return async (dispatch: Function, getState: Function) => {
    dispatch(testAction('testing...'));
    // const { kind, term, page } = getState().search;
    // const qUsers = `https://api.github.com/search/${kind}?q=${term}&per_page=100&page=${page}`;
    // const qRepos = `https://api.github.com/search/${kind}?q=${term}&per_page=100&page=${page}`;
    try {
      // const q = term === 'users' ? qUsers : qRepos;
      // const itemsListRes: AxiosResponse = await axios.get(q, {});
      // switch (kind) {
      //   case 'users':
      //     const filteredUsers = itemsListRes.data.items.map(
      //       (user: IGitHubUser) => user.url,
      //     );
      //     dispatch(fetchUsersList(filteredUsers));
      //     break;
      //   case 'repositories':
      //     const filteredRepos = itemsListRes.data.items.map(
      //       (repo: IGitHubRepo) => {
      //         const { name, html_url, stargazers_count, url } = repo;
      //         return {
      //           url,
      //           name,
      //           html_url,
      //           stargazers_count,
      //           owner: repo?.owner?.login,
      //         };
      //       },
      //     );
      //     dispatch(setReposList(filteredRepos));
      //     break;
      // }
      // dispatch(
      //   setitemsList(
      //     itemsListRes.data.items.map((item: any) => {
      //       const { name, html_url, location, stargazers_count, url } = item;
      //       return {
      //         url,
      //         name,
      //         html_url,
      //         location,
      //         stargazers_count,
      //         owner: item?.owner?.login,
      //       };
      //     }),
      //   ),
      // );
    } catch (err) {
      console.warn(`😢 ${err}`, 5);
    } finally {
      // dispatch(itemsListLoader(false));
    }
  };
};
