import { Component, OnInit, Input } from '@angular/core';
import { TransactionSummaryModel } from 'gen/nswag';

@Component({
  selector: 'blockexplorer-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  @Input() transaction: TransactionSummaryModel = null;

  constructor() { }

  ngOnInit() {
  }

  public get fees() {
    return this.transaction.fee.satoshi || 0;
  }

  public get amount() {
    return this.transaction.amount.satoshi || 0;
  }

  public get height() {
    return this.transaction.height || 0;
  }

  public get hash() {
    return this.transaction.hash || '';
  }

  public get time() {
    if (!this.transaction || !this.transaction.time) return 'Unknown';
    const date = new Date(1000 * this.transaction.time);

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  public get type() {
    if (!this.transaction) return 'Unknown';
    if (this.transaction.isCoinbase) return 'Coinbase';
    if (this.transaction.isCoinstake) return 'Coinstake';
    if (this.transaction.height === -50) return 'Smart Contract'
    return 'Transaction';
  }
}