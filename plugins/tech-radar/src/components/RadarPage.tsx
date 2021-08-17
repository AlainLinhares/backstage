/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core';
import { TechRadarComponentProps } from '../api';
import {
  Page,
  Header,
} from '@backstage/core-components';

const useStyles = makeStyles(() => ({
  overflowXScroll: {
    overflowX: 'scroll',
  },
}));

export type TechRadarPageProps = TechRadarComponentProps & {
  title?: string;
  subtitle?: string;
  pageTitle?: string;
};

export const RadarPage = ({
  title,
  subtitle,
  pageTitle,
  ...props
}: TechRadarPageProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Page themeId="tool">
      <Header title={title} subtitle={subtitle} />
      <Iframe url="http://localhost:8080/"
        width="1700px"
        height="780px"
        id="myId"
        className="myClassname"
        position="relative" />
    </Page>
  );
};

RadarPage.defaultProps = {
  title: 'Tech Radar',
  subtitle: 'Pick the recommended technologies for your projects',
  pageTitle: 'Company Radar',
};
