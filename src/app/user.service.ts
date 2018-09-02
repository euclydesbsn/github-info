import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './models/user.model';
import { Repos } from './models/repos.model';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    // Listar dados do usuário
    getUser(username: string): Observable<User> {
        return this.http.get(`https://api.github.com/users/${username}`).pipe(map(response => response.json()));
    }

    // Listar repositórios do usuário
    getRepos(username: string): Observable<User> {
        return this.http.get(`https://api.github.com/users/${username}/repos`).pipe(map(response => response.json()));
    }
}