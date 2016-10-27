/**
 * Created by codecosine on 16-8-16.
 */

export const graphOptions = (state) => state.storage.graphOptions;
export const currentApp = (state) => state.application.currentApp;
export const appList = (state) => state.application.appList;

export const synchronization = (state) => state.storage.synchronization;

export const userInfo = (state) => state.auth.user;
export const token = (state) => state.auth.token;
