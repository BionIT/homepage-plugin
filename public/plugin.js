export class HomePagePlugin{
    constructor(initializerContext) {}

    setup(core) {
        core.application.register({
            id: 'homepage',
            title: 'Home Page',
            category: {
                id: 'opensearch',
                label: 'OpenSearch Plugins',
                order: 2000,
            },
            order: 99,
            async mount(params) {
                const { Homepage } = await import('./app');
                const [coreStart, depsStart] = await core.getStartServices();
                return Homepage(coreStart, params);
            }
        });
        return {};
    }

    start(core){
        return {};
    }
}