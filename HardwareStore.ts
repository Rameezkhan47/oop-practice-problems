class Store {
  private invoiceNo: number;
  private qty: number;
  private price: number;
  private description: string;

  constructor(
    invoiceNo: number,
    qty: number,
    price: number,
    description: string
  ) {
    this.invoiceNo = invoiceNo;
    this.qty = qty;
    this.price = price;
    this.description = description;

  }
  static test(): void {
    console.log("I am static method and do not need an object to instantiate")
}

  public getInvoiceNo(): number {
    console.log(this.invoiceNo);
    return this.invoiceNo;
  }

  public getQty(): number {
    console.log(this.qty);
    return this.qty;
  }
  public getPrice(): number {
    console.log(this.price);
    return this.price;
  }

  public getDescription(): string {
    console.log(this.description);
    return this.description;}

  public setInvoiceNo(invoiceNo: number) {
    this.invoiceNo = invoiceNo;
  }
  public setQty(qty: number) {
    if(qty < 0) {this.qty = 0}
    else
   { this.qty = qty;}
  }
  public setPrice(price: number) {
    if(price < 0) {this.price = 0}
    else {this.price = price}
  }
  public setDescription(description: string) {
    this.description = description;
  }
  public getTotal(){
    return console.log(this.qty * this.price)
  }
}

let store1 = new Store(24, 15, 100, "A hammer")
store1.getDescription()
store1.setDescription("A jack hammer")
store1.getDescription()
store1.getInvoiceNo()
store1.setInvoiceNo(47)
store1.getInvoiceNo()
store1.getQty()
store1.setQty(5)
store1.getQty()
store1.getPrice()
store1.setPrice(250)
store1.getPrice()
store1.getTotal()
Store.test()
