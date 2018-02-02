/*
 * ---------------------------------------------------------------------------
 *
 * COPYRIGHT (c) 2016 Mnubo Inc. All Rights Reserved.
 *
 * The copyright to the computer program(s) herein is the property of Mnubo
 * Inc. The program(s) may be used and/or copied only with the written
 * permission from Mnubo Inc. or in accordance with the terms and conditions
 * stipulated in the agreement/contract under which the program(s) have been
 * supplied.
 *
 * ---------------------------------------------------------------------------
 */

import * as gsx from 'gsx';
import * as Bluebird from 'bluebird';

export function getData(): Promise<any> {
  return new Bluebird((resolve, reject)  => {
    gsx('1G6OtFmw_etfWqLQfKAmV1SYoz4jCKb5c1f0ooeiPqr0', function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    })
  });
}
