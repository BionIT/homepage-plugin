import { schema, TypeOf } from '@osd/config-schema';

export const configSchema = schema.object({
    enabled: schema.boolean({ defaultValue: true }),
});

export type ConfigSchema = TypeOf<typeof configSchema>;