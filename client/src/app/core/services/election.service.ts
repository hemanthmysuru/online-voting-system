import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ICurrentElection, IUpcomingElection } from '../models/election.model';

@Injectable({
  providedIn: 'root',
})
export class ElectionService {
  private http = inject(HttpClient);
  private BASE_URL = environment.baseUrl;
  private ENDPOINTS = environment.endpoints;

  get token(): string | null {
    return localStorage.getItem('jwt_token');
  }

  get hasVoted(): boolean {
    return localStorage.getItem('hasVoted') === 'true';
  }

  setVoted() {
    localStorage.setItem('hasVoted', 'true');
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  register(user: { name: string; email: string; password: string }) {
    return this.http.post(`${this.BASE_URL}${this.ENDPOINTS.register}`, user);
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>(`${this.BASE_URL}${this.ENDPOINTS.login}`, credentials);
  }

  getUpcomingElections() {
    return this.http.get<IUpcomingElection[]>(`${this.BASE_URL}${this.ENDPOINTS.upcomingElections}`);
  }

  getCurrentElection() {
    return this.http.get<ICurrentElection>(`${this.BASE_URL}${this.ENDPOINTS.currentElection}`);
  }

  castVote(electionId: number, candidateId: number) {
    return this.http.post<{ success: boolean }>(
      `${this.BASE_URL}/elections/vote`,
      { electionId, candidateId },
      { headers: this.getAuthHeaders() }
    );
  }

  logout() {
    return this.http.post(`${this.BASE_URL}${this.ENDPOINTS.logout}`, {});
  }
}
