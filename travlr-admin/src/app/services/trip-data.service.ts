import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { BROWSER_STORAGE } from "../storage";
import { AuthResponse } from '../models/auth-response';
import { Trip } from '../models/trip';
import { User } from '../models/User';

@Injectable()
export class TripDataService {
  constructor(
    private httpClient: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public async getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return await lastValueFrom(
      this.httpClient
        .get<Trip[]>(`${this.apiBaseUrl}/trips`)
    ).catch(this.handleError);
  }

  public async getTrip(tripCode: string): Promise<Trip[]> {
    console.log(`Inside TripDataService#getTrip('${tripCode}')`);
    return await lastValueFrom(
      this.httpClient
        .get<Trip[]>(`${this.apiBaseUrl}/trips/${tripCode}`)
    ).catch(this.handleError);
  }

  public async addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return await lastValueFrom(
      this.httpClient
        .post<Trip[]>(`${this.apiBaseUrl}/trips`, formData)
    ).catch(this.handleError);
  }

  public async updateTrip(formData: Trip): Promise<Trip[]> {
    console.log(`Inside TripDataService#updateTrip('${formData.code}')`);
    return await lastValueFrom(
      this.httpClient
        .put<Trip[]>(`${this.apiBaseUrl}/trips/${formData.code}`, formData)
    ).catch(this.handleError);
  }

  public async deleteTrip(tripCode: string): Promise<any> {
    console.log(`Inside TripDataService#deleteTrip('${tripCode}')`);
    return await lastValueFrom(
      this.httpClient
        .delete(`${this.apiBaseUrl}/trips/${tripCode}`)
    ).catch(this.handleError);
  }

  public login(User: User): Promise<AuthResponse> {
    console.log('Inside TripDataService#login');
    return this.makeAuthApiCall('login', User);
  }

  public register(User: User): Promise<AuthResponse> {
    console.log('Inside TripDataService#register');
    return this.makeAuthApiCall('register', User);
  }

  private async makeAuthApiCall(urlPath: string, User: User): Promise<AuthResponse> {
    console.log(`Inside TripDataService#makeAuthApiCall('${urlPath}')`);
    return await lastValueFrom(
      this.httpClient
        .post<AuthResponse>(`${this.apiBaseUrl}/${urlPath}`, User)
    ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}