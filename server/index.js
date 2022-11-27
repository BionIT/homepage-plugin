import { HomePageServerPlugin } from "./plugin";
import { schema } from '@osd/config-schema';

export const configSchema = schema.object({
    enabled: schema.boolean({ defaultValue: true }),
});
  
export const config = {
    schema: configSchema,
};

export const plugin = (initializerContext) =>
    new HomePageServerPlugin(initializerContext);