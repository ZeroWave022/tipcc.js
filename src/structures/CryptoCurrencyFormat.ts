import { ApiCurrencyFormat } from '../types/TipccApi';
import CryptoCurrencyUnit from './CryptoCurrencyFormatUnits';

/**
 * A class for storing an API cryptocurrency format.
 */
export default class CryptoCurrencyFormat {
  public scale: number;

  public units: CryptoCurrencyUnit[];

  /**
   * Create a CryptoCurrencyFormat.
   * @param payload The format from the API
   */
  constructor(payload: ApiCurrencyFormat) {
    this.scale = payload.scale;
    this.units = payload.units.map((unit) => new CryptoCurrencyUnit(unit));
  }
}
