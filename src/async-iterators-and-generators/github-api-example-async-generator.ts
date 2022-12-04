import got from 'got';

const gitHubApiUrl = 'https://api.github.com';
const suburl = {
  commits: 'repos/${repo}/commits',
}

async function* fetchCommits(repo) {
  let url = `${gitHubApiUrl}/${suburl.commits.replace('${repo}', repo)}`;
  while (url) {
    const responsePromise: any = got.get(url);
    const jsonPromise: any = responsePromise.json();

    const [response, json] = await Promise.all([responsePromise, jsonPromise]);

    let nextPage = response.headers.link.match(/<(.*?)>; rel="next"/);
    url = nextPage?.[1];

    for(let commit of json) {
      yield commit;
    }
  }
}

(async () => {
  let i = 1;
  for await (let commit of fetchCommits('<username>/<repository>')) {
    console.log(i++, commit);
  }
})();