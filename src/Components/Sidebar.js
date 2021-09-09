import React from "react";
import { Navigation } from '@shopify/polaris';
import { HomeMajor, CashDollarMajor, QuestionMarkMajor, CircleAlertMajor, SettingsMajor, StoreStatusMajor } from '@shopify/polaris-icons';
export default function Sidebar() {
	const [flag1, setFlag1] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  const handleFlag1 = React.useCallback(() => setFlag1(!flag1));
  const handleFlag2 = React.useCallback(() => setFlag2(!flag2));
	return (
		<Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/',
          label: 'Home',
          icon: HomeMajor,
        },
        {
          url: false,
          matches: true,
          label: 'Statistics',
          icon: StoreStatusMajor,
          selected: flag1,
          onClick: handleFlag1,
          // secondaryAction: {
          //   icon: DropdownMinor,
          // },
          subNavigationItems: [
            {
              url: '/statistics/dashboard',
              disabled: false,
              label: 'Dashboard',
            },
            {
              url: '/statistics/search_analytics',
              disabled: false,
              label: 'Search Analytics',
            },
            {
              url: '/statistics/conversions',
              label: 'Conversions',
            },
          ],
        },
        {
          url: false,
          matches: true,
          label: 'Settings',
          icon: SettingsMajor,
          selected: flag2,
          onClick: handleFlag2,
          // secondaryAction: {
          //   icon: DropdownMinor,
          // },
          subNavigationItems: [
            {
              url: '/settings/instant_search',
              disabled: false,
              label: 'Instant search',
            },
            {
              url: '/settings/synonyms',
              disabled: false,
              label: 'Synonyms',
            },
            {
              url: '/settings/result_page',
              label: 'Result page',
            },
            {
              url: '/settings/advanced',
              label: 'Advanced',
            },
          ],
        },
        {
          url: '/pricing',
          label: 'Pricing',
          icon: CashDollarMajor,
        },
        {
          url: '/help',
          label: 'Help',
          icon: CircleAlertMajor,
        },
        {
          url: '/feature_request',
          label: 'Feature Request',
          icon: QuestionMarkMajor,
        },
      ]}
    />
  </Navigation>
	)	
};