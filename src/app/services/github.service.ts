import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser = (userName: string) => {
    return this.http.get(`https://api.github.com/users/${userName}`);
  };

  getRepos = (repoUrl) => {
    return this.http.get(repoUrl);
  };
}
