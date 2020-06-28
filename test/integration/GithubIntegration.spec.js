import { expect } from "chai";
import nock from 'nock';
import { 
    FIND_USER_RESPONSE,
    FIND_REPOSITORIES,
    FIND_STARRED_REPOSITORIES,
} from '../factory/github/GithubFactory';
import { GITHUB_URL } from '../../src/constants/GithubConstants';
import GithubIntegration from '../../src/integration/GithubIntegration';

describe("Github Integration", () => {

    afterEach(() => {
        nock.cleanAll();
    });
    
    it("should return a user", async () => {
        const data = FIND_USER_RESPONSE();
        nock(GITHUB_URL)
              .get(`/${data.login}`)
              .reply(200, data, { 'Content-Type': 'application/json' })
        const { data: user } = await GithubIntegration.findUser(data.login);
        expect(user).to.have.property('login').and.not.be.undefined;
        expect(user).to.have.property('bio').and.not.be.undefined;
        expect(user).to.have.property('avatar_url').and.not.be.undefined;
    });

    it("should return list of repos", async () => {
        const { url, data: repositories } = FIND_REPOSITORIES();
        const context = url.replace(GITHUB_URL, '').concat('/repos');
        nock(GITHUB_URL)
              .get(context)
              .reply(200, repositories, { 'Content-Type': 'application/json' })
        const { data: result } = await GithubIntegration.findRepos(url);
        const repo = result[0];
        expect(repo).to.have.property('full_name').and.not.be.undefined;
        expect(repo).to.have.property('private').and.not.be.undefined;
        expect(repo).to.have.property('description').and.not.be.undefined;
        expect(repo).to.have.property('html_url').and.not.be.undefined;
    });

    it("should return list of starred repos", async () => {
        const { url, data: repositories } = FIND_STARRED_REPOSITORIES();
        const context = url.replace(GITHUB_URL, '').concat('/starred');
        nock(GITHUB_URL)
              .get(context)
              .reply(200, repositories, { 'Content-Type': 'application/json' })
        const { data: result } = await GithubIntegration.findStarredRepos(url);
        const repo = result[0];
        expect(repo).to.have.property('full_name').and.not.be.undefined;
        expect(repo).to.have.property('private').and.not.be.undefined;
        expect(repo).to.have.property('description').and.not.be.undefined;
        expect(repo).to.have.property('html_url').and.not.be.undefined;
    });
});