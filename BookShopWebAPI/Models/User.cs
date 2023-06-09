﻿using System;
using System.Collections.Generic;

namespace BookShopWebAPI.Models
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string Fullname { get; set; } = null!;
        public string Salt { get; set; } = null!;
        public string Hash { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int RegularCustomerId { get; set; }

        public virtual Regularcustomer RegularCustomer { get; set; } = null!;
        public virtual ICollection<Order> Orders { get; set; }
    }
}
