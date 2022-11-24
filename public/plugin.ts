import {
    AppMountParameters,
    CoreSetup,
    CoreStart,
    Plugin,
    PluginInitializerContext,
  } from 'opensearch-dashboards/public';
import { HomePagePluginSetUp, HomePagePluginStart } from '.';
import { ConfigSchema } from "../common/config";
import { uiSettingsService } from '../common/settings_service';

export class HomePagePlugin implements Plugin<HomePagePluginSetUp, HomePagePluginStart> {
    constructor(private readonly initializerContext: PluginInitializerContext<ConfigSchema>) {
}

    public setup(core: CoreSetup): HomePagePluginSetUp {
        uiSettingsService.init(core.uiSettings, core.notifications);
        core.application.register({
            id: 'homepage',
            title: 'Home Page',
            category: {
                id: 'opensearch',
                label: 'OpenSearch Plugins',
                order: 2000,
            },
            order: 99,
            async mount(params: AppMountParameters) {
                const { Homepage } = await import('./app');
                const [coreStart, depsStart] = await core.getStartServices();
                console.log("hey");
                return Homepage(coreStart, params);
            }
        });
        return {};
    }

    public start(core: CoreStart): HomePagePluginStart{
        return {};
    }
}