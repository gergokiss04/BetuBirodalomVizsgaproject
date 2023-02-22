Amiket telepítettem a .NET6 project során:
-Microsoft.EntityFrameworkCore(6.0.14)
-Microsoft.EntityFrameworkCore.Tools(6.0.14)
-MySql.EntityFrameworkCore(6.0.10)

Alapértelmezetten fent van:
-Swashbuckle.AspNetCore(6.2.3)


Amit be kell írni a Package Manager Console-ba:

Scaffold-DbContext "server=localhost;database=bookshop;user=root;password=;ssl mode=none;" mysql.entityframeworkcore -outputdir Models -f


Az adatbázis tartalmazza a project bookshop (1).sql néven!
