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
import Iframe from 'react-iframe';
import { TechRadarComponentProps } from '../api';
import { Page } from '@backstage/core-components';

const URL_SERVER = 'http://localhost:8080/';

export type TechRadarPageProps = TechRadarComponentProps & {
  title?: string;
  subtitle?: string;
  pageTitle?: string;
};

export const RadarPage = ({}: TechRadarPageProps): JSX.Element => {
  return (
    <Page themeId="tool">
      <Iframe
        url={URL_SERVER}
        position="absolute"
        width="96%"
        id="myId"
        height="100%"
        styles={{ height: '25px' }}
      />
    </Page>
  );
};
