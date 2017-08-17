import {Component, Input, OnInit} from '@angular/core';
import {PageModel} from "../../../model/page.model";

@Component({
  selector: 'qz-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: PageModel;
  protected paginationRange: Array<number>;
  @Input() nextPrevPagination: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

    if (this.page) {
      this.calculatePaginationRange(1, this.page.count);
    }
  }


  /**
   * @param {number} min
   * @param {number} max
   *
   * @returns {Array<number>}
   */
  private calculatePaginationRange(min: number, max: number) {

    this.paginationRange = [];

    for (let i = min; i <= max; i++) {
      this.paginationRange.push(i);
    }

    return this.paginationRange;
  };

  /**
   * @param {number} index
   */
  public goToPage(index: number) {

    if (index >= 0 && index < this.page.count) {

      this.page.index = index;
      this.page.selectedPage = index + 1;
      this.paginationRange = this.setPagination(this.paginationRange);
    }
  }

  /**
   * @param {Array<number>} paginationRange
   *
   * @returns {Array<number>}
   */
  private setPagination(paginationRange: Array<number>) {

    this.paginationRange = [];

    if (this.page.count + 1 <= 10) {
      paginationRange = this.calculatePaginationRange(1, this.page.count);
    } else {

      if (this.page.index <= 6) {
        paginationRange = this.calculatePaginationRange(1, 10);
      } else if (this.page.index + 4 >= this.page.count) {
        paginationRange = this.calculatePaginationRange(this.page.count - 9, this.page.count);
      } else {
        paginationRange = this.calculatePaginationRange(this.page.index - 5, this.page.index + 4);
      }

    }

    return paginationRange;
  }
}
