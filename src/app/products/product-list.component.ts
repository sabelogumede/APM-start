// lifecycle hook OnInit import
import { Component, OnInit } from '@angular/core';
// my product interface - strong typing object
import { IProduct } from './product';
// import service
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage: string;


    // filter getter/setter
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    // filtered product list
    filteredProducts: IProduct[];
    // product data
    products: IProduct[] = [];

    // constructor taking in our filter - and injecting a service with data
    constructor(private productService: ProductService) {
        // moved filteredProducts to ngOnInt()
        // this.filteredProducts = this.products;
        // ---filter input---
        // this.listFilter = 'cart';
    }
    // passing event data from nested child stars to parent
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    // filter function
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        // import-subscribe to our data from a service
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                // assign it to filteredProducts
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });

    }


}
