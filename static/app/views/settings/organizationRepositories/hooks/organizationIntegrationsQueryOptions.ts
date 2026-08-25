import type {OrganizationIntegration} from 'sentry/types/integrations';
import type {Organization} from 'sentry/types/organization';
import {apiOptions} from 'sentry/utils/api/apiOptions';

const ORGANIZATION_INTEGRATIONS_STALE_TIME = 60_000;

export function organizationIntegrationsQueryOptions({
  organization,
}: {
  organization: Organization;
}) {
  return apiOptions.as<OrganizationIntegration[]>()(
    '/organizations/$organizationIdOrSlug/integrations/',
    {
      path: {organizationIdOrSlug: organization.slug},
      query: {
        cursor: undefined,
        features: [],
        includeConfig: 0,
        providerKey: undefined,
      },
      staleTime: ORGANIZATION_INTEGRATIONS_STALE_TIME,
    }
  );
}
