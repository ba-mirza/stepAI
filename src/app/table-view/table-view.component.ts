import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LOAD_PRODUCTS} from "../constants/constants";
import {Products} from "../models/models";
import {MatMenuTrigger} from "@angular/material/menu";

const ELEMENT_DATA: Products[] = [
  {brand: "Tefal", vendor_code: 1.0079, product_title: 'Tefal KI700830 SER', price: 4654, isHave: true},
  {brand: "Tefal", vendor_code: 4.0026, product_title: 'Electro Tefal Silver BF925232', price: 7990, isHave: false},
  {brand: "Tefal", vendor_code: 1.2006, product_title: 'Xiaomi KO4567 Tefal Silver BF925232', price: 9190, isHave: true},
  {brand: "Xiaomi", vendor_code: 1.0026, product_title: 'Xiaomi Tefal Gold BF925232', price: 17390, isHave: false},
  {brand: "Xiaomi", vendor_code: 3.036, product_title: 'Electro Tefal Gold BF256879', price: 1290, isHave: true},
  {brand: "Xiaomi", vendor_code: 12.0426, product_title: 'Xiaomi MI Tefal Silver TS-232', price: 3500, isHave: true},
];

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated
})
export class TableViewComponent implements OnInit {
  public displayedColumns: string[] = ['brand', 'vendor_code', 'product', 'price', 'isHave'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  products$: Observable<Products[]> = this.store.select(state => state.products)

  constructor(
    private store: Store<{products: Products[]}>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: LOAD_PRODUCTS});
  }

  public applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
