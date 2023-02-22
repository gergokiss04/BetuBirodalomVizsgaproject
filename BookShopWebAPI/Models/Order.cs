using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BookShopWebAPI.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int IsbnbookId { get; set; }
        public int StockNumber { get; set; }
        public DateTime OrderDate { get; set; }

        [JsonIgnore]
        public virtual Book Isbnbook { get; set; } = null!;

        [JsonIgnore]
        public virtual User User { get; set; } = null!;
    }
}
