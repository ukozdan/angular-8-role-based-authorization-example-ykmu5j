import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { DepartmentService } from "../_models/department-service";
import { MessageService } from "./message.service";

//Todo: fix messages

@Injectable({ providedIn: "root" })
export class DepartmentServiceService {
  private departmentServicesUrl = "api/department-services"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET departments services from the server */
  getDepartmentServices(): Observable<DepartmentService[]> {
    return this.http.get<DepartmentService[]>(this.departmentServicesUrl).pipe(
      tap(_ => this.log("fetched department services")),
      catchError(this.handleError<DepartmentService[]>("getDepartmentServices", []))
    );
  }

  /** GET department service by id. Return `undefined` when id not found */
  getDepartmentServiceNo404<Data>(id: number): Observable<DepartmentService> {
    const url = `${this.departmentServicesUrl}/?id=${id}`;
    return this.http.get<DepartmentService[]>(url).pipe(
      map(departmentServices => departmentServices[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} department service id=${id}`);
      }),
      catchError(this.handleError<DepartmentService>(`getDepartmentService id=${id}`))
    );
  }

  /** GET department service by id. Will 404 if id not found */
  getDepartmentService(id: number): Observable<DepartmentService> {
    const url = `${this.departmentServicesUrl}/${id}`;
    return this.http.get<DepartmentService>(url).pipe(
      tap(_ => this.log(`fetched department service id=${id}`)),
      catchError(this.handleError<DepartmentService>(`getDepartmentService id=${id}`))
    );
  }

  /* GET department services whose name contains search term */
  searchDepartmentServices(term: string): Observable<DepartmentService[]> {
    if (!term.trim()) {
      // if not search term, return empty department service array.
      return of([]);
    }
    return this.http.get<DepartmentService[]>(`${this.departmentServicesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found department services matching "${term}"`)),
      catchError(this.handleError<DepartmentService[]>("searchDepartmentServices", []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new department service to the server */
  addDepartmentService(departmentService: DepartmentService): Observable<DepartmentService> {
    return this.http.post<DepartmentService>(this.departmentServicesUrl, departmentService, this.httpOptions).pipe(
      tap((newDepartmentService: DepartmentService) => this.log(`added department service w/ id=${newDepartmentService.id}`)),
      catchError(this.handleError<DepartmentService>("addDepartmentService"))
    );
  }

  /** DELETE: delete the department service from the server */
  deleteDepartmentService(departmentService: DepartmentService | number): Observable<DepartmentService> {
    const id = typeof departmentService === "number" ? departmentService : departmentService.id;
    const url = `${this.departmentServicesUrl}/${id}`;

    return this.http.delete<DepartmentService>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department Service id=${id}`)),
      catchError(this.handleError<DepartmentService>("deleteDepartmentService"))
    );
  }

  /** PUT: update the department service on the server */
  updateDepartmentService(departmentService: DepartmentService): Observable<any> {
    return this.http.put(this.departmentServicesUrl, departmentService, this.httpOptions).pipe(
      tap(_ => this.log(`updated department service id=${departmentService.id}`)),
      catchError(this.handleError<any>("updateDepartmentService"))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DepartmentServiceService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DepartmentServiceService: ${message}`);
  }
}
