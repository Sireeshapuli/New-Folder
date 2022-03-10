const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]; 

salesDisplay(sales);
function salesDisplay()
{
    const salesArr = [];
    for(i=0;i<sales.length;i++) 
    {
        if(sales[i].discount==null){
            var salesPrice = sales[i].original;
        }
        else{
            var salesPrice = sales[i].original-(sales[i].original*sales[i].discount);
        }
        var totalSales = salesPrice*sales[i].stock;

        var item=sales[i].item;
        var stock=sales[i].stock;
        var original=sales[i].original;
        var discount=sales[i].discount;
        
        salesArr.push({item,stock,original,discount,salesPrice,totalSales});
    }
console.log(salesArr)
    
}
 