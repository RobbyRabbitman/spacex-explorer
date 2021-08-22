import { Component, Input } from '@angular/core';
import { Mass } from '@spacex/shared/types/common';
import { RocketPayloadWeight } from '@spacex/shared/types/rocket';
import { isNonNull } from '@spacex/shared/util/util-ts';

class Data implements Pick<RocketPayloadWeight, 'id' | 'name'> {
  public readonly id: string;
  public readonly name: string;
  public readonly mass: Mass;
  constructor(payload: RocketPayloadWeight) {
    this.id = payload.id;
    this.name = payload.name;
    this.mass = { ...payload };
  }
}

@Component({
  selector: 'rocket-ui-rocket-payloads-weight-table',
  templateUrl: './rocket-payloads-weight-table.component.html',
  styleUrls: ['./rocket-payloads-weight-table.component.scss'],
})
export class RocketPayloadsWeightTableComponent {
  private _data: Array<Data> | undefined;
  public get data(): Array<Data> | undefined {
    return this._data;
  }

  private _columns: Array<string> = ['name', 'mass'];
  public get columns(): Array<string> | undefined {
    return this._columns;
  }

  @Input()
  public set payloads(payloads: Array<RocketPayloadWeight>) {
    if (isNonNull(payloads) && payloads.length > 0) {
      this._data = payloads.map((p) => new Data(p));
      //this._columns = Object.keys(this._data[0]);
    }
  }
}
