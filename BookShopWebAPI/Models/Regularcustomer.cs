using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BookShopWebAPI.Models
{
    public partial class Regularcustomer
    {
        public Regularcustomer()
        {
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public int CardNumber { get; set; }
        public int Regularcustomer1 { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> Users { get; set; }
    }
}
