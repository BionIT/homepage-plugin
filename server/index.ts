import {configSchema, ConfigSchema} from "../common/config";
import { PluginConfigDescriptor, PluginInitializerContext } from 'opensearch-dashboards/server';
import { HomePageServerPlugin } from "./plugin";

export interface HomePageServerPluginStart {}
export interface HomePageServerPluginSetUp {}

export const config: PluginConfigDescriptor<ConfigSchema> = {
    // exposeToBrowser: {
    //     pinpointPoolId: true,
    //     appClientId: true,
    //     region: true
    // },
    schema: configSchema,
};

export const plugin = (initializerContext: PluginInitializerContext) =>
    new HomePageServerPlugin(initializerContext);