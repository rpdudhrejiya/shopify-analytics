import React from 'react';
import { hot } from 'react-hot-loader';
import './Assets/styles/app.css';
import {Navigation} from '@shopify/polaris';
import {HomeMajor, CashDollarMajor, QuestionMarkMajor, CircleAlertMajor, SettingsMajor, StoreStatusMajor} from '@shopify/polaris-icons';

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
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
          label: 'Statistics',
          icon: StoreStatusMajor,
          selected: true,
          subNavigationItems: [
            {
              url: '/statistics/dashboard',
              disabled: false,
              selected: true,
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
          label: 'Settings',
          icon: SettingsMajor,
          selected: true,
          subNavigationItems: [
            {
              url: '/settings/instant_search',
              disabled: false,
              selected: true,
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
  );
}

export default hot(module)(App);