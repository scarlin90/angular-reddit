import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { State as AppState } from "./reducers/articles.reducer";
import * as ArticlesActions from "./actions/articles.actions";

import { Article } from "./models/article.model";

@Injectable({
  providedIn: "root"
})
export class AppStateService {
  constructor(private _store: Store<AppState>) {
    console.log("constructed");
  }

  getArticlesState(): Observable<any> {
    return this._store.select("articles");
  }

  upvoteArticle(article: Article): void {
    this._store.dispatch(new ArticlesActions.Upvote(article));
  }
}

// import { Injectable } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
//
// import {
//     State as PipelineIntelligenceProjectsState,
//     getRecentProjectsQuery,
//     getProjectsQuery,
//     getCurrentProjectQuery
// } from './index';
// import { State as RecentProjectsState } from './reducers/recent-projects.reducer';
// import { State as ProjectsState } from './reducers/projects.reducer';
// import * as RecentProjectsActions from './actions/recent-projects.actions';
// import * as ProjectsActions from './actions/projects.actions';
// import * as CurrentProjectActions from './actions/current-project.actions';
//
// import { PipelineIntelligenceProject } from './models/project.model';
//
// @Injectable()
// export class PipelineIntelligenceProjectsStateService {
//     private _markTalentsForML = new Subject<{ talentIds: string[]; isUpvoted: boolean }>();
//
//     constructor(private _store: Store<PipelineIntelligenceProjectsState>) {}
//
//     sendMarkTalentsForML(talentIds: string[], isUpvoted: boolean) {
//         this._markTalentsForML.next({
//             talentIds: talentIds,
//             isUpvoted: isUpvoted
//         });
//     }
//
//     getMarkTalentsForML(): Observable<any> {
//         return this._markTalentsForML.asObservable();
//     }
//
//     addTalentToProject(projectId: string, talentId: string) {
//         this._store.dispatch(
//             new ProjectsActions.AddTalentToProject({ project: projectId, talent: talentId })
//         );
//     }
//
//     upvoteTalent(projectId: string, talentIds: string[]) {
//         this._store.dispatch(
//             new CurrentProjectActions.UpvoteTalentToProject({
//                 project: projectId,
//                 talents: talentIds
//             })
//         );
//     }
//
//     downvoteTalent(projectId: string, talentIds: string[]) {
//         this._store.dispatch(
//             new CurrentProjectActions.DownvoteTalentToProject({
//                 project: projectId,
//                 talents: talentIds
//             })
//         );
//     }
//
//     createProject(createProjectForm: any) {
//         this._store.dispatch(new ProjectsActions.CreateProject(createProjectForm));
//     }
//
//     getCurrentProjectStore() {
//         return this._store.pipe(select(getCurrentProjectQuery));
//     }
//
//     getRecentProjectsStore() {
//         return this._store.pipe(select(getRecentProjectsQuery));
//     }
//
//     getProjectsStore() {
//         return this._store.pipe(select(getProjectsQuery));
//     }
//
//     getRecentProjects() {
//         this._store.dispatch(new RecentProjectsActions.RetrieveRecentProjects());
//     }
//
//     getSavedCandidates() {
//         this._store.dispatch(new CurrentProjectActions.GetSavedCandidates());
//     }
//
//     getSuggestedCandidates() {
//         this._store.dispatch(new CurrentProjectActions.GetSuggestedCandidates());
//     }
//
//     getTopProjects() {
//         this._store.dispatch(new ProjectsActions.RetrieveProjects());
//     }
//
//     goToProjectsListPage(newPage: number) {
//         this._store.dispatch(new ProjectsActions.SetProjectsPageNumber(newPage));
//         this.getTopProjects();
//     }
//
//     goToSavedCandidatesPage(newPage: number) {
//         this._store.dispatch(new CurrentProjectActions.SetSavedCandidatesPageNumber(newPage));
//         this.getSavedCandidates();
//     }
//
//     removeTalentFromProject(projectId: string, talentId: string) {
//         this._store.dispatch(
//             new ProjectsActions.RemoveTalentFromProject({ project: projectId, talent: talentId })
//         );
//     }
//
//     setCurrentProject(project: PipelineIntelligenceProject) {
//         this._store.dispatch(new CurrentProjectActions.SetProject(project));
//     }
//
//     setCurrentProjectTab(tabId: number) {
//         this._store.dispatch(new CurrentProjectActions.SetProjectTab(tabId));
//     }
//
//     setIsViewingProject(viewing: boolean) {
//         this._store.dispatch(new CurrentProjectActions.SetIsViewingProject(viewing));
//     }
//
//     toggleCreateMode() {
//         this._store.dispatch(new ProjectsActions.ToggleCreateMode());
//     }
//
//     selectSavedCandidates(ids: string[]) {
//         this._store.dispatch(new CurrentProjectActions.AddTalentIdsToSelectedSaved(ids));
//     }
//
//     selectSuggestedCandidates(ids: string[]) {
//         this._store.dispatch(new CurrentProjectActions.AddTalentIdsToSelectedSuggested(ids));
//     }
//
//     unselectSavedCandidates(ids: string[]) {
//         this._store.dispatch(new CurrentProjectActions.RemoveTalentIdFromSelectedSaved(ids));
//     }
//
//     unselectSuggestedCandidates(ids: string[]) {
//         this._store.dispatch(new CurrentProjectActions.RemoveTalentIdFromSelectedSuggested(ids));
//     }
//
//     resetSelectedSavedCandidates() {
//         this._store.dispatch(new CurrentProjectActions.ResetSelectedSaved());
//     }
//
//     resetSelectedSuggestedCandidates() {
//         this._store.dispatch(new CurrentProjectActions.ResetSelectedSuggested());
//     }
// }
