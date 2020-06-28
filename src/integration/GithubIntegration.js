import axios from 'axios';
import { GITHUB_URL } from '../constants/GithubConstants';

const findUser = (username) => axios.get(`${GITHUB_URL}/${username}`);
const findRepos = (url) => axios.get(`${url}/repos`);
const findStarredRepos = (url) => axios.get(`${url}/starred`);

export default {
    findUser,
    findRepos,
    findStarredRepos,
}