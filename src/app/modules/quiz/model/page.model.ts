export class PageModel {

  index: number;
  size: number;
  count: number;
  selectedPage: number;

  constructor(count: number) {
    this.index = 0;
    this.size = 1;
    this.count = count;
    this.selectedPage = 1;
  }
}
