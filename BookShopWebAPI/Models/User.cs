using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BookShopWebAPI.Models
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public int BornYear { get; set; }
        public int BornMonth { get; set; }
        public int BornDay { get; set; }
        public int RegularCustomerId { get; set; }

        [JsonIgnore]
        public virtual Regularcustomer RegularCustomer { get; set; } = null!;

        [JsonIgnore]
        public virtual ICollection<Order> Orders { get; set; }
    }
}
