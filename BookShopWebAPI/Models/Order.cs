using System;
using System.Collections.Generic;

namespace BookShopWebAPI.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int IsbnbookId { get; set; }
        public int StockNumber { get; set; }
        public DateTime OrderDate { get; set; }

        public virtual Book Isbnbook { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
