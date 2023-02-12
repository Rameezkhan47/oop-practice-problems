var Store = /** @class */ (function () {
    function Store(invoiceNo, qty, price, description) {
        this.invoiceNo = invoiceNo;
        this.qty = qty;
        this.price = price;
        this.description = description;
    }
    Store.test = function () {
        console.log("I am static method and do not need an object to instantiate");
    };
    Store.prototype.getInvoiceNo = function () {
        console.log(this.invoiceNo);
        return this.invoiceNo;
    };
    Store.prototype.getQty = function () {
        console.log(this.qty);
        return this.qty;
    };
    Store.prototype.getPrice = function () {
        console.log(this.price);
        return this.price;
    };
    Store.prototype.getDescription = function () {
        console.log(this.description);
        return this.description;
    };
    Store.prototype.setInvoiceNo = function (invoiceNo) {
        this.invoiceNo = invoiceNo;
    };
    Store.prototype.setQty = function (qty) {
        if (qty < 0) {
            this.qty = 0;
        }
        else {
            this.qty = qty;
        }
    };
    Store.prototype.setPrice = function (price) {
        if (price < 0) {
            this.price = 0;
        }
        else {
            this.price = price;
        }
    };
    Store.prototype.setDescription = function (description) {
        this.description = description;
    };
    Store.prototype.getTotal = function () {
        return console.log(this.qty * this.price);
    };
    return Store;
}());
var store1 = new Store(24, 15, 100, "A hammer");
store1.getDescription();
store1.setDescription("A jack hammer");
store1.getDescription();
store1.getInvoiceNo();
store1.setInvoiceNo(47);
store1.getInvoiceNo();
store1.getQty();
store1.setQty(5);
store1.getQty();
store1.getPrice();
store1.setPrice(250);
store1.getPrice();
store1.getTotal();
Store.test();
