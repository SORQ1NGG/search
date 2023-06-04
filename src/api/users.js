import { fetchGet } from '@/utils/helpers/xFetch.js';
import { URL } from '@/constants/api.js';

export class Users {
    static async getUsersList (search, perPage, repositories, order) {
        try {
            return await fetchGet(`${URL}search/users?q=${search}&per_page=${perPage}&sort=${repositories}&order=${order}`, {});
        } catch (e) {
            console.error(e.message);
        }
    }

    static async getUserRepos (user) {
        try {
            return await fetchGet(`${URL}users/${user}/repos`);
        } catch (e) {
            console.log(e.message);
        }
    }

    static async getUserFollowing (user) {
        try {
            return await fetchGet(`${URL}users/${user}/following`);
        } catch (e) {
            console.log(e.message);
        }
    }

    static async getUserFollowers (user) {
        try {
            return await fetchGet(`${URL}users/${user}/followers`);
        } catch (e) {
            console.log(e.message);
        }
    }

    // static async getUserData (user) {
    //     try {
    //         const urls = [
    //             `${URL}users/${user}/following`,
    //             `${URL}users/${user}/followers`,
    //             `${URL}users/${user}/repos`,
    //         ];
    //         const requests = urls.map(url => fetch(url));
    //         return Promise.all(requests)
    //             .then(responses => Promise.all(responses.map(r => r.json())));
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
}
