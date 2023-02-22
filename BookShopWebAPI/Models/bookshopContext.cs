using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BookShopWebAPI.Models
{
    public partial class bookshopContext : DbContext
    {
        public bookshopContext()
        {
        }

        public bookshopContext(DbContextOptions<bookshopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Books { get; set; } = null!;
        public virtual DbSet<Genre> Genres { get; set; } = null!;
        public virtual DbSet<Order> Orders { get; set; } = null!;
        public virtual DbSet<Regularcustomer> Regularcustomers { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;database=bookshop;user=root;password=;ssl mode=none;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("books");

                entity.HasIndex(e => e.GenreId, "IX_Books_Genre_Id");

                entity.Property(e => e.BookId)
                    .HasColumnType("int(11)")
                    .HasColumnName("Book_id");

                entity.Property(e => e.Author).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Cover).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.GenreId)
                    .HasColumnType("int(11)")
                    .HasColumnName("Genre_Id");

                entity.Property(e => e.Isbn)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("ISBN")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Language).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.PageNumber)
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Price)
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Publisher).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.RelaseYear)
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.StockNumber)
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Title).HasDefaultValueSql("'NULL'");

                entity.HasOne(d => d.Genre)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.GenreId)
                    .HasConstraintName("FK_Books_Genres_Genre_Id");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.ToTable("genres");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Genre1)
                    .HasColumnName("genre")
                    .HasDefaultValueSql("'NULL'");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("orders");

                entity.HasIndex(e => e.IsbnbookId, "IX_Orders_ISBNBook_id");

                entity.HasIndex(e => e.UserId, "IX_Orders_User_Id");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.IsbnbookId)
                    .HasColumnType("int(11)")
                    .HasColumnName("ISBNBook_id");

                entity.Property(e => e.OrderDate).HasMaxLength(6);

                entity.Property(e => e.StockNumber).HasColumnType("int(11)");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("User_Id");

                entity.HasOne(d => d.Isbnbook)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.IsbnbookId)
                    .HasConstraintName("FK_Orders_Books_ISBNBook_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Orders_Users_User_Id");
            });

            modelBuilder.Entity<Regularcustomer>(entity =>
            {
                entity.ToTable("regularcustomers");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.CardNumber).HasColumnType("int(11)");

                entity.Property(e => e.Regularcustomer1)
                    .HasColumnType("int(11)")
                    .HasColumnName("regularcustomer");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.RegularCustomerId, "IX_Users_regularCustomer_Id");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.BornDay).HasColumnType("int(11)");

                entity.Property(e => e.BornMonth).HasColumnType("int(11)");

                entity.Property(e => e.BornYear).HasColumnType("int(11)");

                entity.Property(e => e.Email).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.FirstName).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.LastName).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.Password).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.RegularCustomerId)
                    .HasColumnType("int(11)")
                    .HasColumnName("regularCustomer_Id");

                entity.HasOne(d => d.RegularCustomer)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RegularCustomerId)
                    .HasConstraintName("FK_Users_RegularCustomers_regularCustomer_Id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
