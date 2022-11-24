import {
    CoreSetup,
    CoreStart,
    Plugin,
    PluginInitializerContext,
} from 'opensearch-dashboards/server';
import { HomePageServerPluginSetUp } from '.';
import {ConfigSchema} from "../common/config";

const setupRoutes = (router) => {
    router.get(
        {
          path: `app/homepage`,
          validate: {},
        },
        async (
          context,
          request,
          response
        ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
          const opensearchNotebooksClient: ILegacyScopedClusterClient = context.observability_plugin.observabilityClient.asScoped(
            request
          );
          try {
            const visualizationList = await customPanelBackend.getAllSavedVisualizations(
              opensearchNotebooksClient
            );
            return response.ok({
              body: {
                visualizations: visualizationList,
              },
            });
          } catch (error) {
            console.error('Issue in fetching saved visualizations:', error);
            return response.custom({
              statusCode: error.statusCode || 500,
              body: error.message,
            });
          }
        }
      );
    
}

export class HomePageServerPlugin implements Plugin<HomePageServerPluginSetUp, HomePageServerPluginStart> {
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    }

    public setup(core: CoreSetup): HomePageServerPluginSetUp {
        const router = core.http.createRouter();
        setupRoutes(router);
        return {};
    }

    public start(core: CoreStart) {
        return {};
    }

    public stop() {}
}