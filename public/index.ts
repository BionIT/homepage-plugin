import { HomePagePlugin } from './plugin';
import { PluginInitializerContext } from 'opensearch-dashboards/public';

export interface HomePagePluginStart {}
export interface HomePagePluginSetUp {}

export const plugin = (initializerContext: PluginInitializerContext) =>
  new HomePagePlugin(initializerContext);